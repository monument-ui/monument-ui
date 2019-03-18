import React, { useState, useEffect, useCallback, useRef } from 'react';

import Props from '../interfaces/Props';
import { Events } from '../types/Events';

import { Base } from '../bases/Element';

import { convertUnits, countLayers, checkMax } from '../helpers';

export const Element = ({
  perspective = { x: 5, y: 5 },
  color = '#444',
  shadow = '',
  colorify = false,
  hoverable = false,
  clickable = false,
  ...props
}: Props & Events): JSX.Element => {
  const el: React.Ref<HTMLElement> = useRef();

  const [layers, setLayers]: [string, any] = useState('');
  const [depth, setDepth]: [{ x: number; y: number }, any] = useState({
    x: 0,
    y: 0
  });
  const [animate, setAnimate]: [boolean, any] = useState(false);
  const [clickEvent, setClickEvent]: [boolean, any] = useState(false);

  const generateLayers = useCallback(
    (mode?: string): void => {
      let x: number = convertUnits(perspective.x);
      let y: number = convertUnits(perspective.y);

      let extraX: number;
      let extraY: number;

      if (mode === 'mouseenter' && hoverable) {
        extraX = el.current.offsetWidth / 10;
        extraY = el.current.offsetHeight / 10;
      } else {
        extraX = 0;
        extraY = 0;
      }

      if (mode) setAnimate(true);

      const max: { x: number; y: number } = {
        x: el.current.offsetWidth + extraX / 2,
        y: el.current.offsetHeight + extraY / 2
      };

      const axis: { x: number; y: number } = checkMax(max, { x, y });

      axis.x = Math.round(
        axis.x > 0 ? axis.x + extraX : axis.x < 0 ? axis.x - extraX : axis.x
      );

      axis.y = Math.round(
        axis.y > 0 ? axis.y + extraY : axis.y < 0 ? axis.y - extraY : axis.y
      );

      setLayers(
        countLayers({
          x: axis.x,
          y: axis.y,
          color,
          shadow,
          colorify
        })
      );

      setDepth({ x: axis.x, y: axis.y });
      setClickEvent(clickable);
    },
    [
      clickable,
      color,
      colorify,
      hoverable,
      perspective.x,
      perspective.y,
      shadow
    ]
  );

  useEffect(() => {
    generateLayers();

    window.addEventListener('resize', () => generateLayers());
  }, [generateLayers]);

  return (
    <Base
      ref={el}
      onMouseEnter={() => generateLayers('mouseenter')}
      onMouseLeave={() => generateLayers('mouseleave')}
      layers={layers}
      depth={depth}
      animate={animate}
      clickable={clickEvent}
      {...props}
    />
  );
};
