import React, { useState, useEffect } from 'react';

import { Base } from '../bases/Text';

import { Props } from '../interfaces';
import { Depth } from '../types';

import { convertUnits, countLevels } from '../helpers';

export const Text = ({
  color = '#ccc',
  colorify = false,
  perspective = { x: 5, y: 5 },
  shadow = '',
  ...props
}: Props): JSX.Element => {
  const [layers, setLayers] = useState<string>('');

  const depth: Depth = {
    x: convertUnits(perspective.x),
    y: convertUnits(perspective.y)
  };

  useEffect(() => {
    const generateLayers = (): void => {
      setLayers(
        countLevels({
          x: depth.x,
          y: depth.y,
          color,
          shadow,
          colorify
        })
      );
    };

    generateLayers();

    window.addEventListener('resize', () => generateLayers());
    window.removeEventListener('resize', () => generateLayers());
  }, [color, colorify, depth.x, depth.y, shadow]);

  return <Base layers={layers} depth={depth} {...props} />;
};
