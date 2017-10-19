---

## uxcore-menu [![Dependency Status](http://img.shields.io/david/uxcore/uxcore-menu.svg?style=flat-square)](https://david-dm.org/uxcore/uxcore-menu) [![devDependency Status](http://img.shields.io/david/dev/uxcore/uxcore-menu.svg?style=flat-square)](https://david-dm.org/uxcore/uxcore-menu#info=devDependencies)

## TL;DR

uxcore-menu ui component for react

#### setup develop environment

```sh
$ git clone https://github.com/uxcore/uxcore-menu
$ cd uxcore-menu
$ npm install
$ gulp server
```

## Usage
```js
import ReactDOM from 'react-dom';
import RcMenu, {SubMenu, Item, Divider} from 'rc-menu';

ReactDOM.render(
	<Menu >
		<Item key="mail">
			<i className="kuma-icon kuma-icon-email"></i>导航一
		</Item>
		<Item key="app">
			<i className="kuma-icon kuma-icon-wangwang"></i>导航二
		</Item>
		<SubMenu title={<span><i className="kuma-icon kuma-icon-setting"></i>导航 - 子菜单</span>}>
			<Item key="setting:1">选项1</Item>
			<Item key="setting:2">选项2</Item>
			<Item key="setting:3">选项3</Item>
			<Item key="setting:4">选项4</Item>
		</SubMenu>
		<Item key="alipay">
			<a href="#" target="_blank">导航四 - 链接</a>
		</Item>
	</Menu>,
	target);
```

## demo
http://uxcore.github.io/uxcore/components/menu/

## API

## Props

### Menu

| 配置项 | 说明 | 类型 | 默认值 |
|---|---|---|---|
| mode | 菜单类型 | enum 'vertical', 'horizontal', 'inline' | vertical |
| selectedKeys | 当前选中的菜单项 key 数组 |  |  |
| defaultSelectedKeys | 初始选中的菜单项 key 数组 |  |  |
| openKeys | 当前展开的菜单项 key 数组 |  |  |
| defaultOpenKeys | 初始展开的菜单项 key 数组 |  |  |
| onSelect | 被选中时调用，参数 {item, key, selectedKeys} 对象 | function | 无 |
| onDeselect | 取消选中时调用，参数 {item, key, selectedKeys} 对象，仅在 multiple 生效 | function | 无 |
| onOpenChange | 菜单打开或关闭时调用，参数 openKeys 数组 | function | 无 |
| onOpen | 同 onOpenChange，为了兼容旧版本保留的方法，将来会移除。参数 {openKeys} 对象 | function | 无 |
| onClose | 同 onOpenChange，为了兼容旧版本保留的方法，将来会移除。参数 {openKeys} 对象 | function | 无 |
| onClick | 点击 menuitem 调用此函数，参数为 {item, key} | function | 无 |
| style | 根节点样式 | object |  |

### Item

| 配置项 | 说明 | 类型 | 默认值 |
|---|---|---|---|
| disabled | 是否禁用 | Boolean | false |
| key | item 的唯一标志 | String |  |

### SubMenu

| 配置项 | 说明 | 类型 | 默认值 |
|---|---|---|---|
| title | 子菜单项值 | String or React.Element | |
| children | (MenuItem or SubMenu)[] | 子菜单的菜单项 | |
