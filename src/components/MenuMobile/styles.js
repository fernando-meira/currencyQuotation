import styled from 'styled-components';
import { slide as Menu } from 'react-burger-menu';

import colors from '../../themes/colors';

export const Container = styled(Menu)`
  .bm-menu {
    width: 300px !important;
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
    background: ${colors.primaryColor};
  }

  .bm-item-list {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: flex-start;

    .bm-item {
      flex-direction: column;
      align-items: flex-start;
      display: flex !important;

      > a {
        font-weight: 900;
        text-decoration: none;
        color: ${colors.white};

        + a {
          margin-top: 24px;
        }
      }
    }
  }
`;
