# Monument UI Changelog

## 1.1.1 (2020-01-23)
#### Repository Changes
- replaced `Webpack` with `Rollup`
- added module output

## 1.1.0 beta 2 / 1.1.0 beta 2.1 / 1.1.0 (2019-08-05)
#### Bug Fix
- fixed incorrect props types

## 1.1.0 beta 1 / 1.1.0 beta 1.1 / 1.1.0 beta 1.2 (2019-07-21)
#### Repository Changes
- added type definitions to output files

## 1.0.1 / 1.0.2 (2019-05-29)
#### Repository Changes
- added `husky`
- updated `typescript`

## 1.0.0 beta 5 / 1.0.0 (2019-04-28)
#### Bug Fix
- removed animation on element init

## 1.0.0 beta 3 / 1.0.0 beta 4 (2019-04-27)
#### Breaking Changes
- changed `clickable` & `hoverable` possible props values
- removed default color values

#### New Feature
- added `touchable` prop

#### Bug Fix
- fixed hover inactivity on first mouseover

## 1.0.0 beta 2 (2019-04-15)
#### Bug Fix
- fixed viewport sizes on resize

## 1.0.0 beta 1 (2019-04-14)
#### Bug Fix
- fixed hoverable
- fixed elements positioning
- fixed default elements positioning

#### Improvement
- Improved generateColors 

#### Internal
- rewritten layers function
- added setMode state for `Element` component

#### Repository Changes
- switched from `babel` to `typescript` loader

## 1.0.0 alpha 1 (2019-03-18)
#### Breaking Changes
- rewritten with React Hooks (dropped support for React < 16.8.0)

#### Bug Fix
- fixed clickable action
- added depth update on window resize
- fixed padding size when `x` and `y` are strings

## 0.1.0 alpha 3 (2019-01-23)
#### New Feature
- allow string as value of `x` and `y` in `perspective` e.g.: `3vw`, `5em`

## 0.1.0 alpha 2 (2019-01-22)
#### New Feature
- added more color standards support

#### Bug Fix
- fixed problem with missing dependencies

## 0.1.0 alpha 1 (2019-01-22)
#### New Feature
- added 2 components: Text and Element
- added `perspective`, `color`, `hoverable` and `clickable` props

#### Internal
- rewritten with TypeScript & Styled Components
