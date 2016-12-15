import React from 'react';
import './base.scss';

const Header = (({ children }) =>
  <div>
    {children}
  </div>
);

Header.propTypes = {
  children: React.PropTypes.node,
};

export default Header;
