import styled from "styled-components";
export const Foot = styled.div`
  background: ${(props) => props.theme.colors.blue};
  width: 100%;
  padding-bottom: 1rem;
  height: 100%;

  .cont {
    display: flex;

    padding: 0 8px;
    @media (max-width: 770px) {
      width: 100%;
      flex-wrap: wrap;
    }

    .pika {
      margin: 0 auto;
      margin-bottom: 20px;

      img {
        filter: invert(1);
      }
    }

    .yee {
      color: white;
      margin: 0 auto;
      width: 20%;

      h6 {
        margin-bottom: 0.25rem;
        font-size: 1.1rem;

        @media (min-width: 770px) {
          i {
            display: none;
          }
        }
      }
      ul {
        margin-top: 0.12rem;
        padding-bottom: 8px;
        li {
          list-style-type: none;
          padding: 0.12rem 0;

          &:hover {
            color: white;
            text-decoration: underline;
            cursor: pointer;
          }
        }
        a {
          text-decoration: none;
          color: rgba(255, 255, 255, 0.6);
        }
      }
      @media (max-width: 770px) {
        flex-wrap: wrap;
        flex-direction: column;
        width: 100%;
        height: 100%;
        text-align: center;
      }
    }
    .yee input {
      display: none;
    }
    @media (max-width: 770px) {
      .hi {
        max-height: 1px;
        overflow: hidden;

        position: relative;
        top: -100%;

        transition: all 0.3s ease;
      }
      .yee input:checked ~ .hi {
        max-height: 300px;
        padding-bottom: 25px;

        opacity: 1;
        top: 0;
      }
    }
  }
  .footer-logo {
    margin-top: 2.5rem;
  }
  .logos {
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    @media (max-width: 770px) {
      flex-wrap: wrap;
      flex-direction: column;
      width: 100%;
      height: 100%;
      text-align: center;
      row-gap: 1rem;
    }

    .copy-right {
      color: white;
      font-size: 80%;
    }
  }
`;
