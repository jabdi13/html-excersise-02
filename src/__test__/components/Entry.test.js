import React from 'react';
import { shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import entriesMock from '../../__mocks__/entriesMock';
import Entry from '../../components/Entry';

describe('<Entry />', () => {
  const entry = shallow(<Entry {...entriesMock[0]} />);
  test('Render del componente Entry', () => {
    expect(entry.length).toEqual(1);
  });

  test('Render de la entry', () => {
    expect(entry.find('a').last().text()).toEqual('Leer más');
  });
});

describe('Entry Snapshot', () => {
  test('Comprobar la UI del componente Entry', () => {
    const entry = create(<Entry {...entriesMock[0]} />);
    expect(entry.toJSON()).toMatchSnapshot();
  });
});