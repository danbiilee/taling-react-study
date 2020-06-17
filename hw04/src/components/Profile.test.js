import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';
import Profile from './Profile';

describe('Profile', () => {
  it('should render without errors', () => {
    const component = shallow(<Profile />);
    expect(component.find('.Profile').length).toBe(1);
  });

  it('should handle username changes', () => {
    const username = 'ta';
    const component = shallow(<Profile />);
    const wrapper = component.find('#username-input');
    expect(wrapper.length).toBe(1);
    //{target: {value: }} mocks the (event) passed to the handler
    wrapper.simulate('change', {
      target: { value: username, name: wrapper.props().name },
    });
    //we have to get an 'instance()' of a component to access its state
    const newProfileInstance = component.instance();
    expect(newProfileInstance.state.username).toEqual(username);
  });

  it('should handle birthday changes', () => {
    const birthday = '1993-10-10';
    const component = shallow(<Profile />);
    const wrapper = component.find('#birthday-input');
    expect(wrapper.length).toBe(1);
    //{target: {value: }} mocks the (event) passed to the handler
    wrapper.simulate('change', {
      target: { value: birthday, name: wrapper.props().name },
    });
    //we have to get an 'instance()' of a component to access its state
    const newProfileInstance = component.instance();
    expect(newProfileInstance.state.birthday).toEqual(birthday);
  });

  it('should handle display link with username & birthday has been entered', () => {
    const username = 'ta';
    const birthday = '1993-10-10';
    const component = shallow(<Profile />);
    const usernameWrapper = component.find('#username-input');
    const birthdayWrapper = component.find('#birthday-input');

    expect(usernameWrapper.length).toBe(1);
    expect(birthdayWrapper.length).toBe(1);

    usernameWrapper.simulate('change', {
      target: { value: username, name: usernameWrapper.props().name },
    });
    birthdayWrapper.simulate('change', {
      target: { value: birthday, name: birthdayWrapper.props().name },
    });
    
    expect(
      component.contains(
        <Link to={'/fortune/' + username + '&' + birthday}>
          show my fortune
        </Link>,
      ),
    ).toBe(true);
  });
});
