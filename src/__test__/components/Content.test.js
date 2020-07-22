import React from 'react';
import { shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import Content from '../../components/Content';

describe('<Content />', () => {
  const content = shallow(<Content />);
  test('Render del componente Content', () => {
    expect(content.length).toEqual(1);
  });

  test('Render de la image', () => {
    expect(content.find('p').text()).toEqual('Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat doloribus labore autem? Voluptatem recusandae Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis nisi, repellat placeat amet consequuntur necessitatibus odio laborum quis quae quasi eligendi');
  });
});

describe('Content Snapshot', () => {
  test('Comprobar la UI del componente Content', () => {
    const content = create(<Content />);
    expect(content.toJSON()).toMatchSnapshot();
  });
});