/**
 * Menu Component Demo for uxcore
 * @author vincent.bian
 *
 * Copyright 2014-2015, Uxcore Team, Alinw.
 * All rights reserved.
 */

let Menu = require('../src');
let SubMenu = Menu.SubMenu;
let MenuItem = Menu.Item;

function handleClick(e) {
    console.log('click', e);
}

class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            current1: 'mail',
            current2: '1',
            current3: '1',
            openKeys: []
        };
    }

    handleClick1(e) {
        console.log('click ', e);
        this.setState({
            current1: e.key
        });
    }

    handleClick2(e) {
        console.log('click ', e);
        this.setState({
            current2: e.key
        });
    }

    handleClick3(e) {
        console.log('click ', e);
        this.setState({
            current3: e.key,
            openKeys: e.keyPath.slice(1)
        });
    }

    onToggle(info){
        this.setState({
            openKeys: info.openKeys
        });
    }

    render() {
        return (
            <div>
                <p>水平的顶部导航菜单。</p>
                <Menu onClick={this.handleClick1.bind(this)} selectedKeys={[this.state.current1]} mode="horizontal">
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
                </Menu>
                <p>内嵌菜单</p>
                <Menu onClick={this.handleClick2.bind(this)}
                    style={{width:220}}
                    defaultOpenKeys={['sub1']}
                    selectedKeys={[this.state.current2]}
                    mode="inline">
                    <SubMenu key="sub1" title={<span><i className="kuma-icon kuma-icon-email"></i><span>导航一</span></span>}>
                        <Menu.Item key="1">选项1</Menu.Item>
                        <Menu.Item key="2">选项2</Menu.Item>
                        <Menu.Item key="3">选项3</Menu.Item>
                        <Menu.Item key="4">选项4</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title={<span><i className="kuma-icon kuma-icon-wangwang"></i><span>导航二</span></span>}>
                        <Menu.Item key="5">选项5</Menu.Item>
                        <Menu.Item key="6">选项6</Menu.Item>
                        <SubMenu key="sub3" title="三级导航">
                            <Menu.Item key="7">选项7</Menu.Item>
                            <Menu.Item key="8">选项8</Menu.Item>
                        </SubMenu>
                    </SubMenu>
                    <SubMenu key="sub4" title={<span><i className="kuma-icon kuma-icon-boss"></i><span>导航三</span></span>}>
                        <Menu.Item key="9">选项9</Menu.Item>
                        <Menu.Item key="10">选项10</Menu.Item>
                        <Menu.Item key="11">选项11</Menu.Item>
                        <Menu.Item key="12">选项12</Menu.Item>
                    </SubMenu>
                </Menu>
                <p>只展开当前父级菜单</p>
                <Menu onClick={this.handleClick3.bind(this)}
                    style={{width:220}}
                    openKeys={this.state.openKeys}
                    onOpen={this.onToggle.bind(this)}
                    onClose={this.onToggle.bind(this)}
                    selectedKeys={[this.state.current3]}
                    mode="inline">
                    <SubMenu key="sub1" title={<span><i className="kuma-icon kuma-icon-wangwang"></i><span>导航一</span></span>}>
                        <Menu.Item key="1">选项1</Menu.Item>
                        <Menu.Item key="2">选项2</Menu.Item>
                        <Menu.Item key="3">选项3</Menu.Item>
                        <Menu.Item key="4">选项4</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title={<span><i className="kuma-icon kuma-icon-email"></i><span>导航二</span></span>}>
                        <Menu.Item key="5">选项5</Menu.Item>
                        <Menu.Item key="6">选项6</Menu.Item>
                        <SubMenu key="sub3" title="三级导航">
                            <Menu.Item key="7">选项7</Menu.Item>
                            <Menu.Item key="8">选项8</Menu.Item>
                        </SubMenu>
                    </SubMenu>
                    <SubMenu key="sub4" title={<span><i className="kuma-icon kuma-icon-boss"></i><span>导航三</span></span>}>
                        <Menu.Item key="9">选项9</Menu.Item>
                        <Menu.Item key="10">选项10</Menu.Item>
                        <Menu.Item key="11">选项11</Menu.Item>
                        <Menu.Item key="12">选项12</Menu.Item>
                    </SubMenu>
                </Menu>
                <p>垂直菜单</p>
                <Menu onClick={handleClick} style={{width:220}} mode="vertical">
                    <SubMenu key="sub1" title={<span><i className="kuma-icon kuma-icon-wangwang"></i><span>导航一</span></span>}>
                        <MenuItem key="1">选项1</MenuItem>
                        <MenuItem key="2">选项2</MenuItem>
                        <MenuItem key="3">选项3</MenuItem>
                        <MenuItem key="4">选项4</MenuItem>
                    </SubMenu>
                    <SubMenu key="sub2" title={<span><i className="kuma-icon kuma-icon-email"></i><span>导航二</span></span>}>
                        <MenuItem key="5">选项5</MenuItem>
                        <MenuItem key="6">选项6</MenuItem>
                        <SubMenu key="sub3" title="三级导航">
                            <MenuItem key="7">选项7</MenuItem>
                            <MenuItem key="8">选项8</MenuItem>
                        </SubMenu>
                    </SubMenu>
                    <SubMenu key="sub4" title={<span><i className="kuma-icon kuma-icon-boss"></i><span>导航三</span></span>}>
                        <MenuItem key="9">选项9</MenuItem>
                        <MenuItem key="10">选项10</MenuItem>
                        <MenuItem key="11">选项11</MenuItem>
                        <MenuItem key="12">选项12</MenuItem>
                    </SubMenu>
                </Menu>
            </div>
        );
    }
}

module.exports = Demo;
