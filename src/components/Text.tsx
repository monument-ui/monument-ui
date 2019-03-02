import React, { useState, useEffect, useRef } from 'react';

import { Base } from '../bases/Text';

import Props from '../interfaces/Props';

import { convertUnits } from '../helpers/convertUnits';
import { countLayers } from '../helpers/layers';

export const Text = ({
  perspective = { x: 5, y: 5 },
  color = '#ccc',
  shadow = '',
  colorify = false,
  ...props
}: Props): JSX.Element => {
  const el: React.Ref<object> = useRef();

  const [layers, setLayers]: [string, any] = useState('');
  const [depth, setDepth]: [{ x: number; y: number }, any] = useState({
    x: 0,
    y: 0
  });

  const generateLayers = (): void => {
    let x: number = convertUnits(perspective.x);
    let y: number = convertUnits(perspective.y);

    setLayers(countLayers({ x, y, color, shadow, colorify }));
    setDepth({ x, y });
  };

  useEffect(() => {
    generateLayers();

    window.addEventListener('resize', () => generateLayers());
    el.current.addEventListener('mouseover', () => generateLayers());
  }, []);

  return <Base ref={el} layers={layers} depth={depth} {...props} />;
};
