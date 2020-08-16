import React from 'react';
import { mount } from 'enzyme';
import TodoApp from '../TodoApp';


describe('TodoApp Test', () => {
  const component = mount(<TodoApp />)
  test('should render correctly', () => {
    expect(component).toMatchSnapshot();
  })
  

  
})
