import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

function MenuMobile() {
  return (
    <Container>
      <div>
        <Link to="/">Main</Link>

        <Link to="/">Converted</Link>

        <Link to="/">About</Link>
      </div>
    </Container>
  );
}

export default MenuMobile;
