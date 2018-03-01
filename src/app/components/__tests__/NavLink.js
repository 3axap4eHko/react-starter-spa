import React from 'react';
import renderer from 'react-test-renderer';
import { render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Steersman from 'react-steersman/Steersman';
import createMemoryHistory from 'react-steersman/createMemoryHistory';
import { ThemeProvider } from 'react-jss';
import NavLink from '../NavLink';
import theme from '../../theme';

configure({ adapter: new Adapter() });

test('Navigation Link with active styles', () => {
  const app = (
    <Steersman history={createMemoryHistory()}>
      <ThemeProvider theme={theme}>
        <NavLink to="/" title="Home" />
      </ThemeProvider>
    </Steersman>
  );
  const component = renderer.create(app);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  const wrapper = render(<div>{app}</div>);
  expect(wrapper.find('li[class*="Link-activeRoot"]').length).toBe(1);
  expect(wrapper.find('a[class*="Link-activeLink"]').length).toBe(1);
});

test('Navigation Link with styles', () => {
  const app = (
    <Steersman
      history={createMemoryHistory({
        initialEntries: ['/about'],
        initialIndex: 0,
      })}
    >
      <ThemeProvider theme={theme}>
        <NavLink to="/" title="Home" />
      </ThemeProvider>
    </Steersman>
  );
  const component = renderer.create(app);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  const wrapper = render(<div>{app}</div>);
  expect(wrapper.find('li[class*="Link-activeRoot"]').length).toBe(0);
  expect(wrapper.find('a[class*="Link-activeLink"]').length).toBe(0);
});

