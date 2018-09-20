/* eslint-disable react/no-multi-comp */
/* eslint-disable react/prefer-es6-class */

import expect from 'expect.js';
import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Menu, { SubMenu, Item } from '../src';
import { forceLineClampSupport, getClampProps } from '../src/utils';

Enzyme.configure({ adapter: new Adapter() });

forceLineClampSupport(true);

describe('Menu', () => {
  it('should render correctly', (done) => {
    const wrapper = mount(<Menu />);
    expect(wrapper.find('.kuma-menu').length).to.be.above(0);
    done();
  });

  it('should render subMenu correctly', (done) => {
    const wrapper = mount((
      <Menu>
        <SubMenu title="test">
          <Item>Menu Item</Item>
        </SubMenu>
      </Menu>
    ));
    expect(wrapper.find('.kuma-menu-submenu').length).to.be(1);
    done();
  });

  it('should render lineClamp correctly', (done) => {
    const wrapper = mount((
      <Menu
        lineClamp={2}
      >
        <SubMenu>
          <Item>Menu Item</Item>
        </SubMenu>
      </Menu>
    ));
    expect(wrapper.find('.kuma-menu-clamp-text').length).to.be.above(0);
    done();
  });

  it('should call getClampProps correctly', (done) => {
    expect(getClampProps({
      mode: 'vertical',
      level: 1,
      lineClamp: 2,
    }).clamp).to.be(true);
    done();
  });
});
