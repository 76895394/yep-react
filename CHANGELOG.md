---
order: 2
title: 更新日志
---

`Yep-React` 严格遵循 [Semantic Versioning 2.0.0](http://semver.org/lang/zh-CN/) 语义化版本规范。

#### 发布周期

- 修订版本号：每周末会进行日常 bugfix 更新。（如果有紧急的 bugfix，则任何时候都可发布）
- 次版本号：每月发布一个带有新特性的向下兼容的版本。
- 主版本号：含有破坏性更新和新特性，不在发布周期内。

---

### 1.0.3

`2020-12-25`

- **Enhancement**

  - 📝 减小 `lodash` 打包体积
  - 📝 `Sticky` 标记为不推荐使用组件，推荐使用原生 css`position:sticky`

### 1.0.2

`2020-12-17`

- **Bug Fix**

  - 🐞 InfiniteLoader 判断是否到底部

### 1.0.0

`2020-10-15`

- **Feature**

  - 🌟 完善`Icon`组件的文档，发布`1.0.0`版本

### 1.0.0-beta.6

`2020-10-13`

- **Feature**

  - 🌟 `Mask`组件支持传`usePortal`挂载到 body 上

### 1.0.0-beta.5

`2020-10-12`

- **Feature**

  - 🌟 `Checkbox`组件支持传`icon`自定义选中图标

### 1.0.0-beta.4

`2020-09-27`

- **Bug Fix**

  - 🐞 CountDown 倒计时结束时，默认显示 00:00:00 (#61)

### 1.0.0-beta.3

`2020-09-24`

- **Bug Fix**

  - 🐞 CountDown 重新刷新剩余时间，触发重新倒计时(#59)

### 1.0.0-beta.2

`2020-09-23`

- **Bug Fix**

  - 🐞 修复 Tabs DefaultTabBar 接收`style`而未使用的问题

- **Docs**

  - 增加 Tabs DefaultTabBar 配合 Sticky 实现 TabBar 吸顶
  - Tabs.DefaultTabBar 增加了`tabBarBackgroundColor`默认值 `#FFF`，如果有用到注意修改兼容

### 1.0.0-beta.1

`2020-07-24`

- **Feature**

  - 🌟 Icon 组件重构，封装单独的 svg 图标库[@jdcfe/icon-react](https://www.npmjs.com/package/@jdcfe/icons-react)

### 1.0.0-alpha.15

`2020-04-27`

- **Feature**

  - 🌟 Toast 组件 新增 Toast.hide() 方法，支持隐藏 Toast，实现防止路由切换 Toast 未销毁

### 1.0.0-alpha.14

`2020-04-23`

- **Feature**

  - 🌟 Toast 组件 新增 mask 参数，支持透明遮罩层，防止滑动穿透

### 1.0.0-alpha.13

`2020-04-14`

- **Feature**

  - 🌟 Carousel 组件 重构

### 1.0.0-alpha.12

`2020-04-07`

- **Feature**

  - 🌟 Picker 组件支持默认选中

### 1.0.0-alpha.11

`2020-03-31`

- **Feature**

  - 🌟 Toast 组件 message 支持传递 string 或 ReactNode 类型

### 1.0.0-alpha.10

`2020-3-18`

- **Bug Fix**

  - 🐞 修复 countdown 倒计时组件 leftTime 不是整数时无法终止倒计时的问题，目前按照四舍五入计算剩余时间。

### 1.0.0-alpha.7

`2019-12-10`

- **Feature**

  - 🌟 新增 Checkbox.CheckBoxGroup 组件，支持一键全部选中

### 1.0.0-alpha.1

`2019-9-10`
