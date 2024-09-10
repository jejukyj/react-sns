import { Global, css } from '@emotion/react';

const GlobalStyle = () => (
  <Global
    styles={css`
      @font-face {
        font-family: 'Pretendard-Thin';
        src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Thin.woff')
          format('woff');
        font-weight: 100;
        font-style: normal;
      }
      @font-face {
        font-family: 'Pretendard-ExtraLight';
        src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-ExtraLight.woff')
          format('woff');
        font-weight: 200;
        font-style: normal;
      }
      @font-face {
        font-family: 'Pretendard-Light';
        src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Light.woff')
          format('woff');
        font-weight: 300;
        font-style: normal;
      }
      @font-face {
        font-family: 'Pretendard-Regular';
        src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff')
          format('woff');
        font-weight: 400;
        font-style: normal;
      }
      @font-face {
        font-family: 'Pretendard-Medium';
        src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Medium.woff')
          format('woff');
        font-weight: 500;
        font-style: normal;
      }
      @font-face {
        font-family: 'Pretendard-SemiBold';
        src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-SemiBold.woff')
          format('woff');
        font-weight: 600;
        font-style: normal;
      }
      @font-face {
        font-family: 'Pretendard-Bold';
        src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Bold.woff')
          format('woff');
        font-weight: 700;
        font-style: normal;
      }
      @font-face {
        font-family: 'Pretendard-ExtraBold';
        src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-ExtraBold.woff')
          format('woff');
        font-weight: 800;
        font-style: normal;
      }
      @font-face {
        font-family: 'Pretendard-Black';
        src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Black.woff')
          format('woff');
        font-weight: 900;
        font-style: normal;
      }

      body {
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
      }
    `}
  />
);
export default GlobalStyle;
