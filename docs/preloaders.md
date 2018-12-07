# Preloaders

### How to use
```js
import React, { Component } from 'react';
import Preloader from 'monument-ui';

export default class App extends Component {
  render() {
    return (
      <Preloader
        className={ /* class name(s) */ }
        size={ /* xl / lg / md / sm / xs */ }
      />
    );
  }
}
```

| Name | Type | Default |
|------|------|---------|
| `className` | string | '' |
| `size` | string | '' |
