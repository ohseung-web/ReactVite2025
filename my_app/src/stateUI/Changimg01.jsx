import { useState } from "react";

export default function  Changimg01(){
    // React에서 배포 빌드(JSX -> js 빌드)
    // vite => 빌드방식
    // public => images : images 폴더만 배포 됨
    // ./public/images/girl.png => X
    // 이미지 정상 경로 : /images/girl.png
  const[img, setImg] = useState('/images/girl.png')
  const[toggle, setToggle]=useState(false)
  
// 이미지를 토글 형식으로 변경하는 함수
const ChangHandler = () =>{
    toggle === false?
    setImg('/images/boy.png'):setImg('/images/girl.png')
    setToggle(!toggle)
}
  return(
    <>
       <div>
           <img src={img} alt="people" />
           <button type="button" onClick={ChangHandler}>이미지 변경</button>
       </div>
    </>
  )
}