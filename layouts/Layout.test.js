/* eslint-env jest */

import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import Layout from './Layout';

describe('<Layout />', () => {
  it('should render a Layout__Container', () => {
    const wrapper = shallow(
      <Layout>
        <br />
      </Layout>
    );

    expect(wrapper.name()).toBe('Layout__Container');
  });

  it('renders children', () => {
    const wrapper = shallow(
      <Layout>
        <br />
        <br />
      </Layout>
    );

    expect(wrapper.find('Layout__Main').children()).toHaveLength(2);
  });
});
