/**
 * Menu Component for uxcore
 * @author vincent.bian
 *
 * Copyright 2014-2015, Uxcore Team, Alinw.
 * All rights reserved.
 */
import React from 'react';
import RcMenu, {SubMenu, Item, Divider} from 'rc-menu';

class Menu extends React.Component {
    render() {
        if (this.props.mode === 'inline') {
            return <RcMenu {...this.props} />;
        } else {
            return <RcMenu {...this.props} />;
        }
    }
}

Menu.defaultProps = {
    prefixCls: 'kuma-menu'
};
Menu.propTypes = {
    prefixCls: React.PropTypes.string
};

Menu.SubMenu = SubMenu;
Menu.Item = Item;
Menu.Divider = Divider;

export default Menu;
