import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Loader } from '../src';

storiesOf('Loader', module).add(
  'Loader component',
  withInfo({
    inline: true,
    text: 'An animated loading indicator. Centers itself in parent container.'
  })(() => <Loader color="#000" />)
);
