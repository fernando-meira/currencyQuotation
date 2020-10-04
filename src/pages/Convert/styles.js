import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.main`
  padding: 60px 90px;

  ${media.greaterThan('1600px')`
    padding: 120px 280px;
  `}

  ${media.lessThan('large')`
    padding: 50px 78px;

  `}

  ${media.lessThan('medium')`
    padding: 44px 68px;

  `}

  ${media.lessThan('small')`
    padding: 1rem;

  `}
`;
