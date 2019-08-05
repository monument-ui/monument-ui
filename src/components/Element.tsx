import React, { useState, useEffect, useRef, ReactElement } from 'react';

import { Props } from '../interfaces';
import { Events, Children, Actions, Depth } from '../types';

import { Base } from '../bases/Element';

import { convertUnits, countLevels } from '../helpers';

export const Element = ({
  color,
  shadow = '',
  colorify = false,
  perspective = { x: 5, y: 5 },
  clickable,
  hoverable,
  touchable,
  children,
  ...props
}: Props & Events & { children?: Children }): ReactElement => {
  const el = useRef<HTMLDivElement>(null);

  const [layers, setLayers] = useState<string>('');
  const [animate, setAnimate] = useState<boolean>(false);

  const [clickEvent, setClickEvent] = useState<Actions>();
  const [hoverEvent, setHoverEvent] = useState<Actions>();
  const [touchEvent, setTouchEvent] = useState<Actions>();

  const [depth, setDepth] = useState<Depth>({
    x: convertUnits(perspective.x),
    y: convertUnits(perspective.y)
  });

  useEffect(() => {
    const generateLayers = () => {
      let x: number = convertUnits(perspective.x);
      let y: number = convertUnits(perspective.y);

      let extraX: number;
      let extraY: number;

      if (
        (clickEvent && clickable === 'pull') ||
        (hoverEvent && hoverable === 'pull') ||
        (touchEvent && touchable === 'pull')
      ) {
        extraX = x > 0 ? x / 2 : x < 0 ? -x / 2 : 0;
        extraY = y > 0 ? y / 2 : y < 0 ? -y / 2 : 0;
      } else {
        extraX = 0;
        extraY = 0;
      }

      const axis: { x: number; y: number } = { x, y };

      if (clickEvent || hoverEvent || touchEvent) setAnimate(true);

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
    };

    generateLayers();

    el.current!.addEventListener('mousedown', () => setClickEvent(clickable));
    el.current!.addEventListener('mouseup', () => setClickEvent(undefined));

    el.current!.addEventListener('mouseenter', () => setHoverEvent(hoverable));
    el.current!.addEventListener('mouseleave', () => setHoverEvent(undefined));

    el.current!.addEventListener('touchstart', () => setTouchEvent(touchable), {
      passive: true
    });

    el.current!.addEventListener('touchend', () => setTouchEvent(undefined));

    window.addEventListener('resize', generateLayers);
    window.removeEventListener('resize', generateLayers);
  }, [
    clickEvent,
    clickable,
    color,
    colorify,
    layers,
    hoverEvent,
    hoverable,
    perspective.x,
    perspective.y,
    shadow,
    touchable,
    touchEvent
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
    >
      {children}
    </Base>
  );
};
