import React from 'react';
// react enables the components to function properly so we can test them
import { render, cleanup } from '@testing-library/react';
// retrieve functions from the React Testing Library
import '@testing-library/jest-dom/extend-expect';
// jest-dom offers access to custom matchers that are used to test DOM elements
import About from '..';
// import component you will be testing

afterEach(cleanup);
// ensure you don't have any leftover memory data after each test
describe('About component', () => {
  // renders About test - declare the component we're testing
  // First Test
  it('renders', () => {
    render(<About />);
  });

  // Second Test
  it('matches snapshot DOM node structure', () => {
    // render About
    const { asFragment } = render(<About />);
    // returns a snapshot of the About component
    expect(asFragment()).toMatchSnapshot();
    // except function w/a matcher to assert something about a value - toMatchSnapshot matcher to assert that snapshot will match
  });
})
