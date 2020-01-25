import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import {
  withKnobs,
  text,
  boolean,
  radios,
  color
} from '@storybook/addon-knobs';

import { Element } from '../lib/monument-ui.esm';

const wrapperStyles = {
  display: 'flex',
  minWidth: '100%',
  minHeight: 'calc(100vh - 16px)',
  alignItems: 'center',
  justifyContent: 'center'
};

export default {
  title: 'Element',
  decorators: [
    storyFn => <div style={wrapperStyles}>{storyFn()}</div>,
    withKnobs
  ]
};

export const normal = () => (
  <Element
    style={{
      backgroundColor: color('Element Color', 'rgb(249, 136, 14)'),
      margin: '0 auto',
      width: 300,
      height: 300,
      borderRadius: 10
    }}
    colorify={boolean('Colorify', true)}
    shadow={text('Shadow', '10px 10px 20px #2222')}
    hoverable={radios('Hoverable', {
      pull: 'pull',
      push: 'push',
      false: ''
    })}
    clickable={radios('Clickable', {
      pull: 'pull',
      push: 'push',
      false: ''
    })}
    touchable={radios('Touchable', {
      pull: 'pull',
      push: 'push',
      false: ''
    })}
    perspective={{
      x: text('X tilt', '0.8vmax'),
      y: text('Y tilt', '-0.8vmax')
    }}
    color={color('3D Effect Color', '#f7ae60')}
  />
);
