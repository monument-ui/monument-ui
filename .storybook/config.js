import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { Col, Reset } from '../src';

addDecorator(story => (
  <Reset>
    <Col>{story()}</Col>
  </Reset>
));

const req = require.context('.', true, /\.js$/);

const load = () => req.keys().forEach(req);

configure(load, module);
