import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { SubMenu as RcSubMenu } from 'rc-menu';
import { getClampProps } from './utils';

class SubMenu extends React.Component {
  render() {
    const rootPrefixCls = this.context.prefixCls;
    const theme = this.context.theme;
    const { title, ...props } = this.props;

    const {
      mode,
      level,
      prefixCls,
      lineClamp,
    } = this.context;

    const {
      props: titleProps,
      clamp,
    } = getClampProps({
      mode,
      level,
      className: `${prefixCls}-submenu-title-text ${prefixCls}-clamp-text`,
      lineClamp,
    });

    let titleJSX = title;
    if (clamp) {
      titleJSX = (
        <span {...titleProps}>{title}</span>
      );
    } else {
      titleJSX = (
        <span className={`${prefixCls}-submenu-title-text`}>{title}</span>
      );
    }
    props.title = titleJSX;

    if (clamp) {
      props.className = classnames(props.className, `${rootPrefixCls}-submenu-clamp`);
    }

    return (
      <RcSubMenu
        {...props}
        ref={this.saveSubMenu}
        popupClassName={classnames(`${rootPrefixCls}-${theme}`)}
      />
    );
  }
}

SubMenu.propTypes = {
  ...RcSubMenu.propTypes,
  title: PropTypes.node,
};

SubMenu.defaultProps = {
  ...RcSubMenu.defaultProps,
  title: null,
};

SubMenu.contextTypes = {
  mode: PropTypes.string,
  level: PropTypes.number,
  theme: PropTypes.string,
  prefixCls: PropTypes.string,
  lineClamp: PropTypes.number,
};

export default SubMenu;
