// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import OriginalQueryRenderer from 'relay-query-lookup-renderer';

type QueryRendererProps = {
  children: any,
  environment: string,
  renderer: Function,
};

export default class QueryRenderer extends Component<*, QueryRendererProps, *> {
  static contextTypes = {
    defaultEnvironment: PropTypes.string,
    environmentRegistry: PropTypes.object,
  };

  render() {
    const { environmentRegistry, defaultEnvironment, lookupByDefault } = this.context;
    const { renderer, environment = null, ...rest } = this.props;
    const selectedEnvironment = environmentRegistry[environment || defaultEnvironment];

    return (
      <OriginalQueryRenderer
        lookup={lookupByDefault}
        {...rest}
        environment={selectedEnvironment}
        renderer={renderer}
      />
    );
  }
}
