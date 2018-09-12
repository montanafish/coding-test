/* eslint-env jest */

import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { getShowTitles } from 'api';
import TitleCard from './index';

const showTitle = getShowTitles()[0];

describe('<TitleCard />', () => {
  it('should render a TitleCard__Box', () => {
    const wrapper = shallow(
      <TitleCard
        key={showTitle.id}
        title={showTitle.title}
        image={showTitle.image.medium}
        icon={showTitle.icon}
      />
    );
    expect(wrapper.name()).toBe('TitleCard__Box');
  });

  it('renders children and hide icon', () => {
    const component = renderer.create(
      <TitleCard
        key={showTitle.id}
        title={showTitle.title}
        image={showTitle.image.medium}
      />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
