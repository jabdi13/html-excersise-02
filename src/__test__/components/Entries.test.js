import React from 'react';
import { shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import Entries from '../../components/Entries';
import Entry from '../../components/Entry';
import entriesMock from '../../__mocks__/entriesMock';

describe('<Entries />', () => {
  const entries = shallow(<Entries entries={entriesMock} />);
  test('Render del componente Entries', () => {
    expect(entries.length).toEqual(1);
  });

  test('Render de la primera entry', () => {
    expect(entries.contains(<Entry {...entriesMock[0]} />)).toBeTruthy();
  });
});

describe('Entries Snapshot', () => {
  test('Comprobar la UI del componente Entries', () => {
    const entries = create(<Entries entries={entriesMock} />);
    expect(entries.toJSON()).toMatchSnapshot();
  });
});