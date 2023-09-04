import styled from 'styled-components';

export const SpinnerStyled = styled.div`
  width: 5em;
  height: 5em;
  border-radius: 100%;
  margin: 100px auto;
  border: 1.1em solid hsl(200, 20%, 95%);
  border-left-color: #fff;
  -webkit-animation: load 1.1s infinite linear;
  animation: load 1.1s infinite linear;

  @-webkit-keyframes load {
    0% {
      -ms-transform: rotate(7deg);
      -webkit-transform: rotate(7deg);
      transform: rotate(7deg);
    }

    100% {
      -ms-transform: rotate(360deg);
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes load {
    0% {
      -ms-transform: rotate(7deg);
      -webkit-transform: rotate(7deg);
      transform: rotate(7deg);
    }

    100% {
      -ms-transform: rotate(360deg);
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;
