import styled from 'styled-components';

import colors from '../../themes/colors';

export const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    text-decoration: none;
    color: ${colors.white};

    + a {
      margin-left: 72px;
    }
  }
`;
