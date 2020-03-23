import React, { useState, useEffect } from 'react';

import { Base } from '../bases/Text';

import { Props } from '../interfaces';
import { Depth } from '../types';

import { convertUnits, countLevels } from '../helpers';

export const Text: React.FC<Props> = ({
  color,
  shadow = '',
  colorify = false,
  perspective = { x: 5, y: 5 },
  children,
  ...props
}) => {
  const [layers, setLayers] = useState('');

  const depth: Depth = {
    x: convertUnits(perspective.x),
    y: convertUnits(perspective.y),
  };

  useEffect(() => {
    const generateLayers = () => {
      const levels = countLevels({
        x: convertUnits(perspective.x),
        y: convertUnits(perspective.y),
        color,
        shadow,
        colorify,
      });

      setLayers(levels);
    };

    generateLayers();

    window.addEventListener('resize', generateLayers);
    window.removeEventListener('resize', generateLayers);
  }, [color, colorify, perspective.x, perspective.y, shadow]);

  return (
    <Base {...props} depth={depth} layers={layers}>
      {children}
    </Base>
  );
};
