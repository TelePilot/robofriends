import { shallow } from 'enzyme';
import React from 'react';
import Header from './Header';

it('expect header to render', () => {

  expect(shallow(<Header />)).toMatchSnapshot();

})
