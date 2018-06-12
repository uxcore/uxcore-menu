/**
 * Menu Component Demo for uxcore
 * @author vincent.bian
 *
 * Copyright 2014-2015, Uxcore Team, Alinw.
 * All rights reserved.
 */
import React from 'react';
import Form from 'uxcore/lib/Form';
import Menu from '../src/Menu';

const { SubMenu, Item, ItemGroup } = Menu;
const { RadioGroupFormField } = Form;
const RadioItem = RadioGroupFormField.Item;

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
      openKeys: [],
      status: 'vertical',
    };

    this.onToggle = this.onToggle.bind(this);
  }

  onToggle(openKeys) {
    console.info('openKeys', openKeys);
    this.setState({
      openKeys,
    });
  }

  handleClick1(e) {
    console.log('click ', e);
    this.setState({
      current1: e.key,
    });
  }

  handleClick2(e) {
    console.log('click ', e);
    this.setState({
      current2: e.key,
    });
  }

  handleClick3(e) {
    console.log('click ', e);
    this.setState({
      current3: e.key,
      openKeys: e.keyPath.slice(1),
    });
  }

  render() {
    return (
      <div>
        <p>水平的顶部导航菜单。</p>
        <Menu
          onClick={(e) => {
            this.handleClick1(e);
          }}
          selectedKeys={[this.state.current1]}
          mode="horizontal"
        >
          <Item key="mail">
            <i className="kuma-icon kuma-icon-email" />导航一
          </Item>
          <Item key="app">
            <i className="kuma-icon kuma-icon-wangwang" />导航二
          </Item>
          <SubMenu
            title={
              <span><i className="kuma-icon kuma-icon-setting" />导航 - 子菜单</span>
            }
          >
            <Item key="setting:1">选项1</Item>
            <Item key="setting:2">选项2</Item>
            <Item key="setting:3">选项3</Item>
            <SubMenu key="sub3" title="三级导航">
              <Item key="7">选项7</Item>
              <Item key="8">选项8</Item>
            </SubMenu>
          </SubMenu>
          <Item key="alipay">
            <a href="//uxco.re" target="_blank" rel="noopener noreferrer">导航四 - 链接</a>
          </Item>
        </Menu>
        <p>内嵌菜单</p>
        <Menu
          onClick={(e) => {
            this.handleClick2(e);
          }}
          style={{ width: 220 }}
          defaultOpenKeys={['sub1']}
          selectedKeys={[this.state.current2]}
          mode="inline"
        >
          <SubMenu
            key="sub1"
            title={
              <span>
                <i className="kuma-icon kuma-icon-email" /><span>导航一</span>
              </span>
            }
          >
            <Item key="1">选项1</Item>
            <Item key="2">选项2</Item>
            <Item key="3">选项3</Item>
            <Item key="4">选项4</Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <i className="kuma-icon kuma-icon-wangwang" /><span>导航二</span>
              </span>
            }
          >
            <Item key="5">选项5</Item>
            <Item key="6">选项6</Item>
            <SubMenu key="sub3" title="三级导航">
              <Item key="7">选项7</Item>
              <Item key="8">选项8</Item>
            </SubMenu>
          </SubMenu>
          <SubMenu
            key="sub4"
            title={
              <span>
                <i className="kuma-icon kuma-icon-boss" /><span>导航三</span>
              </span>
            }
          >
            <Item key="9">选项9</Item>
            <Item key="10">选项10</Item>
            <Item key="11">选项11</Item>
            <Item key="12">选项12</Item>
          </SubMenu>
        </Menu>
        <p>只展开当前父级菜单</p>
        <Menu
          onClick={(e) => {
            this.handleClick3(e);
          }}
          style={{ width: 220 }}
          openKeys={this.state.openKeys}
          onOpenChange={this.onToggle}
          selectedKeys={[this.state.current3]}
          mode="inline"
        >
          <SubMenu
            key="sub1"
            title={
              <span>
                <i className="kuma-icon kuma-icon-wangwang" /><span>导航一</span>
              </span>
            }
          >
            <Item key="1">选项1</Item>
            <Item key="2">选项2</Item>
            <Item key="3">选项3</Item>
            <Item key="4">选项4</Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <i className="kuma-icon kuma-icon-email" /><span>导航二</span>
              </span>
            }
          >
            <Item key="5">选项5</Item>
            <Item key="6">选项6</Item>
            <SubMenu key="sub3" title="三级导航">
              <Item key="7">选项7</Item>
              <Item key="8">选项8</Item>
            </SubMenu>
          </SubMenu>
          <SubMenu
            key="sub4"
            title={
              <span>
                <i className="kuma-icon kuma-icon-boss" /><span>导航三</span>
              </span>
            }
          >
            <Item key="9">选项9</Item>
            <Item key="10">选项10</Item>
            <Item key="11">选项11</Item>
            <Item key="12">选项12</Item>
          </SubMenu>
        </Menu>
        <p>垂直菜单</p>
        <Menu onClick={handleClick} style={{ width: 220 }} mode="vertical">
          <SubMenu
            key="sub1"
            title={
              <span>
                <i className="kuma-icon kuma-icon-wangwang" /><span>导航一</span>
              </span>
            }
          >
            <Item key="1">选项1</Item>
            <Item key="2">选项2</Item>
            <Item key="3">选项3</Item>
            <Item key="4">选项4</Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <i className="kuma-icon kuma-icon-email" /><span>导航二</span>
              </span>
            }
          >
            <Item key="5">选项5</Item>
            <Item key="6">选项6</Item>
            <SubMenu key="sub3" title="三级导航">
              <Item key="7">选项7</Item>
              <Item key="8">选项8</Item>
            </SubMenu>
          </SubMenu>
          <SubMenu
            key="sub4"
            title={
              <span>
                <i className="kuma-icon kuma-icon-boss" /><span>导航三</span>
              </span>
            }
          >
            <Item key="9">选项9</Item>
            <Item key="10">选项10</Item>
            <Item key="11">选项11</Item>
            <Item key="12">选项12</Item>
          </SubMenu>
        </Menu>
        <p>内外主题</p>
        <Form
          jsxvalues={this.state}
          jsxonChange={(values) => {
            this.setState(values);
          }}
        >
          <RadioGroupFormField jsxname="status" jsxlabel="是否展开">
            <RadioItem value="inline" text="inline" />
            <RadioItem value="vertical" text="vertical" />
          </RadioGroupFormField>
        </Form>
        <Menu
          onClick={(e) => {
            this.handleClick2(e);
          }}
          style={{ width: 220 }}
          className="kuma-menu-none-border"
          defaultOpenKeys={['sub1']}
          selectedKeys={[this.state.current2]}
          mode={this.state.status}
          openAnimation={'zoom'}
        >
          <Item key="1">
            <span>导航一</span>
          </Item>
          <SubMenu title="分组">
            <ItemGroup title="水果">
              <Item key="a">苹果</Item>
              <Item key="b">香蕉</Item>
            </ItemGroup>
            <ItemGroup title="蔬菜">
              <SubMenu key="sub3" title="青菜">
                <Item key="7">小白菜</Item>
                <Item key="8">大青菜</Item>
              </SubMenu>
              <Item key="l">萝卜</Item>
            </ItemGroup>
          </SubMenu>
          <SubMenu key="sub2" title={<span>导航二</span>}>
            <Item key="5">选项5</Item>
            <Item key="6">选项6</Item>
            <SubMenu key="sub3" title="三级导航">
              <Item key="7">选项7</Item>
              <Item key="8">选项8</Item>
            </SubMenu>
          </SubMenu>
          <SubMenu key="sub4" title={<span>导航三</span>}>
            <Item key="9">选项9</Item>
            <Item key="10">选项10</Item>
            <Item key="11">选项11</Item>
            <Item key="12">选项12</Item>
          </SubMenu>
        </Menu>
        <p>内外主题（深色版）</p>
        <Form
          jsxvalues={this.state}
          jsxonChange={(values) => {
            this.setState(values);
          }}
        >
          <RadioGroupFormField jsxname="status" jsxlabel="是否展开">
            <RadioItem value="inline" text="inline" />
            <RadioItem value="vertical" text="vertical" />
          </RadioGroupFormField>
        </Form>
        <Menu
          onClick={(e) => {
            this.handleClick2(e);
          }}
          style={{ width: 220 }}
          className="kuma-menu-none-border-dark"
          defaultOpenKeys={['sub1']}
          selectedKeys={[this.state.current2]}
          mode={this.state.status}
          openAnimation={'zoom'}
        >
          <Item key="1">
            <span>导航一</span>
          </Item>
          <SubMenu title="分组">
            <ItemGroup title="水果">
              <Item key="a">苹果</Item>
              <Item key="b">香蕉</Item>
            </ItemGroup>
            <ItemGroup title="蔬菜">
              <SubMenu key="sub3" title="青菜">
                <Item key="7">小白菜</Item>
                <Item key="8">大青菜</Item>
              </SubMenu>
              <Item key="l">萝卜</Item>
            </ItemGroup>
          </SubMenu>
          <SubMenu key="sub2" title={<span>导航二</span>}>
            <Item key="5">选项5</Item>
            <Item key="6">选项6</Item>
            <SubMenu key="sub3" title="三级导航">
              <Item key="7">选项7</Item>
              <Item key="8">选项8</Item>
            </SubMenu>
          </SubMenu>
          <SubMenu key="sub4" title={<span>导航三</span>}>
            <Item key="9">选项9</Item>
            <Item key="10">选项10</Item>
            <Item key="11">选项11</Item>
            <Item key="12">选项12</Item>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}

export default Demo;
