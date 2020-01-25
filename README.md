# [Monument UI](https://github.com/JB1905/monument-ui)

[![NPM version](http://img.shields.io/npm/v/monument-ui.svg?style=flat-square)](https://www.npmjs.com/package/monument-ui)
[![NPM downloads](http://img.shields.io/npm/dm/monument-ui.svg?style=flat-square)](https://www.npmjs.com/package/monument-ui)

## About
Monument UI is a JavaScript library which will help you add 3D element and text effect to existing components or to create new ones.

### Demo
[**See plugin in action**](https://jb1905.github.io/monument-ui/)

## How to Install
First, install the library in your project by npm:
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
  color={ /* color value */ }
  shadow={ /* shadow value */ }
  colorify={ /* true / false */ }
  perspective={ /* x, y */ }
  clickable={ /* 'push' / 'pull' */ }
  hoverable={ /* 'pull' / 'push' */ }
  touchable={ /* 'push' / 'pull' */ }
/>

<Text
  as={ /* component or DOM element */ }
  color={ /* color value */ }
  shadow={ /* shadow value */ }
  colorify={ /* true / false */ }
  perspective={ /* x, y */ }
/>
```

## Props
### Element component
Name | Type | Default | Description | Available options
-|-|-|-|-
**color** | string | ` ` | Color of depth effect | Color value in hex, rgb(a) etc.
**shadow** | string | ` ` | Shadow added to element | e.g.: `10px 10px 20px #222a`
**colorify** | boolean | `false` | Change color for each layer | Enable `true` / disable `false`
**perspective** | object | `{ x: 5, y: 5 }` | Horizontal and vertical depth length | Object with `x` and `y` values
**clickable** | string | `undefined` | Action for element on click (only desktop) | `push` (move down), `pull` (move up)
**hoverable** | string | `undefined` | Action for element on hover (only desktop) | `pull` (move up), `push` (move down)
**touchable** | string | `undefined` | Action for element on touch (only mobile) | `push` (move down), `pull` (move up)

### Text component
Name | Type | Default | Description | Available options
-|-|-|-|-
**color** | string | ` ` | Color of depth effect | Color value in hex, rgb(a) etc.
**shadow** | string | ` ` | Shadow added to text | e.g.: `10px 10px 20px #222a`
**colorify** | boolean | `false` | Change color for each layer | Enable `true` / disable `false`
**perspective** | object | `{ x: 5, y: 5 }` | Horizontal and vertical depth length | Object with `x` and `y` values

## Example
```js
export default function App() {
  // state, effects, etc.

  return (
    <Element
      as="button"
      clickable="push"
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
