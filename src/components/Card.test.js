import { shallow } from 'enzyme';
import React from 'react';
import Card from './Card';

it('expect to render Card', () => {
  expect(shallow(<Card />)).toMatchSnapshot();
  
})
