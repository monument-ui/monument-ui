import React, { useState, useEffect, useRef } from 'react';

import { Base } from '../bases/Text';

import Props from '../interfaces/Props';

import { convertUnits, countLayers } from '../helpers';

export const Text = ({
  color = '#ccc',
  colorify = false,
  perspective = { x: 5, y: 5 },
  shadow = '',
  ...props
}: Props): JSX.Element => {
  const el: React.Ref<HTMLElement> = useRef();

  const [layers, setLayers]: [string, any] = useState('');
  const [depth, setDepth]: [{ x: number; y: number }, any] = useState({
    x: 0,
    y: 0
  });

  useEffect(() => {
    const generateLayers = (): void => {
      let x: number = convertUnits(perspective.x);
      let y: number = convertUnits(perspective.y);

      setLayers(countLayers({ x, y, color, shadow, colorify }));
      setDepth({ x, y });
    };

    generateLayers();

    window.addEventListener('resize', () => generateLayers());
    el.current.addEventListener('mouseover', () => generateLayers());
  }, [color, colorify, perspective.x, perspective.y, shadow]);

  return <Base ref={el} layers={layers} depth={depth} {...props} />;
};
