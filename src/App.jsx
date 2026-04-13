// function App() {
//   return (
//     <div>
//       <h1>Hello World</h1>
//       <p>리액트 처음?</p>
//     </div>
//   );
// }



/* function App() {
  const name = "React";
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>Welcome to learning React.</p>
    </div>
  );
}

export default App; 

import MyComponent from "./Mycomponent";

function App() {
  const school = "서경대학교";
  const club = "멋쟁이사자처럼";
  return (
    <div>
      <h1>부모 컴포넌트</h1>
        <MyComponent name={school} age={club} />
    </div>
  );
}

export default App;

import Profile from "./Profile";

function App() {
  return (
    <>
    <Profile
    name="김현수"
    gender="여성"
    department="소프트웨어학과"
    viewCount={1000}
    />
    </>
  );
}


import Button from "./button";


function App() {
  return (
    <div>
      <Button text="로그인" />
    </div>
  );
}

export default App;

import styled from "styled-components";

const Button = styled.button`
width: 450px;
padding: 16px;
background-color: #C6E400;
border: 1px solid black;
fint-size: 18px;
font-weight: bold;
border-radius: 0px;
cursor: pointer;
`;

function App() {
  return (
    <Button>로그인</Button>
  );
}

export default App;

import styled from "styled-components";

const Button = styled.button`
    width: 450px;
    padding: 16px;
    background-color: ${(props) => (props.background)};;
    border: 1px solid black;
    font-size: 18px;
    font-weight: bold;
    border-radius: 0px;
    cursor: pointer;
`;

const ButtonDiv = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
`;

function App() {
    return (
        <ButtonDiv>
            <Button background="#C6E400">로그인</Button>
            <Button background="#FF6B6B">로그아웃</Button>
        </ButtonDiv>
    );
}

export default App; 

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: #f8f8f8;
`;

const Card = styled.div`
  background: ${(props) => props.background || "white"};
  color: ${(props) => props.textColor || "black"};
  padding: 20px;
  border-radius: 10px;
  width: 450px;
  text-align: center;
`;

const Button = styled.button`
  width: 120px;
  height: 45px;
  background-color: ${(props) => props.background || "gray"};
  color: ${(props) => props.color || "white"};
  padding: 10px;
  border-radius: 5px;
  border: none;
  font-size: 14px;
  cursor: pointer;
  margin-top: 10px; 
`; */

// function App() {
//   return (
//     <Container>
//       {/* 강조 스타일 카드 */}
//       <Card background="lightgreen" textColor="white">
//         <h2>강조 카드</h2>
//         <p>강조 스타일이 적용된 카드입니다.</p>
//         <Button background="green">강조 버튼</Button>
//       </Card>

//       {/* 기본 카드 */}
//       <Card>
//         <h2>기본 카드</h2>
//         <p>기본 스타일이 적용된 카드입니다.</p>
//         <Button>기본 버튼</Button>
//       </Card>
//     </Container>
//   );
// }

// export default App; 


// import { useState } from "react";

// function App() {
//   const [time, setTime] = useState(1);

//   function handleClick() {
//     setTime(time + 1);
//   }

//   return (
//     <>
//     <span>현재 시간: {time}시</span>
//     <button onClick={handleClick}>시간 증가</button>
//     </>
//   );
// }

// export default App;

// import { useState } from "react";

// function App() {
//   const [text, setText] = useState("");

//   function handleChange(e) {
//     setText(e.target.value);
//   }

//   function handleClick() {
//     alert(text);
//   }

//   return (
//     <div>
//       <input type="text" onChange={handleChange} />
//       <button onClick={handleClick}>확인</button>
//     </div>
//   );
// }

// export default App;

import { useState } from "react";
import styled from "styled-components";
import MemoInsert from "./MemoInsert.jsx";
import MemoList from "./MemoList.jsx";

const AppWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eaf7ff;
  font-family: Arial, sans-serif;

  .memo-box {
    width: 420px;
    background-color: #f7fcff;
    border: 2px solid #b9e3f7;
    border-radius: 15px;
    padding: 30px;
    box-sizing: border-box;
  }

  h1 {
    text-align: center;
    color: #4da6d9;
    margin-top: 0;
    margin-bottom: 20px;
  }

  .insert-area {
    display: flex;
    gap: 10px;
    margin-bottom: 15px;
  }

  .insert-area input {
    flex: 1;
    padding: 10px;
    border: 1px solid #9fd3ef;
    border-radius: 8px;
    outline: none;
  }

  .insert-area button {
    padding: 10px 14px;
    border: none;
    background-color: #87ceeb;
    color: white;
    border-radius: 8px;
    cursor: pointer;
  }

  .memo-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    border: 1px solid #cbeaf8;
    border-radius: 8px;
    padding: 12px;
    margin-bottom: 10px;
  }

  .memo-item span {
    color: #333;
  }

  .memo-item button {
    border: none;
    background-color: #ff9e9e;
    color: white;
    padding: 8px 10px;
    border-radius: 8px;
    cursor: pointer;
  }
`;

function App() {
  const [memos, setMemos] = useState([]);
  const [nextId, setNextId] = useState(1);

  function handleInsert(text) {
    const newMemo = {
      id: nextId,
      text: text,
    };

    setMemos([newMemo, ...memos]);
    setNextId(nextId + 1);
  }

  function handleRemove(id) {
    const newMemos = memos.filter(function (memo) {
      return memo.id !== id;
    });

    setMemos(newMemos);
  }

  return (
    <AppWrapper>
      <div className="memo-box">
        <h1>MemoList</h1>
        <MemoInsert onInsert={handleInsert} />
        <MemoList memos={memos} onRemove={handleRemove} />
      </div>
    </AppWrapper>
  );
}

export default App;
