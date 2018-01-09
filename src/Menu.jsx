/**
 * Menu Component for uxcore
 * @author vincent.bian
 *
 * Copyright 2014-2015, Uxcore Team, Alinw.
 * All rights reserved.
 */
import React from 'react';
import PropTypes from 'prop-types';
import RcMenu, { Item, Divider, ItemGroup } from 'rc-menu';
import cssAni from 'css-animation';
import SubMenu from './SubMenu';

/* eslint-disable no-param-reassign */

class Menu extends React.Component {
  getChildContext() {
    return {
      prefixCls: this.props.prefixCls,
      theme: this.props.className ? this.props.className.replace(`${this.props.prefixCls  }-`, '') : '',
    };
  }
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

    const onOpenChange = (openKeys) => {
      if (this.props.onOpenChange) {
        this.props.onOpenChange(openKeys);
      }

      if (this.props.onOpen) {
        this.props.onOpen({ openKeys });
      }

      if (this.props.onClose) {
        this.props.onClose({ openKeys });
      }
    };

    if (this.props.mode === 'inline') {
      return <RcMenu {...this.props} openAnimation={openAnimation} onOpenChange={onOpenChange} />;
    }
    return <RcMenu {...this.props} onOpenChange={onOpenChange} />;
  }
}

Menu.defaultProps = {
  prefixCls: 'kuma-menu',
  inlineIndent: 14,
  openAnimation: 'zoom',
};
Menu.propTypes = {
  mode: PropTypes.string,
  prefixCls: PropTypes.string,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  onOpenChange: PropTypes.func,
  className: PropTypes.string,
  openAnimation: PropTypes.string,
};

Menu.childContextTypes = {
  prefixCls: PropTypes.string,
  theme: PropTypes.string,
};

Menu.ItemGroup = ItemGroup;
Menu.SubMenu = SubMenu;
Menu.Item = Item;
Menu.Divider = Divider;

export default Menu;
