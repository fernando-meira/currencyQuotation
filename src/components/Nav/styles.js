import styled from 'styled-components';

import colors from '../../themes/colors';

export const Container = styled.nav`
  display: grid;
  grid-template-columns: 2fr 1fr;

  a {
    text-decoration: none;
    color: ${colors.white};

    + a {
      margin-left: 72px;
    }
  }
`;
