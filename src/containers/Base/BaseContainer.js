import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.element.isRequired
};

const BaseContainer = ({ children }) => (
  <div>
    {children}
  </div>
);


BaseContainer.propTypes = propTypes;

export default BaseContainer;
