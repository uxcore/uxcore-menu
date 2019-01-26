import React from 'react';
import PropTypes from 'prop-types';
import { MenuItem as RcMenuItem } from 'rc-menu';
import { getClampProps } from './utils';

class Item extends React.Component {
  render() {
    const {
      mode,
      level,
      prefixCls,
      lineClamp,
    } = this.context;

    const {
      children,
      ...otherProps
    } = this.props;

    const {
      props: spanProps,
      clamp,
    } = getClampProps({
      mode,
      level,
      className: `${prefixCls}-clamp-text`,
      lineClamp,
    });

    if (typeof children === 'string') {
      spanProps.title = children;
    }

    return (
      <RcMenuItem
        className={clamp ? `${prefixCls}-item-clamp` : ''}
        {...otherProps}
      >
        <span {...spanProps}>{children}</span>
      </RcMenuItem>
    );
  }
}

Item.propTypes = {
  ...RcMenuItem.propTypes,
};

Item.defaultProps = {
  ...RcMenuItem.defaultProps,
};

Item.contextTypes = {
  mode: PropTypes.string,
  level: PropTypes.number,
  prefixCls: PropTypes.string,
  lineClamp: PropTypes.number,
};

Item.isMenuItem = true;

export default Item;
