import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../themes/assets/images/logo.png';

import { Container } from './styles';

function Nav() {
  return (
    <Container>
      <img src={logo} alt="logo" />

      <div>
        <Link to="/">Main</Link>

        <Link to="/convert">Converted</Link>

        <Link to="/">About</Link>
      </div>
    </Container>
  );
}

export default Nav;
