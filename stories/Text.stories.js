import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import { withKnobs, text, boolean, color } from '@storybook/addon-knobs';

import { Text } from '../lib/monument-ui.esm';

const wrapperStyles = {
  display: 'flex',
  minWidth: '100%',
  minHeight: 'calc(100vh - 16px)',
  alignItems: 'center',
  justifyContent: 'center',
};

export default {
  title: 'Text',
  decorators: [
    (storyFn) => <div style={wrapperStyles}>{storyFn()}</div>,
    withKnobs,
  ],
};

const Title = styled.h1`
  font-weight: 900;
  font-family: 'Heebo', sans-serif;
  font-size: calc(1.5em + (3 - 1.5) * ((100vw - 180px) / (35 - 21)));
  margin: 0 0.24vmax 1vmax;
`;

export const normal = () => (
  <Text
    as={Title}
    colorify={boolean('Colorify', true)}
    perspective={{
      x: text('X tilt', '0.8vmax'),
      y: text('Y tilt', '1.4vmax'),
    }}
    shadow={text('Shadow', '10px 10px 20px #222a')}
    style={{
      color: color('Text Color', '#a777d8'),
      margin: '0 auto',
      textAlign: 'center',
    }}
    color={color('3D Effect Color', '#721dc6')}
  >
    MONUMENT UI
  </Text>
);
