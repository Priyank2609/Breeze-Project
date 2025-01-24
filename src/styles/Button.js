import styled from 'styled-components';

export const Buttons = styled.button`
      font-size: 1rem;
      line-height: 1.75rem;
      font-weight: 500;
      height: 50px;
      width: 130px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 6%;
      background: ${(props) => props.theme.colors.black};
      color: ${(props) => props.theme.colors.white};
      &:hover {
        background-color: rgb(0,0,0, 0.9);
        cursor: pointer;
      }
    `;



export const Div = styled.div`
  .flex {
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
    justify-content: center;
    @media (max-width: 770px) {
      left: 0%;
      position: relative;
    }
  }
  .div:hover .hey {
    opacity: 1;
    background-color: rgba(255, 255, 255, 0.671);
    @keyframes colors {
      from {
        opacity: 0;
        transform: translateY(50px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    animation: colors 0.2s linear;
  }

  .hey {
    position: absolute;
    cursor: pointer;
    opacity: 0;
    display: flex;
    justify-content: center;
    width: 320px;
    height: 5rem;
    bottom: 0%;
    padding: 20px 0;
    z-index: 1;

    @media (min-width: 250px) {
      width: 180px;
    }
    @media (min-width: 850px) {
      width: 250px;
    }
    @media (min-width: 1200px) {
      width: 310px;
    }
  }
  .div {
    @media (min-width: 250px) {
      width: 180px;
      height: auto;
    }
    @media (min-width: 850px) {
      width: 250px;
      height: auto;
    }
    @media (min-width: 1200px) {
      width: 310px;
      height: auto;
    }

    .sizes {
      position: absolute;
      color: #000000;
    }
    .siz {
      display: flex;
      justify-content: center;
      gap: 1rem;
    }
    .cols {
      margin-top: 2rem;
    }

    .color {
      display: flex;
      justify-content: center;
      gap: 1rem;
      li {
        list-style-type: none;
      }
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      mix-blend-mode: multiply;
    }
  }
  .productimage {
    position: relative;

    overflow: hidden;
    background-color: #faf7f7;
  }

  .productcard {
    column-gap: 20px;
    background-color: #faf7f7;
  }
  .productcard:hover .btn {
    display: block;
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.9);
    @keyframes appear {
      from {
        opacity: 0;
        transform: translateY(50px);
      }
      to {
        opacity: 1;
        transform: translateY(0px);
      }
    }
    animation: appear 0.1s linear;
  }
  .productcard:hover .like {
    display: block;
    cursor: pointer;
    background-color: rgba(255, 255, 255);
  }
  .productcard:hover .weight {
    display: block;
    cursor: pointer;
    background-color: rgba(255, 255, 255);
  }
  .productinfo {
    padding-top: 10px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 4px;

    h2:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    mix-blend-mode: multiply;
  }
  .btn {
    position: absolute;
    bottom: 40%;
    left: 25%;

    padding: 10px;
    width: 50%;
    text-transform: uppercase;
    border: none;
    outline: none;
    background-color: white;
    border-radius: 5px;

    cursor: pointer;
    display: none;
    font-weight: 700;
  }
  .like {
    position: absolute;
    transform: translateX(-50%);
    border: none;
    outline: none;
    transition: 0.5s;
    cursor: pointer;
    display: none;
    right: 2%;
    top: 5%;
    font-size: 1.4rem;
    color: gray;
    &:hover {
      color: black;
    }
  }
  .weight {
    position: absolute;
    transform: translateX(-50%);
    border: none;
    outline: none;
    transition: 0.5s;
    cursor: pointer;
    display: none;
    right: 1%;
    top: 15%;
    font-size: 1.25rem;
    color: gray;
    &:hover {
      color: black;
    }
  }

  h2 {
    text-transform: capitalize;
    font-size: 1.1rem;
    font-weight: 500;
    color: black;
  }
  a {
    text-decoration: none;
  }

  span {
    font-weight: 400;
    color: #383e48;
  }
`;


export const ShopBtn = styled.button`
  width: 125px;
  height: 45px;
  margin-top: 20px;
  text-align: center;
  background-color: transparent;
  border: 2px solid white;
  border-color: white;
  color: white;
  font-size: 1rem;
  opacity: 0.9;
  &:hover {
    background-color: rgb(255, 255, 255, 0.1);

    cursor: pointer;
  }
`;