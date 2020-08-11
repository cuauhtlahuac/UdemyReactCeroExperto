import React from 'react';
import { shallow } from 'enzyme';

import HookApp from 'HookApp';

describe('HookApp Tests', () => {
  it('should render correctly', () => {
    const component = shallow(<HookApp />)

    expect(component).toMatchSnapshot();
  })
})
