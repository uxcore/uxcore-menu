/* eslint-disable react/no-multi-comp */
/* eslint-disable react/prefer-es6-class */

import expect from 'expect.js';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Menu from '../src';

Enzyme.configure({ adapter: new Adapter() });

describe('Menu', () => {
  it('should render correctly', (done) => {
    const wrapper = shallow(<Menu />);
    expect(wrapper.find('Menu').length).to.be(1);
    done();
  });
});
