import React, { useState } from 'react';
import './MovieReview.css';

export default function MovieReview() {
  const [reviews, setReviews] = useState([
    { id:0,title: '인셉션', comment: '꿈속의 꿈! 최고였어요.', likes: 0 },
    { id:1,title: '인터스텔라', comment: '음악이 너무 웅장해요.', likes: 0 },
  ]);
  const [title, setTitle] = useState('');
  const [comment, setComment] = useState('');

  // 리뷰 추가
  const addReview = () => {
    if (title.trim() === '' || comment.trim() === '') {
    return alert('영화 제목과 코멘트를 모두 입력하세요!');
  }
   // ==============================
  // 얕은 복사 : 기존 배열을 복사
  // ==============================
  let reviewCopy = [...reviews];

  // ==============================
  // 새 리뷰 객체 생성
  // ==============================
  let newReview = {
    id:reviews.length,
    title: title,
    comment: comment,
    likes: 0,
  };

  // ==============================
  // 위로 추가 (unshift 사용)
  // ==============================
  reviewCopy.unshift(newReview);

  // ==============================
  // state 변경 (렌더링 트리거)
  // ==============================
  setReviews(reviewCopy);

  // ==============================
  // 입력창 초기화
  // ==============================
  setTitle('');
  setComment('');
};
 

  // 리뷰 삭제
  const deleteReview = (index) => {
    const copy = [...reviews];
    copy.splice(index, 1);
    setReviews(copy);
  };

  // 좋아요 증가
  const addLike = (index) => {
    const copy = [...reviews];
    copy[index].likes += 1;
    setReviews(copy);
  };

  return (
    <div className="movieApp">
      <h2>🎬 나의 영화 리뷰</h2>
      <div className="inputArea">
        <input
          type="text"
          placeholder="영화 제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="한줄평"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button onClick={addReview}>등록</button>
      </div>

      {reviews.map((r, i) => (
        <div key={i} className="reviewCard">
          <h3>{r.title}</h3>
          <p>{r.comment}</p>
          <p>
            <span onClick={() => addLike(i)}>👍</span> {r.likes}
          </p>
          <button onClick={() => deleteReview(i)}>삭제</button>
        </div>
      ))}
    </div>
  );
}
