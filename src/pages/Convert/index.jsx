import React from 'react';

import { Nav, MenuMobile } from '../../components';

import { Container } from './styles';
import { isMobile } from 'react-device-detect';

export default function Convert() {
  return (
    <>
      {isMobile && <MenuMobile />}
      <Container>{!isMobile && <Nav />}</Container>
    </>
  );
}
