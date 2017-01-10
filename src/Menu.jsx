/**
 * Menu Component for uxcore
 * @author vincent.bian
 *
 * Copyright 2014-2015, Uxcore Team, Alinw.
 * All rights reserved.
 */
import React from 'react';
import RcMenu, { SubMenu, Item, Divider } from 'rc-menu';
import cssAni from 'css-animation';

/* eslint-disable no-param-reassign */

class Menu extends React.Component {

  animate(node, show, done) {
    const { prefixCls } = this.props;
    let height;
    return cssAni(node, `${prefixCls}-collapse`, {
      start() {
        if (!show) {
          node.style.height = `${node.offsetHeight}px`;
          node.style.opacity = 0;
        } else {
          height = node.offsetHeight;
          node.style.height = 0;
          node.style.opacity = 1;
          // node.style.transform = 'translate(-10px, 0)';
        }
      },
      active() {
        node.style.height = `${show ? height : 0}px`;
        // node.style.transform = `translate(${show ? '0' : '-10px'}, 0)`;
      },
      end() {
        node.style.height = '';
        done();
      },
    });
  }

  render() {
    const me = this;
    const openAnimation = {
      enter(node, done) {
        return me.animate(node, true, done);
      },
      appear(node, done) {
        return me.animate(node, true, done);
      },
      leave(node, done) {
        return me.animate(node, false, done);
      },
    };
    if (this.props.mode === 'inline') {
      return <RcMenu {...this.props} openAnimation={openAnimation} />;
    }
    return <RcMenu {...this.props} />;
  }
}

Menu.defaultProps = {
  prefixCls: 'kuma-menu',
  openAnimation: '',
};
Menu.propTypes = {
  mode: React.PropTypes.string,
  prefixCls: React.PropTypes.string,
};

Menu.SubMenu = SubMenu;
Menu.Item = Item;
Menu.Divider = Divider;

export default Menu;