import React, { Component } from 'react';

import { Base } from '../bases/Text';

import Props from '../interfaces/Props';

import { convertUnits } from '../helpers/convertUnits';
import { countLayers } from '../helpers/layers';

export class Text extends Component<Props> {
  el: React.Ref<object> = React.createRef();

  state = {
    layers: '',
    depth: {
      x: 0,
      y: 0
    }
  };

  generateLayers = () => {
    const {
      perspective = { x: 5, y: 5 },
      color = '#ccc',
      shadow = '',
      colorify = false
    } = this.props;

    let x: number = convertUnits(perspective.x);
    let y: number = convertUnits(perspective.y);

    this.setState({
      layers: countLayers({ x, y, color, shadow, colorify }),
      depth: { x, y }
    });
  };

  componentDidMount() {
    this.generateLayers();

    window.addEventListener('resize', () => this.generateLayers());
    this.el.current.addEventListener('mouseover', () => this.generateLayers());
  }

  render(): JSX.Element {
    return (
      <Base
        ref={this.el}
        layers={this.state.layers}
        depth={this.state.depth}
        {...this.props}
      />
    );
  }
}
