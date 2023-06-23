import { PropsWithChildren } from 'react';
import { Grommet, ThemeType, grommet } from 'grommet';
import { deepMerge } from 'grommet/utils';
import styled from 'styled-components';
import GlobalStyle from 'style';

const theme = deepMerge(grommet, {
  font: {
    family: 'Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
  },
  error: {},
  formField: {
    label: {
      margin: {
        horizontal: 'none',
        top: 'none',
        bottom: 'small',
      },
      weight: 'bold',
    },
    content: {
      pad: {
        left: 'none',
      },
    },
    error: {
      margin: {
        left: 'none',
      },
    },
  },
}) as ThemeType;

const GrommetProvider = styled(Grommet)`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
`;

const UiProvider = ({ children }: PropsWithChildren) => {
  return (
    <GrommetProvider theme={theme} cssVars>
      <GlobalStyle />

      {children}
    </GrommetProvider>
  );
};

export default UiProvider;
