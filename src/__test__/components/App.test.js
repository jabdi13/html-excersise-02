import React from 'react';
import { shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import App from '../../components/App';

describe('<App />', () => {
  const app = shallow(<App />);
  test('Render del componente App', () => {
    expect(app.length).toEqual(1);
  });

  test('Render del wrapper de la app', () => {
    expect(app.find('div').hasClass('App')).toBeTruthy();
  });
});

describe('App Snapshot', () => {
  test('Comprobar la UI del componente App', () => {
    const app = create(<App />);
    expect(app.toJSON()).toMatchSnapshot();
  });
});