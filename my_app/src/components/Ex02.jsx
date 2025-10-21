// 컴포넌트 이름은 반드시 대문자로 시작한다.
function Ex02(){
   return(
     <>
       <div className="profile">
          <h2>자기소개</h2>
          <p>이름 : 홍길동</p>
          <p>나이 : 25세</p>
          <p>취미 : 독서, 운동</p>
       </div>
     </>
   )
}
// 반드시 Export default 명령어로 내보내기 한다.
// 내가 작성한 함수를
export default Ex02