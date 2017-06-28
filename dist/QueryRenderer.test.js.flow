import React from 'react';
import { mount } from 'enzyme';

jest.mock('relay-query-lookup-renderer', () => ({ render }) => render());

import Context from './Context'; // eslint-disable-line
import QueryRenderer from './QueryRenderer'; // eslint-disable-line

describe('relay-context/QueryRenderer', () => {
  it('works', () => {
    const component = mount(
      <Context environmentRegistry={{ test: { value: 1 } }} defaultEnvironment="test">
        <QueryRenderer render={() => <span>1337</span>} />
      </Context>,
    );

    expect(component.html()).toBe('<div><span>1337</span></div>');
  });
});
