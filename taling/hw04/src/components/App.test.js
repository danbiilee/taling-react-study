import React from 'react';
import {shallow, mount} from 'enzyme';
import App from './App';
import Main from './Main';
import Profile from './Profile';
import Fortune from './Fortune';
import {MemoryRouter} from 'react-router';

jest.mock('./Main', () => {return ((props) => <div id="main"> MockMain </div>);});
jest.mock('./Profile', () => () => 'mock');
jest.mock('./Fortune', () => () => 'mock');

describe('App', () => {
  it ('should render without errors', () => {
    const component = shallow(<App/>);
    const wrapper = component.find(".App");
    expect(wrapper.length).toBe(1);
  });
  
  it ('should render main with "/main"', () => {
    const component = mount(
      <MemoryRouter initialEntries={['/main']}>
      <App/>
      </MemoryRouter>
    );
    expect(component.find(Main)).toHaveLength(1);
    expect(component.find('#main').length).toBe(1);
  });

  it ('should render profile with "/profile"', () => {
    const component = mount(
      <MemoryRouter initialEntries={['/profile']}>
      <App/>
      </MemoryRouter>
    );
    expect(component.find(Profile)).toHaveLength(1);
  });

  it ('should goto main when clicking main link', () => {
    const component = mount(
      <MemoryRouter initialEntries={['/foo']}>
      <App/>
      </MemoryRouter>
    );
    const wrapper = component.find('#main-link');
    wrapper.first().simulate('click', {button: 0});
    component.update();
    expect(component.find(Main)).toHaveLength(1);
  });


  it ('should render fortune with "/fortune/..."', () => {
    const component = mount(
      <MemoryRouter initialEntries={['/fortune/TA&1993-10-10']}>
      <App/>
      </MemoryRouter>
    );
    expect(component.find(Fortune)).toHaveLength(1);
  });

  it ('should redirect "/" to "/main"', () => {
    const component = mount(
      <MemoryRouter initialEntries={['/']}>
      <App/>
      </MemoryRouter>
    );
    expect(component.find(Main)).toHaveLength(1);
  });


  it ('should render 404 page with wrong address', () => {
    const component = mount(
      <MemoryRouter initialEntries={['/TAzzang']}>
      <App/>
      </MemoryRouter>
    );
    expect(component.contains(<div>404 Not Found</div>)).toBe(true);
  });

});
