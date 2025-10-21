export default function Alert({type,msg}){
  
  // type에따른 색이 변경되도록 하는 함수를 작성
  const colorChange = type==='error'?'red':type==='sucess'?'green':'blue'
  
  return(
      <>
         <div style={{backgroundColor:colorChange,
          color:'#fff',
          padding:'16px',
          borderRadius:'5px',
          marginBottom:'16px'
         }}>
            {msg}
         </div>
      </>
   )
}