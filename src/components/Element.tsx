import React, { useState, useEffect, useRef } from 'react';

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

  const generateLayers = (mode?: string): void => {
    let x: number = convertUnits(perspective.x);
    let y: number = convertUnits(perspective.y);

    let extraX: number;
    let extraY: number;

    if (mode === 'mouseenter' && hoverable) {
      extraX = el.current.offsetWidth / 10;
      extraY = el.current.offsetHeight / 10;

      setAnimate(true);
    } else {
      extraX = 0;
      extraY = 0;
    }

    const max: { x: number; y: number } = {
      x: el.current.offsetWidth / 2 + extraX,
      y: el.current.offsetHeight / 2 + extraY
    };

    const axis: { x: number; y: number } = checkMax(max, { x, y });

    axis.x = Math.round(axis.x + extraX);
    axis.y = Math.round(axis.y + extraY);

    setLayers(
      countLayers({
        x: axis.x,
        y: axis.y,
        color,
        shadow,
        colorify
      })
    );

    setDepth({ x: axis.x + extraX, y: axis.y + extraY });
    setClickEvent(clickable);
  };

  useEffect(() => {
    generateLayers();

    window.addEventListener('resize', () => generateLayers());
  }, []);

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
