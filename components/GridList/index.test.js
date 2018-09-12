/* eslint-env jest */

import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { getShowTitles } from 'api';
import GridList from './index';

const showTitles = getShowTitles(3);

describe('<GridList />', () => {
  it('should render a div', () => {
    const wrapper = shallow(
      <GridList>
        <br />
      </GridList>
    );
    expect(wrapper.childAt(0).type()).toBe('div');
  });

  it('renders children', () => {
    const wrapper = shallow(
      <GridList>
        {showTitles.map(showTitle => (
          <span key={showTitle.id}>{showTitle.title}</span>
        ))}
      </GridList>
    );

    expect(wrapper.find('div')).toHaveLength(showTitles.length);
  });

  it('renders children and change spacing', () => {
    const spacing = 10;
    const component = renderer.create(
      <GridList spacing={spacing}>
        {showTitles.map(showTitle => (
          <span key={showTitle.id}>{showTitle.title}</span>
        ))}
      </GridList>
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders children and change item width', () => {
    const itemWidth = 400;
    const component = renderer.create(
      <GridList itemWidth={itemWidth}>
        {showTitles.map(showTitle => (
          <span key={showTitle.id}>{showTitle.title}</span>
        ))}
      </GridList>
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders children and change vertical', () => {
    const vertical = true;
    const component = renderer.create(
      <GridList vertical={vertical}>
        {showTitles.map(showTitle => (
          <span key={showTitle.id}>{showTitle.title}</span>
        ))}
      </GridList>
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
