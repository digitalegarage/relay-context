// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';

type ContextProps = {
  children: any,
  environmentRegistry: { [key: string]: Object },
  lookupByDefault: boolean,
  defaultEnvironment: string,
};

class Context extends Component<*, ContextProps, *> {
  static childContextTypes = {
    environmentRegistry: PropTypes.object,
    defaultEnvironment: PropTypes.string,
    lookupByDefault: PropTypes.bool,
  };

  getChildContext() {
    const { environmentRegistry, defaultEnvironment, lookupByDefault = false } = this.props;

    return {
      environmentRegistry,
      defaultEnvironment,
      lookupByDefault,
    };
  }

  render() {
    const { children } = this.props;

    return <div>{children}</div>;
  }
}

export default Context;
