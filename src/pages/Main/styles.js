import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.main`
  padding: 60px 90px;

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

    img {
      max-width: 420px;
    }
  }

  ${media.greaterThan('1600px')`
    padding: 120px 280px;

    section {

      > div {
        max-width: 700px;

        h1 {
          font-size: 42px;
        }

        p {
          margin-top: 28px;

          font-size: 18px;
        }
      }

      img {
        max-width: 490px;
      }
    }
  `}

  ${media.greaterThan('1900px')`
    section {

      > div {
        max-width: 830px;

        h1 {
          font-size: 50px;
        }

        p {
          margin-top: 34px;

          font-size: 22px;
        }
      }

      img {
        max-width: 594px;
      }
    }
  `}

  ${media.lessThan('large')`
    padding: 50px 78px;

    section {

      > div {
        max-width: 514px;

        h1 {
          font-size: 30px;
        }

        p {
          margin-top: 20px;

          font-size: 14px;
        }
      }

      img {
        max-width: 360px;
      }
    }
  `}

  ${media.lessThan('medium')`
    padding: 44px 68px;

    section {
      flex-direction: column;

      > div {
        margin-top: 2rem;
        max-width: 100%;

        p {
          margin-top: 20px;

          font-size: 16px;
          text-align: justify;
        }
      }

      img {
        margin-top: 2rem;

        max-width: 360px;
      }
    }
  `}

  ${media.lessThan('small')`
    padding: 1rem;

    section {
      position: relative;

      flex-direction: column-reverse;

      > div {
        top: 0;
        position: absolute;

        max-width: 100%;

        h1 {
          font-size: 20px;
          text-align: center;
        }

        p {
          margin-top: 20px;

          font-size: 16px;
          text-align: justify;
        }
      }

      img {
        max-width: 100%;
        margin-top: 2rem;

        opacity: 0.1;
      }
    }
  `}
`;
