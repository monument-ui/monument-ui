import React, { useState, useEffect, useRef } from 'react';

import { Props } from '../interfaces';
import { Events, Depth } from '../types';

import { Base } from '../bases/Element';

import { convertUnits, countLevels, setMax } from '../helpers';

export const Element = ({
  perspective = { x: 5, y: 5 },
  color = '#444',
  shadow = '',
  colorify = false,
  hoverable = false,
  clickable = false,
  ...props
}: Props & Events): JSX.Element => {
  const el = useRef<HTMLElement>(null);

  const [layers, setLayers] = useState<string>('');
  const [animate, setAnimate] = useState<boolean>(false);
  const [clickEvent, setClickEvent] = useState<boolean>(false);
  const [depth, setDepth] = useState<Depth>({
    x: convertUnits(perspective.x),
    y: convertUnits(perspective.y)
  });
  const [mode, setMode] = useState<string>(null);

  useEffect(() => {
    const generateLayers = (): void => {
      let x: number = convertUnits(perspective.x);
      let y: number = convertUnits(perspective.y);

      let extraX: number;
      let extraY: number;

      if (mode === 'mouseenter' && hoverable) {
        extraX = x > 0 ? x / 2 : x < 0 ? -x / 2 : 0;
        extraY = y > 0 ? y / 2 : y < 0 ? -y / 2 : 0;
      } else {
        extraX = 0;
        extraY = 0;
      }

      if (mode) setAnimate(true);

      const max: { x: number; y: number } = {
        x: el.current.offsetWidth / 10,
        y: el.current.offsetHeight / 10
      };

      const axis: { x: number; y: number } = setMax(max, { x, y });

      axis.x = Math.round(
        axis.x > 0 ? axis.x + extraX : axis.x < 0 ? axis.x - extraX : axis.x
      );

      axis.y = Math.round(
        axis.y > 0 ? axis.y + extraY : axis.y < 0 ? axis.y - extraY : axis.y
      );

      setLayers(
        countLevels({
          x: axis.x,
          y: axis.y,
          color,
          shadow,
          colorify
        })
      );

      setDepth({ x: axis.x, y: axis.y });
      setClickEvent(clickable);
    };

    generateLayers();

    window.addEventListener('resize', () => generateLayers());
  }, [
    clickable,
    color,
    colorify,
    hoverable,
    mode,
    perspective.x,
    perspective.y,
    shadow
  ]);

  return (
    <Base
      ref={el}
      onMouseEnter={() => setMode('mouseenter')}
      onMouseLeave={() => setMode(null)}
      layers={layers}
      depth={depth}
      animate={animate}
      clickable={clickEvent}
      {...props}
    />
  );
};
