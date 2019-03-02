# [Monument UI](https://github.com/JB1905/monument-ui)

[![NPM version](http://img.shields.io/npm/v/monument-ui.svg?style=flat-square)](https://www.npmjs.com/package/monument-ui)
[![NPM downloads](http://img.shields.io/npm/dm/monument-ui.svg?style=flat-square)](https://www.npmjs.com/package/monument-ui)

## About
Monument UI is a JavaScript library which will help you add 3D element and text effect to existing components or to create new ones.

### Demo
[**See plugin in action**](#)

## How to Install
At the beginning install the library in your project via npm:
```sh
$ npm install monument-ui
```

Or Yarn:
```sh
$ yarn add monument-ui
```

## Getting Started
**• Connect libary with project using ES6 import:**
```js
import { Element, Text } from 'monument-ui';
```

**• Later create component and pass options:**
```js
<Element
  as={ /* component or DOM element */ }
  perspective={ /* x, y */ }
  color={ /* color value */ }
  shadow={ /* shadow value */ }
  colorify={ /* true / false */ }
  hoverable={ /* true / false */ }
  clickable={ /* true / false */ }
/>

<Text
  as={ /* component or DOM element */ }
  perspective={ /* x, y */ }
  color={ /* color value */ }
  shadow={ /* shadow value */ }
  colorify={ /* true / false */ }
/>
```

## Props
### Element component
Name | Type | Default | Description | Available options
-|-|-|-|-
**perspective** | object | `{ x: 5, y: 5 }` | Horizontal and vertical depth length | Object with `x` and `y` values
**color** | string | `#444` | Color of depth effect | Color value in hex, rgb(a) etc.
**shadow** | string | ` ` | Shadow added to element | e.g.: `10px 10px 20px #222a`
**colorify** | boolean | `false` | Change color for each layer | Enable `true` / disable `false`
**hoverable** | boolean | `false` | Add layers on hover (only desktop) | Enable `true` / disable `false`
**clickable** | boolean | `false` | Push element on click | Enable `true` / disable `false`

### Text component
Name | Type | Default | Description | Available options
-|-|-|-|-
**perspective** | object | `{ x: 5, y: 5 }` | Horizontal and vertical depth length | Object with `x` and `y` values
**color** | string | `#ccc` | Color of depth effect | Color value in hex, rgb(a) etc.
**shadow** | string | ` ` | Shadow added to text | e.g.: `10px 10px 20px #222a`
**colorify** | boolean | `false` | Change color for each layer | Enable `true` / disable `false`

## Example
```js
export default function App() {
  // state, effects, etc.

  return (
    <Element
      as="button"
      clickable
      color="#f00"
      perspective={{ x: 10, y: '-5em' }}
      style={{ /* style */ }}
    >
      <Text
        as="h2"
        color="#f00"
        colorify
        perspective={{ x: -4, y: 6 }}
      >
        Hello World!
      </Text>
    </Element>
  );
}
```

## License
This project is licensed under the MIT License © 2018-present Jakub Biesiada
