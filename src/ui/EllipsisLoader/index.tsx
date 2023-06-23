import styled, { keyframes } from 'styled-components';

interface IEllipsisSpinnerProps {
  size?: number;
  sizeUnit?: string;
}

const motion1 = () => keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`;

const motion2 = () => keyframes`
   0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(19px, 0);
  }
`;
const motion3 = () => keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`;

const UiEllipsisSpinner = styled.div<IEllipsisSpinnerProps>`
  display: inline-block;
  position: relative;
  width: ${({ size = 4, sizeUnit = 'rem' }) => `${size}${sizeUnit}`};
  height: ${({ size = 2, sizeUnit = 'rem' }) => `${size}${sizeUnit}`};

  span {
    position: absolute;
    top: 50%;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: var(--bg-jordy-blue);
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
    transform: translateY(-50%);
  }

  span:nth-child(1) {
    left: 6px;
    animation: ${() => motion1()} 0.6s infinite;
  }
  span:nth-child(2) {
    left: 6px;
    animation: ${() => motion2()} 0.6s infinite;
  }
  span:nth-child(3) {
    left: 28px;
    animation: ${() => motion2()} 0.6s infinite;
  }
  span:nth-child(4) {
    left: 49px;
    animation: ${() => motion3()} 0.6s infinite;
  }
`;

const EllipsisLoader = ({ size, sizeUnit }: IEllipsisSpinnerProps) => (
  <UiEllipsisSpinner size={size} sizeUnit={sizeUnit}>
    <span />
    <span />
    <span />
    <span />
  </UiEllipsisSpinner>
);

export default EllipsisLoader;
