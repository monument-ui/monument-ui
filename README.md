# [Monument UI](https://github.com/JB1905/monument-ui)

[![NPM version](http://img.shields.io/npm/v/monument-ui.svg?style=flat-square)](https://www.npmjs.com/package/monument-ui)
[![NPM downloads](http://img.shields.io/npm/dm/monument-ui.svg?style=flat-square)](https://www.npmjs.com/package/monument-ui)

## About
Monument UI is a JavaScript library which will help you add 3D element and text effect to existing components or to create new ones.

### Demo
[**See plugin in action**](#)

## How to Use
**• Install plugin via favourite package manager:**
```sh
$ npm install monument-ui
$ yarn add monument-ui
```

## Getting Started
Connect libary with project using ES6 import:

```js
import { Element, Text } from 'monument-ui';
```

## Props
### Element component
Name | Type | Default | Description | Available options
-|-|-|-|-
**perspective** | object | `{ x: 5, y: 5 }` | |
**color** | string | `#444` | |
**shadow** | string | `` | |
**colorify** | boolean | `false` | |
**hoverable** | boolean | `false` | |
**clickable** | boolean | `false` | |

### Text component
Name | Type | Default | Description | Available options
-|-|-|-|-
**perspective** | object | `{ x: 5, y: 5 }` | |
**color** | string | `#ccc` | |
**shadow** | string | `` | |
**colorify** | boolean | `false` | |

## Example
```js
export default function App() {
  // state, effects, etc.

  return (
    <Element
      as="button"
      clickable
      color="#f00"
      perspective={{ x: 10, y: -5 }}
      style={{ /* style */ }}
    >
      <Text
        as="h2"
        color="#f00"
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
