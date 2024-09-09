/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Header from './components/Header';
import Content from './components/content';
import InputBox from './components/InputBox';
import GlobalStyle from './components/GlobalStyle';

const wrapperStyle = css`
  width: 100vw;
  max-width: 430px;
  height: 100vh;
  background: linear-gradient(#f8ff2e, #ffffff 40%);
  border-left: 1px solid #1d1d1d;
  border-right: 1px solid #1d1d1d;
  position: relative;
`;

function App() {
  return (
    <div css={wrapperStyle}>
      <GlobalStyle />
      <Header />
      <Content />
      <InputBox />
    </div>
  );
}

export default App;
