---
order: 2
title: 更新日志
---

`Yep-React` 严格遵循 [Semantic Versioning 2.0.0](http://semver.org/lang/zh-CN/) 语义化版本规范。

#### 发布周期

* 修订版本号：每周末会进行日常 bugfix 更新。（如果有紧急的 bugfix，则任何时候都可发布）
* 次版本号：每月发布一个带有新特性的向下兼容的版本。
* 主版本号：含有破坏性更新和新特性，不在发布周期内。

---

### 0.2.14

`2018-10-18`

* **Feature**

  * 🌟 无

- **Bug Fix**

  * 🐞 IndexedList 右侧索引滑动时左侧页面抖动(Ios 下)

- **Enhancement**

  * 无

### 0.2.13

`2018-10-16`

* **Feature**

  * 🌟 无

- **Bug Fix**

  * 🐞 IndexedList 右侧索引滑动时左侧页面抖动

- **Enhancement**

  * 无

### 0.2.12

`2018-10-16`

* **Feature**

  * 🌟 新增 SearchBar 组件

- **Bug Fix**

  * 🐞 Checkbox 组件的大小

- **Enhancement**

  * Message 组件提示图标可定制

### 0.2.11

`2018-10-12`

* **Feature**

  * 🌟 无

- **Bug Fix**

  * 🐞 无

- **Enhancement**

  * IndexedList 组件新增 keyLabel 来获取唯一的 key

### 0.2.10

`2018-10-11`

* **Feature**

  * 🌟 无

- **Bug Fix**

  * 🐞 修复 Dialog 的 confirm 组件更多参数的传参方式，第四个参数 restProps 为 object 类型，支持 Dialog 组件的其余属性

- **Enhancement**

  * 无

### 0.2.9

`2018-10-09`

* **Feature**

  * 🌟 无

- **Bug Fix**

  * 🐞 修改 IndexedList renderRow 回调参数，之前是 label，现在修改为 label 所在的一行数据 object

- **Enhancement**

  * 无

### 0.2.8

`2018-10-08`

* **Feature**

  * 🌟 无

- **Bug Fix**

  * 🐞 修复 Switch 组件外部 currentStatus 改变时不能改变 Switch 组件内部状态的 bug

- **Enhancement**

  * 无

### 0.2.7

`2018-09-27`

* **Feature**

  * 🌟 无

- **Bug Fix**

  * 🐞 修复 `Tabs` 组件 无法右滑切换的 bug

- **Enhancement**

  * 手势组件独立出去使用 ts 重构，直接引用@jdcfe/yep-gesture

### 0.2.6

`2018-09-27`

* **Feature**

  * 🌟 无

- **Bug Fix**

  * 🐞 修复 `Tabs` 组件 onChange 回调未触发的 bug，回调参数为 index

- **Enhancement**

  * 无

### 0.2.5

`2018-09-11`

* **Feature**

  * 🌟 无

- **Bug Fix**

  * 🐞 重构 `Dropdown` 组件，修改 props
  * 🐞 修复 `AutoComplete` 组件

- **Enhancement**

  * 无

### 0.2.4

`2018-09-11`

* **Feature**

  * 🌟 Dialog 的 confirm 组件提供更多参数

- **Bug Fix**

  * 🐞 修复 Dropdown 组件的 bug

- **Enhancement**

  * 无

### 0.2.3

`2018-08-29`

* **Feature**

  * 🌟 无

- **Bug Fix**

  * 🐞 修复 Button 组件 overflow：hidden 导致 border 不可见的问题

- **Enhancement**

  * 无

### 0.2.2

`2018-08-14`

* **Feature**

  * 🌟 无

- **Bug Fix**

  * 🐞 修复 InputItem 的 Placeholder 上下不居中的问题

- **Enhancement**

  * 无

### 0.2.1

`2018-08-08`

* **Feature**

  * 🌟 无

- **Bug Fix**

  * 🐞 修复在 ios 下 InputItem editable 为 false 的情况下，onClick 点击会触发 focus 导致弹出键盘的问题

- **Enhancement**

  * 新增组件库字体

### 0.2.0

`2018-07-26`

经过 18 个小版本迭代，发布 0.2.0 版本。

* **Feature**

  * 🌟 重新设计全部组件规范，支持自定义主题。组件按需加载支持引入 css 和 scss 源文件
  * 🌟 新增 Tips 组件
  * 🌟 新增 AutoComplete 组件
  * 🌟 新增 Dropdown 组件
  * 🌟 新增 InputItem 组件
  * 🌟 新增 Carousel 组件
  * 🌟 新增 Rate 组件
  * 🌟 新增 DatePicker 组件
  * 🌟 新增 PickerVIew 组件
  * 🌟 Picker 组件支持多列数据，支持级联选择
  * 🌟 Placeholder 组件更名为 Skeleton，用来配置页面骨架组件

- **Bug Fix**

  * 🐞 修改部分 scss 变量可覆盖
  * 🐞 重构 Button 组件的 border 实现方式

- **Enhancement**

  * `List.Item` 组件右侧 图标支持自定义，当 `icon`为 string，需要符合 Icon type，如果是自定义组件，则直接渲染
  * `IndexedList` 组件新增 `activeBar` 属性，支持外界影响 bar 的 active 状态
  * `TabBar` 支持自定义 `badge` `dot` `hidden` 属性
  * `Button` 支持 `type=ghost`类型
  * `List` 新增 `Brief`次级内容
  * 引入 FlowType 静态检查

### 0.1.18

`2018-07-24`

* **Feature**

  * 🌟 无

- **Bug Fix**

  * 🐞 规范 Dialog confirm 组件样式

- **Enhancement**

  * 无

### 0.1.17

`2018-07-20`

* **Feature**

  * 🌟 无

- **Bug Fix**

  * 🐞 Picker 及 DatePicker 组件未滑动点击确定时的 bug

- **Enhancement**

  * 无

### 0.1.16

`2018-07-18`

* **Feature**

  * 🌟 无

- **Bug Fix**

  * 🐞 无

- **Enhancement**

  * Swiper 组件支持无限滚动

### 0.1.15

`2018-07-17`

* **Feature**

  * 🌟 无

- **Bug Fix**

  * 🐞 无

- **Enhancement**

  * List.Item 组件右侧 图标支持自定义，当 icon 为 string，需要符合 Icon type，如果是自定义组件，则直接渲染

### 0.1.14

`2018-07-17`

* **Feature**

  * 🌟 无

- **Bug Fix**

  * 🐞 修复 DatePicker 关闭时未正确返回数据的问题

- **Enhancement**

  * 无

### 0.1.13

`2018-07-17`

* **Feature**

  * 🌟 无

- **Bug Fix**

  * 🐞 修复 hairline-bottom 的问题
  * 🐞 修复 InputItem 字体大小为 32px

- **Enhancement**

  * 无

### 0.1.12

`2018-07-16`

* **Feature**

  * 🌟 新增 InputItem、DatePicker、PickerVIew 组件

- **Bug Fix**

  * 🐞

- **Enhancement**

  * 无

### 0.1.11

`2018-07-10`

* **Feature**

  * 🌟 无

- **Bug Fix**

  * 🐞 修复部分组件按需加载依赖错误

- **Enhancement**

  * 无

### 0.1.10

`2018-07-09`

* **Feature**

  * 🌟 无

- **Bug Fix**

  * 🐞 因为 prettier 导致 1PX 为 1px 的 bug

- **Enhancement**

  * 无

### 0.1.9

`2018-07-06`

* **Feature**

  * 🌟 无

- **Bug Fix**

  * 🐞 重构 Button 组件的 border

- **Enhancement**

  * 无

### 0.1.8

`2018-07-05`

* **Feature**

  * 🌟 无

- **Bug Fix**

  * 🐞 修复 List 组件依赖 Icon 组件样式

- **Enhancement**

  * 无

### 0.1.7

`2018-06-29`

* **Feature**

  * 🌟 新增 Rate 组件

- **Bug Fix**

  * 🐞 无

- **Enhancement**

  * 无

### 0.1.6

`2018-06-26`

* **Feature**

  * 🌟 无

- **Bug Fix**

  * 🐞 修复 Carousel 组件数据只有一条时回弹的 bug

- **Enhancement**

  * 无

### 0.1.5

`2018-06-21`

* **Feature**

  * 🌟 无

- **Bug Fix**

  * 🐞 无

- **Enhancement**

  * 📝 Carousel 组件新增 `isBounces` 属性支持,支持是否允许回弹效果

### 0.1.4

`2018-06-20`

* **Feature**

  * 🌟 无

- **Bug Fix**

  * 🐞 无

- **Enhancement**

  * 📝 IndexedList 组件新增 activeBar 属性，支持外界影响 bar 的 active 状态

### 0.1.3

`2018-06-20`

* **Feature**

  * 🌟 新增 Carousel 组件

- **Bug Fix**

  * 🐞 无

- **Enhancement**

  * 📝 无

### 0.1.2

`2018-06-14`

* **Feature**

  * 🌟 新增 AutoComplete 组件
  * 🌟 新增 Dropdown 组件
  * 🌟 新增 Input 组件
  * 🌟 样式按需加载提供 css 的引入方式

- **Bug Fix**

  * 🐞 无

- **Enhancement**

  * 📝 代码引入 FlowType 静态检查及相应静态检查问题修复

### 0.1.1

`2018-06-01`

* **Feature**

  * 🌟 根据设计稿重新设计大部分组件规范
  * 🌟 支持组件[自定义主题样式](http://yep-react.jd.com/#/doc/customize-theme)
  * 🌟 新增 Tips 组件
  * 🌟 `TabBar` 支持自定义 `badge` `dot` `hidden` 属性
  * 🌟 `Button` 支持 `type=ghost`类型
  * 🌟 `List` 新增 `Brief`次级内容

- **Bug Fix**

  * 🐞 无

- **Enhancement**

  * 📝 更新 `TabBar` 使用文档
  * 📝 更新 `Button` 文档
  * 📝 更新 `List` 使用文档

### 0.1.0

`2018-05-25`

* 🌟🌟🌟 Release 0.1.0
