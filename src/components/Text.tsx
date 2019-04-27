import React, { useState, useEffect } from 'react';

import { Base } from '../bases/Text';

import { Props } from '../interfaces';
import { Depth } from '../types';

import { convertUnits, countLevels } from '../helpers';

export const Text = ({
  color,
  shadow = '',
  colorify = false,
  perspective = { x: 5, y: 5 },
  ...props
}: Props): JSX.Element => {
  const [layers, setLayers] = useState<string>('');

  const depth: Depth = {
    x: convertUnits(perspective.x),
    y: convertUnits(perspective.y)
  };

  useEffect(() => {
    const generateLayers = (): void => {
      const levels = countLevels({
        x: convertUnits(perspective.x),
        y: convertUnits(perspective.y),
        color,
        shadow,
        colorify
      });

      setLayers(levels);
    };

    generateLayers();

    window.addEventListener('resize', () => generateLayers());
    window.removeEventListener('resize', () => generateLayers());
  }, [color, colorify, perspective.x, perspective.y, shadow]);

  return <Base depth={depth} layers={layers} {...props} />;
};
