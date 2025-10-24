import React, { useState } from "react";

export default function PromptExample() {
  const [name, setName] = useState("");

  const handleClick = () => {
    const userName = prompt("당신의 이름을 입력하세요:", "홍길동");
    if (userName) {
      setName(userName);
    } else {
      alert("이름 입력이 취소되었습니다.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>이름: {name ? name : "아직 입력 안 됨"}</h2>
      <button onClick={handleClick}>이름 입력하기</button>
    </div>
  );
}
