// 부모 컴포넌트 생성 : Parent03
// 부모 const userName = '진달래'
//      const age = 25
function Parent03(){
   const userName = '진달래'
   const age = 25

    return(
        <>
          <Profile user={userName} ag={age} />
        </>
    )
}
export default Parent03
// 자식 컴포넌트 생성 : Profile
// <div> 
//   <h2>이름 : {}</h2>
//   <p>나이 : {}</p>
// </div
function Profile(props){
    return(
       <>
         <div>
            <h2>이름 : {props.user}</h2>
            <p>나이 : {props.ag}</p>
         </div>
       </>
    )
   
}