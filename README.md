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
let Menu = require('uxcore-menu');
let SubMenu = Menu.SubMenu;
let MenuItem = Menu.Item;

ReactDOM.render(
	<Menu >
		<Menu.Item key="mail">
			<i className="kuma-icon kuma-icon-email"></i>导航一
		</Menu.Item>
		<Menu.Item key="app">
			<i className="kuma-icon kuma-icon-wangwang"></i>导航二
		</Menu.Item>
		<SubMenu title={<span><i className="kuma-icon kuma-icon-setting"></i>导航 - 子菜单</span>}>
			<Menu.Item key="setting:1">选项1</Menu.Item>
			<Menu.Item key="setting:2">选项2</Menu.Item>
			<Menu.Item key="setting:3">选项3</Menu.Item>
			<Menu.Item key="setting:4">选项4</Menu.Item>
		</SubMenu>
		<Menu.Item key="alipay">
			<a href="#" target="_blank">导航四 - 链接</a>
		</Menu.Item>
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
| onClick | 点击 menuitem 调用此函数，参数为 {item, key} | function | 无 |
| style | 根节点样式 | object |  |

### Menu.Item

| 配置项 | 说明 | 类型 | 默认值 |
|---|---|---|---|
| disabled | 是否禁用 | Boolean | false |
| key | item 的唯一标志 | String |  |

### Menu.SubMenu

| 配置项 | 说明 | 类型 | 默认值 |
|---|---|---|---|
| title | 子菜单项值 | String or React.Element | |
| children | (MenuItem or SubMenu)[] | 子菜单的菜单项 | |
