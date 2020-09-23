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

### 1.0.0-beta.2

`2020-09-24`

- **Feature**

  - 🌟 Icon 组件重构，封装单独的 svg 图标库[@jdcfe/icon-react](https://www.npmjs.com/package/@jdcfe/icons-react)

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

### 0.5.5

`2019-9-3`

- **Bug Fix**

  - 🐞 修复 raf 引入方式导致编译后无法正常加载模块的问题

### 0.5.3

`2019-7-25`

- **Bug Fix**

  - 🐞 IndexedList 组件 renderRow 函数签名，添加 index 和 sectionId

### 0.5.2

`2019-7-19`

- **Bug Fix**

  - 🐞 修复 Carousel 组件垂直方向轮播未监听上下滑动事件、修复自动轮播机制

### 0.5.1

`2019-7-18`

- **Feature**

  - 🌟 新增 Collapse 组件@zhoujinxiu

### 0.5.0

`2019-7-16`

- **Feature**

  - 🌟 新增 LazyLoad 组件@wangkang
  - 🌟 新增 Stepper 组件@jingxijun
  - 🌟 新增 NumberKeyboard 组件@wangkang
  - 🌟 新增 PasswordInput 组件@wangkang
  - 🌟 新增 Avatar 组件@wangkang
  - 🌟 新增 use-with-rocketact 使用说明

- **Bug Fix**

  - 🐞 修复 function 组件生成.d.ts 时多个默认导出的问题

### 0.4.3

`2019-5-30`

- **Bug Fix**

  - 🐞 修复 SwipeAction 无法自定义 className 的问题
  - 🐞 修复 IndexedList 组件不使用 body 做为滚动容器

### 0.4.2

`2019-5-29`

- **Bug Fix**

  - 🐞 Popup 支持使用 portal 挂载到 body 下

### 0.4.1

`2019-5-28`

- **Feature**

  - 🌟 新增 Stepper 组件@jingxijun
  - 🌟 NavBar 组件支持定制左侧 close 组件，默认是 `关闭`

### 0.4.0

`2019-5-23`

- **Feature**

  - 🌟 新增 Price 组件@zhoujinxiu
  - 🌟 新增 Cell 组件

- **Bug Fix**

  - 🐞 修复 Toast 组件存在多个的问题

### 0.3.5

`2019-5-8`

- **Bug Fix**

  - 🐞 修复 Loading 组件定位样式问题

### 0.3.4

`2019-4-26`

- **Feature**

  - 🌟 拆分 InfiniteLoader 组件，不再支持下拉刷新，下拉刷新功能拆分为 PullToRefresh 组件

### 0.3.3

`2019-4-25`

- **Bug Fix**

  - 🐞 修复 编译时丢失.d.ts 文件的问题

### 0.3.1

`2019-4-2`

- **Bug Fix**

  - 🐞 修复 IndexedList 组件使用吸顶字母未完全隐藏导致影响当前字母的 bug

### 0.3.0

`2019-3-14`

- **Feature**

  - 🌟 使用 TypeScript 重构全部组件，可以获得更好的代码提示体验
  - 🌟 break: Upload 组件重命名为 ImagePicker
  - 🌟 新增：Steps 组件、新增基于 Lottie 实现的 Loading 组件(默认京东 App7.0 统一 loading 动画)，支持自定义动画
  - 🌟 重新设计全新官网首页、Demo 首页

* **Bug Fix**

  - 🐞 无

* **Enhancement**

  -

### 0.3.0-alpha

`2019-3-12`

- **Feature**

  - 🌟 使用 TS 重构全部组件

* **Bug Fix**

  - 🐞 无

* **Enhancement**

  - 无

### 0.2.28

`2019-3-4`

- **Feature**

  - 🌟 新增 VirtualList 虚拟滚动列表组件
  - 🌟 Tabs 支持 tabbar 数量超出可滑动

* **Bug Fix**

  - 🐞 无

* **Enhancement**

  - 无

### 0.2.27

`2019-1-25`

- **Feature**

  - 🌟 无

* **Bug Fix**

  - 🐞 修复 mask 遮罩在 ios 下滑动穿透的问题时导致浮层上可滑动内容无法滑动的问题，

* **Enhancement**

  - 无

### 0.2.26

`2019-1-22`

- **Feature**

  - 🌟 无

* **Bug Fix**

  - 🐞 mask 遮罩在 ios 下滑动穿透的问题

* **Enhancement**

  - 无

### 0.2.25

`2019-1-18`

- **Feature**

  - 🌟 移除对 lrc 的依赖

* **Bug Fix**

  - 🐞 无

* **Enhancement**

  - 无

### 0.2.24

`2018-11-26`

- **Feature**

  - 🌟 无

* **Bug Fix**

  - 🐞 修复 Tabs 组件的 distanceToChangeTab 参数不生效的问题

* **Enhancement**

  - 无

### 0.2.23

`2018-11-20`

- **Feature**

  - 🌟 无

* **Bug Fix**

  - 🐞 修复新构建工作流下 Popover 组件不符合文件夹规格导致丢失的问题

* **Enhancement**

  - 无

### 0.2.22

`2018-11-19`

- **Feature**

  - 🌟 优化构建工作流，使用 yep-tools

* **Bug Fix**

  - 🐞 AreaPicker 组件初始化默认选择时调用接口未传 index 的 bug

* **Enhancement**

  - 无

### 0.2.21

`2018-11-19`

- **Feature**

  - 🌟 AreaPicker 组件新增支持初始化时选中默认的地区

* **Bug Fix**

  - 🐞 修改文档中的错误

* **Enhancement**

  - 无

### 0.2.20

`2018-11-08`

- **Feature**

  - 🌟 组件库编译时使用 babel-runtime helper

* **Bug Fix**

  - 🐞 SwipeAction left 或 right 为空时自动切换 Swipe 状态时丢失 cover 导致的元素隐藏

* **Enhancement**

  - 无

### 0.2.19

`2018-11-08`

- **Feature**

  - 🌟 无

* **Bug Fix**

  - 🐞 SwipeAction left 或 right 动态改变时，重新计算宽度

* **Enhancement**

  - 无

### 0.2.18

`2018-11-07`

- **Feature**

  - 🌟 无

* **Bug Fix**

  - 🐞 修复 react-transition-group 依赖丢失

* **Enhancement**

  - 无

### 0.2.17

`2018-11-07`

- **Feature**

  - 🌟 AreaPicker 支持自定义数据格式、滑动触发切换安全距离

* **Bug Fix**

  - 🐞 SwipeAction 当 right 和 left 为空时的 bug

* **Enhancement**

  - 无

### 0.2.16

`2018-11-06`

- **Feature**

  - 🌟 新增主站地区选择组件 AreaPicker

* **Bug Fix**

  - 🐞 无

* **Enhancement**

  - 无

### 0.2.15

`2018-10-30`

- **Feature**

  - 🌟 SwipeAction 组件新增 onMovingDistance 回调，实时返回滑动的距离，左滑为-，右滑为+

* **Bug Fix**

  - 🐞 无

* **Enhancement**

  - 无

### 0.2.14

`2018-10-18`

- **Feature**

  - 🌟 无

* **Bug Fix**

  - 🐞 IndexedList 右侧索引滑动时左侧页面抖动(Ios 下)

* **Enhancement**

  - 无

### 0.2.13

`2018-10-16`

- **Feature**

  - 🌟 无

* **Bug Fix**

  - 🐞 IndexedList 右侧索引滑动时左侧页面抖动

* **Enhancement**

  - 无

### 0.2.12

`2018-10-16`

- **Feature**

  - 🌟 新增 SearchBar 组件

* **Bug Fix**

  - 🐞 Checkbox 组件的大小

* **Enhancement**

  - Message 组件提示图标可定制

### 0.2.11

`2018-10-12`

- **Feature**

  - 🌟 无

* **Bug Fix**

  - 🐞 无

* **Enhancement**

  - IndexedList 组件新增 keyLabel 来获取唯一的 key

### 0.2.10

`2018-10-11`

- **Feature**

  - 🌟 无

* **Bug Fix**

  - 🐞 修复 Dialog 的 confirm 组件更多参数的传参方式，第四个参数 restProps 为 object 类型，支持 Dialog 组件的其余属性

* **Enhancement**

  - 无

### 0.2.9

`2018-10-09`

- **Feature**

  - 🌟 无

* **Bug Fix**

  - 🐞 修改 IndexedList renderRow 回调参数，之前是 label，现在修改为 label 所在的一行数据 object

* **Enhancement**

  - 无

### 0.2.8

`2018-10-08`

- **Feature**

  - 🌟 无

* **Bug Fix**

  - 🐞 修复 Switch 组件外部 currentStatus 改变时不能改变 Switch 组件内部状态的 bug

* **Enhancement**

  - 无

### 0.2.7

`2018-09-27`

- **Feature**

  - 🌟 无

* **Bug Fix**

  - 🐞 修复 `Tabs` 组件 无法右滑切换的 bug

* **Enhancement**

  - 手势组件独立出去使用 ts 重构，直接引用@jdcfe/yep-gesture

### 0.2.6

`2018-09-27`

- **Feature**

  - 🌟 无

* **Bug Fix**

  - 🐞 修复 `Tabs` 组件 onChange 回调未触发的 bug，回调参数为 index

* **Enhancement**

  - 无

### 0.2.5

`2018-09-11`

- **Feature**

  - 🌟 无

* **Bug Fix**

  - 🐞 重构 `ToolTip` 组件，修改 props
  - 🐞 修复 `AutoComplete` 组件

* **Enhancement**

  - 无

### 0.2.4

`2018-09-11`

- **Feature**

  - 🌟 Dialog 的 confirm 组件提供更多参数

* **Bug Fix**

  - 🐞 修复 ToolTip 组件的 bug

* **Enhancement**

  - 无

### 0.2.3

`2018-08-29`

- **Feature**

  - 🌟 无

* **Bug Fix**

  - 🐞 修复 Button 组件 overflow：hidden 导致 border 不可见的问题

* **Enhancement**

  - 无

### 0.2.2

`2018-08-14`

- **Feature**

  - 🌟 无

* **Bug Fix**

  - 🐞 修复 InputItem 的 Placeholder 上下不居中的问题

* **Enhancement**

  - 无

### 0.2.1

`2018-08-08`

- **Feature**

  - 🌟 无

* **Bug Fix**

  - 🐞 修复在 ios 下 InputItem editable 为 false 的情况下，onClick 点击会触发 focus 导致弹出键盘的问题

* **Enhancement**

  - 新增组件库字体

### 0.2.0

`2018-07-26`

经过 18 个小版本迭代，发布 0.2.0 版本。

- **Feature**

  - 🌟 重新设计全部组件规范，支持自定义主题。组件按需加载支持引入 css 和 scss 源文件
  - 🌟 新增 Tips 组件
  - 🌟 新增 AutoComplete 组件
  - 🌟 新增 ToolTip 组件
  - 🌟 新增 InputItem 组件
  - 🌟 新增 Carousel 组件
  - 🌟 新增 Rate 组件
  - 🌟 新增 DatePicker 组件
  - 🌟 新增 PickerVIew 组件
  - 🌟 Picker 组件支持多列数据，支持级联选择
  - 🌟 Placeholder 组件更名为 Skeleton，用来配置页面骨架组件

* **Bug Fix**

  - 🐞 修改部分 scss 变量可覆盖
  - 🐞 重构 Button 组件的 border 实现方式

* **Enhancement**

  - `List.Item` 组件右侧 图标支持自定义，当 `icon`为 string，需要符合 Icon type，如果是自定义组件，则直接渲染
  - `IndexedList` 组件新增 `activeBar` 属性，支持外界影响 bar 的 active 状态
  - `TabBar` 支持自定义 `badge` `dot` `hidden` 属性
  - `Button` 支持 `type=ghost`类型
  - `List` 新增 `Brief`次级内容
  - 引入 FlowType 静态检查

### 0.1.18

`2018-07-24`

- **Feature**

  - 🌟 无

* **Bug Fix**

  - 🐞 规范 Dialog confirm 组件样式

* **Enhancement**

  - 无

### 0.1.17

`2018-07-20`

- **Feature**

  - 🌟 无

* **Bug Fix**

  - 🐞 Picker 及 DatePicker 组件未滑动点击确定时的 bug

* **Enhancement**

  - 无

### 0.1.16

`2018-07-18`

- **Feature**

  - 🌟 无

* **Bug Fix**

  - 🐞 无

* **Enhancement**

  - Swiper 组件支持无限滚动

### 0.1.15

`2018-07-17`

- **Feature**

  - 🌟 无

* **Bug Fix**

  - 🐞 无

* **Enhancement**

  - List.Item 组件右侧 图标支持自定义，当 icon 为 string，需要符合 Icon type，如果是自定义组件，则直接渲染

### 0.1.14

`2018-07-17`

- **Feature**

  - 🌟 无

* **Bug Fix**

  - 🐞 修复 DatePicker 关闭时未正确返回数据的问题

* **Enhancement**

  - 无

### 0.1.13

`2018-07-17`

- **Feature**

  - 🌟 无

* **Bug Fix**

  - 🐞 修复 hairline-bottom 的问题
  - 🐞 修复 InputItem 字体大小为 32px

* **Enhancement**

  - 无

### 0.1.12

`2018-07-16`

- **Feature**

  - 🌟 新增 InputItem、DatePicker、PickerVIew 组件

* **Bug Fix**

  - 🐞

* **Enhancement**

  - 无

### 0.1.11

`2018-07-10`

- **Feature**

  - 🌟 无

* **Bug Fix**

  - 🐞 修复部分组件按需加载依赖错误

* **Enhancement**

  - 无

### 0.1.10

`2018-07-09`

- **Feature**

  - 🌟 无

* **Bug Fix**

  - 🐞 因为 prettier 导致 1PX 为 1px 的 bug

* **Enhancement**

  - 无

### 0.1.9

`2018-07-06`

- **Feature**

  - 🌟 无

* **Bug Fix**

  - 🐞 重构 Button 组件的 border

* **Enhancement**

  - 无

### 0.1.8

`2018-07-05`

- **Feature**

  - 🌟 无

* **Bug Fix**

  - 🐞 修复 List 组件依赖 Icon 组件样式

* **Enhancement**

  - 无

### 0.1.7

`2018-06-29`

- **Feature**

  - 🌟 新增 Rate 组件

* **Bug Fix**

  - 🐞 无

* **Enhancement**

  - 无

### 0.1.6

`2018-06-26`

- **Feature**

  - 🌟 无

* **Bug Fix**

  - 🐞 修复 Carousel 组件数据只有一条时回弹的 bug

* **Enhancement**

  - 无

### 0.1.5

`2018-06-21`

- **Feature**

  - 🌟 无

* **Bug Fix**

  - 🐞 无

* **Enhancement**

  - 📝 Carousel 组件新增 `isBounces` 属性支持,支持是否允许回弹效果

### 0.1.4

`2018-06-20`

- **Feature**

  - 🌟 无

* **Bug Fix**

  - 🐞 无

* **Enhancement**

  - 📝 IndexedList 组件新增 activeBar 属性，支持外界影响 bar 的 active 状态

### 0.1.3

`2018-06-20`

- **Feature**

  - 🌟 新增 Carousel 组件

* **Bug Fix**

  - 🐞 无

* **Enhancement**

  - 📝 无

### 0.1.2

`2018-06-14`

- **Feature**

  - 🌟 新增 AutoComplete 组件
  - 🌟 新增 ToolTip 组件
  - 🌟 新增 Input 组件
  - 🌟 样式按需加载提供 css 的引入方式

* **Bug Fix**

  - 🐞 无

* **Enhancement**

  - 📝 代码引入 FlowType 静态检查及相应静态检查问题修复

### 0.1.1

`2018-06-01`

- **Feature**

  - 🌟 根据设计稿重新设计大部分组件规范
  - 🌟 支持组件[自定义主题样式](/#/doc/customize-theme)
  - 🌟 新增 Tips 组件
  - 🌟 `TabBar` 支持自定义 `badge` `dot` `hidden` 属性
  - 🌟 `Button` 支持 `type=ghost`类型
  - 🌟 `List` 新增 `Brief`次级内容

* **Bug Fix**

  - 🐞 无

* **Enhancement**

  - 📝 更新 `TabBar` 使用文档
  - 📝 更新 `Button` 文档
  - 📝 更新 `List` 使用文档

### 0.1.0

`2018-05-25`

- 🌟🌟🌟 Release 0.1.0
