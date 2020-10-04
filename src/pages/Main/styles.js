import styled from 'styled-components';

export const Container = styled.main`
  padding: 60px 90px;
  overflow: hidden;

  section {
    display: flex;
    align-items: center;
    justify-content: space-between;

    > div {
      max-width: 600px;

      h1 {
        font-size: 36px;
        font-weight: 900;
        text-transform: uppercase;
      }

      p {
        margin-top: 24px;

        font-size: 16px;
      }
    }
  }
`;
