import { useState } from "react";

function MemoInsert(props) {
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  function handleClick() {
    if (text.trim() === "") {
      alert("메모를 입력하세요.");
      return;
    }

    props.onInsert(text);
    setText("");
  }

  return (
    <div className="insert-area">
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="메모를 입력하세요"
      />
      <button onClick={handleClick}>추가</button>
    </div>
  );
}

export default MemoInsert;