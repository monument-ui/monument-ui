# Buttons

### How to use
```js
import React, { Component } from 'react';
import Button from 'monument-ui';

export default class App extends Component {
  render() {
    return (
      <Button
        submit={ }
        className={ }
        monument={ }
        circle={ }
        size={ /* xl / lg / md / sm / xs */ }
        style={ }
        onClick={ }
        isActive={ }
      >
        Hello World!
      </Button>
    );
  }
}
```

| Name | Type | Default |
|------|------|---------|
| `submit` | boolean | 'false' |
| `className` | string | '' |
| `monument` | boolean | 'false' |
| `circle` | boolean | 'false' |
| `size` | string | '' |
| `style` | object | {} |
| `onClick` | function | null |
| `isActive` | boolean | 'false' |
