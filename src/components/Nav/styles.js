import styled from 'styled-components';
import media from 'styled-media-query';

import colors from '../../themes/colors';

export const Container = styled.nav`
  padding: 16px 24px;
  border-radius: 16px;
  border: 1px solid ${colors.white};

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: rgba(0, 0, 0, 0.1);

  > div {
    width: 420px;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  a {
    text-decoration: none;
    color: ${colors.white};
  }

  ${media.lessThan('large')`

    > div {
      width: 360px;
    }
  `}

  ${media.lessThan('medium')`

    > div {
      width: 260px;
    }
  `}
`;
