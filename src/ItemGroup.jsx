import React from 'react';
import PropTypes from 'prop-types';
import { ItemGroup as RcItemGroup } from 'rc-menu';
import { getClampProps } from './utils';

class ItemGroup extends React.Component {
  render() {
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
      level: props.level || level,
      className: `${prefixCls}-item-group-text ${prefixCls}-clamp-text`,
      lineClamp,
    });

    if (typeof title === 'string') {
      titleProps.title = title;
    }

    let titleJSX = title;
    if (clamp) {
      titleJSX = (
        <span {...titleProps}>{title}</span>
      );
    } else {
      titleJSX = (
        <span {...titleProps} className={`${prefixCls}-item-group-text`}>{title}</span>
      );
    }
    props.title = titleJSX;

    return (
      <RcItemGroup
        {...props}
      />
    );
  }
}

ItemGroup.propTypes = {
  ...RcItemGroup.propTypes,
  title: PropTypes.node,
};

ItemGroup.defaultProps = {
  ...RcItemGroup.defaultProps,
  title: null,
};

ItemGroup.contextTypes = {
  mode: PropTypes.string,
  level: PropTypes.number,
  theme: PropTypes.string,
  prefixCls: PropTypes.string,
  lineClamp: PropTypes.number,
};

export default ItemGroup;
