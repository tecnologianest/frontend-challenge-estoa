import styled from 'styled-components'

export const Loading = styled.svg`
  display: block;
  width: 32px;
  aspect-ratio: 1;
  transform-origin: center;
  animation: rotate4 2s linear infinite;
  margin: 0 auto;

  circle {
    fill: none;
    stroke: tomato;
    stroke-width: 4px;
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash4 1.5s ease-in-out infinite;
  }

  @keyframes rotate4 {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash4 {
    0% {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 200;
      stroke-dashoffset: -35px;
    }

    100% {
      stroke-dashoffset: -125px;
    }
  }
`
