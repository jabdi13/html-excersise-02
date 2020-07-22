import React from 'react';
import { shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import FeaturedEntry from '../../components/FeaturedEntry';

describe('<FeaturedEntry />', () => {
  const featuredEntry = shallow(<FeaturedEntry />);
  test('Render del componente FeaturedEntry', () => {
    expect(featuredEntry.length).toEqual(1);
  });

  test('Render del título', () => {
    expect(featuredEntry.find('h2').text()).toEqual('Entrada destacada');
  });
});

describe('FeaturedEntry Snapshot', () => {
  test('Comprobar la UI del componente FeaturedEntry', () => {
    const featuredEntry = create(<FeaturedEntry />);
    expect(featuredEntry.toJSON()).toMatchSnapshot();
  });
});