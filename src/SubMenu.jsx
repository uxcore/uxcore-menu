import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { SubMenu as RcSubMenu } from 'rc-menu';

class SubMenu extends React.Component {
  render() {
    const rootPrefixCls = this.context.prefixCls;
    const theme = this.context.theme;
    return (
      <RcSubMenu
        {...this.props}
        ref={this.saveSubMenu}
        popupClassName={classnames(`${rootPrefixCls}-${theme}`)}
      />
    );
  }
}

SubMenu.contextTypes = {
  theme: PropTypes.string,
  prefixCls: PropTypes.string,
};

export default SubMenu;
