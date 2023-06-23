import styled from 'styled-components';

const Auth = styled.div`
  height: 100%;
  background: var(--dark-3)
    linear-gradient(
      154deg,
      var(--bg-brand) calc(var(--gradient-height) * 0.33),
      transparent calc(var(--gradient-height) * 0.88)
    );
`;

const AuthContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 400px;
  height: 100%;
  max-height: 100px;
  align-self: center;
  justify-self: center;
  padding-bottom: 100px;

  #yaPersonalButton {
    width: 100%;
    height: 100%;
  }
`;

export const UiAuthPage = Object.assign(Auth, {
  Container: AuthContainer,
});
