import React from 'react';
import PropTypes from 'prop-types';
import { MenuItem as RcMenuItem } from 'rc-menu';
import { getClampProps } from './utils';

class Item extends React.Component {
  render() {
    const {
      mode,
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
      className: `${prefixCls}-clamp-text`,
      lineClamp,
    });

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
  prefixCls: PropTypes.string,
  lineClamp: PropTypes.number,
};

export default Item;
