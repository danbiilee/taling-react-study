import React from 'react';
import {shallow, mount} from 'enzyme';
import Main from './Main';

// jest.mock('./Profile', () => { return ((props) => <div id="profile-link">mock Profile</div>);});

describe('Main', () => {
  it ('should render without errors', () => {
    const component = shallow(<Main/>);
    expect(component.find('.Main').length).toBe(1);
  });

  it ('should have link pointing to "/profile"', () => {
    const component = shallow(<Main/>);
    const wrapper = component.find('#profile-link');
    expect(wrapper).toHaveLength(1);
    expect(wrapper.props().to).toEqual("/profile");
  });
});
