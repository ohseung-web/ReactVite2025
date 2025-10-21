// 함수이름은 반드시 대문자로 작성한다.
function Test12(){
    // 문제 : score의 값에 따라 다른 색상을 표시하시오
    // score가 80이상이면 파란색,
    // score가 60이상이면 초록색, 
    // 그 이외는 빨간색으로 출력되도록 작성
    // 단, 삼항연산자 이용
    const score = 90;
    const col = document.querySelector('.colorS');
    // 색변경을 함수로 작성
    const getColor = (score) =>{
        if(score>=80){
            col.style.color = 'blue'
        }else if(score>=60){
            col.style.color='green'
        }else{
            col.style.color ='red'
        }
    }
    //함수 안에는 반드시 return()안에 작성
    return(
        // <></>빈태그 프래그먼트 이용해 작성
        <>
          <p className="colorS" style={{color:score>=80?'blue':score>=60?'green':'red'}}>점수:{score}</p>
          {/* <p className="colorS" style={{color:if(score>=80) return 'blue':score>=60?'green':'red'}}>점수:{score}</p> */}
          {/* <p className="colorS" style={{color:getColor(score)}}>점수:{score}</p> */}
        </>
    )
}
// Test12함수를 내보내기 한다.
export default Test12;