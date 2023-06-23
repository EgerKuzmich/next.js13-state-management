import { Skeleton as OriginSkeleton, SkeletonProps } from 'grommet';
import styled from 'styled-components';
import { TPropsWithClassName } from 'utils/type';

const UiSkeletonBlock = styled(OriginSkeleton)<SkeletonProps>`
  position: relative;

  :after {
    content: '';
    position: absolute;
    top: 0;
    display: inline-block;
    width: 100%;
    height: 100%;
    border-radius: 6px;
    animation: placeHolderShimmer 1.5s infinite linear forwards;
    background: linear-gradient(to right, #adadad 8%, #777777 23%, #adadad 39%);
    background-size: 800px 104px;
  }

  @keyframes placeHolderShimmer {
    0% {
      background-position: -110% 0;
    }
    100% {
      background-position: 110% 0;
    }
  }
`;

const Skeleton = (props: TPropsWithClassName<SkeletonProps>) => {
  return <UiSkeletonBlock {...props} />;
};

export default Skeleton;
