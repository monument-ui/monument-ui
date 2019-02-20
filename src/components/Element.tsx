import React, { Component } from 'react';

import Props from '../interfaces/Props';
import { Events } from '../types/Events';

import { Base } from '../bases/Element';

import { convertUnits } from '../helpers/convertUnits';
import { countLayers } from '../helpers/layers';
import { checkMax } from '../helpers/checkMax';

export class Element extends Component<Props & Events> {
  el: React.Ref<object> = React.createRef();

  state = {
    layers: '',
    depth: {
      x: 0,
      y: 0
    },
    animate: false
  };

  generateLayers = (mode?: string): void => {
    let animate: boolean = false;

    const {
      perspective = { x: 5, y: 5 },
      color = '#444',
      shadow = '',
      colorify = false,
      hoverable = false,
      clickable = false
    } = this.props;

    let x: number = convertUnits(perspective.x);
    let y: number = convertUnits(perspective.y);

    let extraX: number;
    let extraY: number;

    if (mode === 'mouseenter' && hoverable) {
      extraX = this.el.current.offsetWidth / 10;
      extraY = this.el.current.offsetHeight / 10;

      animate = true;
    } else {
      extraX = 0;
      extraY = 0;
    }

    const max = {
      x: this.el.current.offsetWidth / 2 + extraX,
      y: this.el.current.offsetHeight / 2 + extraY
    };

    const axis = checkMax(max, { x, y });

    axis.x = Math.round(axis.x);
    axis.y = Math.round(axis.y);

    if (mode === 'click' && clickable) {
      x = 0;
      y = 0;
    }

    this.setState({
      layers: countLayers({ x: axis.x, y: axis.y, color, shadow, colorify }),
      depth: { x: axis.x, y: axis.y },
      animate
    });
  };

  componentDidMount() {
    this.generateLayers();

    window.addEventListener('resize', () => this.generateLayers());
  }

  render(): JSX.Element {
    return (
      <Base
        ref={this.el}
        onMouseEnter={() => this.generateLayers('mouseenter')}
        onMouseLeave={() => this.generateLayers('mouseleave')}
        onClick={() => this.generateLayers('click')}
        layers={this.state.layers}
        depth={this.state.depth}
        animate={this.state.animate}
        {...this.props}
      />
    );
  }
}
