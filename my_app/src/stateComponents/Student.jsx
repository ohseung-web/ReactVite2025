// App.jsx
import { useState } from "react";
import "./Student.css";

// 학생 카드 컴포넌트
function StudentCard({ student, onScoreIncrease }) {
  return (
    <div className="card">
      <h2>{student.name}</h2>
      <p>점수: {student.score}점</p>

      {student.score >= 90 && <span className="badge">우수</span>}

      <button onClick={() => onScoreIncrease(student.id)}>+10점</button>
    </div>
  );
}

// 점수 관리 컴포넌트
export default function ScoreManager() {
  const [students, setStudents] = useState([
    { id: 1, name: "김철수", score: 85 },
    { id: 2, name: "이영희", score: 92 },
    { id: 3, name: "박민수", score: 78 },
  ]);

  // 점수 증가 함수
  const handleIncrease = (id) => {
    const newStudents = students.map((s) =>
      s.id === id ? { ...s, score: s.score + 10 } : s
    );
    setStudents(newStudents);
  };

  return (
    <div className="container">
      <h1>학생 점수 관리 시스템</h1>
      <div className="card-list">
        {students.map((stu) => (
          <StudentCard
            key={stu.id}
            student={stu}
            onScoreIncrease={handleIncrease}
          />
        ))}
      </div>
    </div>
  );
}
