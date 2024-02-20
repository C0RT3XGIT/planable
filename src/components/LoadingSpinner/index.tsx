import styled from 'styled-components';
import Loader from '../../assets/loader.gif';

export const LoadingSpinner = styled.img.attrs({
  src: Loader,
  alt: 'Loading...',
})`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
