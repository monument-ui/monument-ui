import React, { useState, useEffect, useRef } from 'react';

import { Props } from '../interfaces';
import { Events, Actions, Depth } from '../types';

import { Base } from '../bases/Element';

import { convertUnits, countLevels } from '../helpers';

export const Element = ({
  color,
  shadow = '',
  colorify = false,
  perspective = { x: 5, y: 5 },
  hoverable,
  clickable,
  touchable,
  ...props
}: Props & Events): JSX.Element => {
  const el = useRef<HTMLDivElement>(null);

  const [layers, setLayers] = useState<string>('');
  const [animate, setAnimate] = useState<boolean>(false);
  const [mode, setMode] = useState<string | null>(null);

  const [clickEvent, setClickEvent] = useState<Actions>();
  const [touchEvent, setTouchEvent] = useState<Actions>();
  const [hoverEvent, setHoverEvent] = useState<Actions>();

  const [depth, setDepth] = useState<Depth>({
    x: convertUnits(perspective.x),
    y: convertUnits(perspective.y)
  });

  useEffect(() => {
    const generateLayers = (): void => {
      let x: number = convertUnits(perspective.x);
      let y: number = convertUnits(perspective.y);

      let extraX: number;
      let extraY: number;

      if (
        (mode === 'mousedown' && clickable === 'pull') ||
        (mode === 'mouseenter' && hoverable === 'pull') ||
        (mode === 'touchstart' && touchable === 'pull')
      ) {
        extraX = x > 0 ? x / 2 : x < 0 ? -x / 2 : 0;
        extraY = y > 0 ? y / 2 : y < 0 ? -y / 2 : 0;
      } else {
        extraX = 0;
        extraY = 0;
      }

      if (layers) setAnimate(true);

      const axis: { x: number; y: number } = { x, y };

      axis.x = Math.round(
        axis.x > 0 ? axis.x + extraX : axis.x < 0 ? axis.x - extraX : axis.x
      );

      axis.y = Math.round(
        axis.y > 0 ? axis.y + extraY : axis.y < 0 ? axis.y - extraY : axis.y
      );

      const levels = countLevels({
        x: axis.x,
        y: axis.y,
        color,
        shadow,
        colorify
      });

      setLayers(levels);

      setDepth({
        x: axis.x,
        y: axis.y
      });

      if ('ontouchstart' in window) {
        setTouchEvent(touchable);
      } else {
        setClickEvent(clickable);
        setHoverEvent(hoverable);
      }
    };

    generateLayers();

    el.current!.addEventListener('mousedown', () => setMode('mousedown'));
    el.current!.addEventListener('mouseup', () => setMode(null));

    el.current!.addEventListener('mouseenter', () => setMode('mouseenter'));
    el.current!.addEventListener('mouseleave', () => setMode(null));

    el.current!.addEventListener('touchstart', () => setMode('touchstart'));
    el.current!.addEventListener('touchend', () => setMode(null));

    window.addEventListener('resize', () => generateLayers());
    window.removeEventListener('resize', () => generateLayers());
  }, [
    clickable,
    color,
    colorify,
    hoverable,
    layers,
    mode,
    perspective.x,
    perspective.y,
    shadow,
    touchable
  ]);

  return (
    <Base
      ref={el}
      depth={depth}
      layers={layers}
      animate={animate}
      clickable={clickEvent}
      hoverable={hoverEvent}
      touchable={touchEvent}
      {...props}
    />
  );
};
