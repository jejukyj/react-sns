/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Header from './components/Header';
import Content from './components/Content';
import InputBox from './components/InputBox';
import GlobalStyle from './components/GlobalStyle';
import { useState } from 'react';
import messageData from './db/data.json';

// 메시지 타입
interface messageType {
  id: number;
  userId: number;
  text: string;
  time: string;
}

function App() {
  const [messages, setMessages] = useState<messageType[]>(messageData.message);

  function addMessage(text: string): void {
    const newMessage = {
      id: messages.length + 1,
      userId: 1,
      text: text,
      time: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
    }; // '오전 12:00' 포맷으로 출력

    setMessages((prevMessages) => [...prevMessages, newMessage]); // 기존 메시지에 새로운 메시지 추가
  }

  return (
    <>
      <GlobalStyle />
      <div css={wrapperStyle}>
        <Header />
        <Content messages={messages} />
        <InputBox addMessage={addMessage} />
      </div>
    </>
  );
}

export default App;

// emotion/css

const wrapperStyle = css`
  width: 100%;
  max-width: 430px;
  background: linear-gradient(#f8ff2e, #ffffff 40%);
  border: 1px solid #1d1d1d;
  overflow: hidden;
`;
