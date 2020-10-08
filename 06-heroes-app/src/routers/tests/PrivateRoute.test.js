import { shallow } from 'enzyme';
import React from 'react';
import PrivateRoute from 'routers/PrivateRoute';

describe('Pruebas de <PrivateRoute />', () => {
  let props = {};
  let component = () => <p>x</p>;

	beforeEach(() => {
		props = {
			isAuthenticated: false,
			component: jest.fn(() => <p>dokdokd</p>),
			location: { pathname: '/' },
		};
    component = shallow(<PrivateRoute {...props} />);
	});

	test('should render correctly', () => {

    expect(component).toMatchSnapshot();
	});
  
	test('should show component if isAuthenticated and save in localStorage', () => {
    component.setProps({...props, isAuthenticated: true })
    
    expect(component).toMatchSnapshot();
  });
});
