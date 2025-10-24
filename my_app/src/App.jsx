import { useState } from 'react'
// src -> assets -> 이미지 파일은 반드시 ipmort한다.
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import는 외부파일을 가져온다.
import './App.css'
// 이미지를 하나하나 import해서 개별로 가져올 수 있다.
// public 폴더의 이미지 파일은 import하지 않아도
// 사용 가능하다.
import img01 from '../public/images/image01.png';
import Ex07 from './components/Ex07';
// import Child from './propsComponents/child';
import Parent from './propsComponents/parent';
import Parent02 from './propsComponents/wecome';
import Parent03 from './propsComponents/profile';
import Parent04 from './propsComponents/prEx';
// UserCard()함수 생성 하기
// UserCard()컴포넌트를 App()컴포넌트의 자식으로 사용할 예정
// App()컴포넌트의 name, age매개변수를 => props명령어를 이용해
// 컴포넌트와 컴포넌트 사이의 데이터 이동이 가능하다.
// 부모 -> 자식만 매개변수 보낼 수 있다.
// props는 부모의 모든 매개변수를 대변한다.
// {props.name}, {props.age}
// props로 매개변수를 보내지 않고 직접 매개변수 값을 지정
// {name, age}형식으로 작성한다.

import Welcome from './propsComponents/props01';
import Counter01 from './propsComponents/stateCount';
import Counter02 from './propsComponents/stateCount02';
import Alert from './propsComponents/props06';
import Exstate12 from './stateComponents/Ex12';
import Test from './stateComponents/test';
import Exstate18 from './stateComponents/Ex018';
import Blog from './stateComponents/blog';
import MovieReview from './stateComponents/MovieReview-seung';
import ScoreManager from './stateComponents/Student';
import TodoApp from './stateComponents/TodoApp';
import Modalchange from './stateUI/uitest01';
import LoginView from './stateUI/uitest02';
import PromptChange from './stateUI/uitest03';
import AuthApp from './stateUI/member/AuthApp';
import MovieApp from './stateUI/movie/MovieApp';
import ShopApp from './stateUI/shop/ShopApp';
function UserCard({name,age}){
  return(
    <>
      <div style={{border:'1px solid #ddd',
        padding:'15px',
        margin:'10px',
        borderRadius:'8px'
      }}>
       <h2>{name}</h2>
       <h2>{age}</h2>
      </div>
    </>
  )
}

// function App(){} 
// => react에서 App()는 컴포넌트라 부른다.
function App() { 
  // 리액트는 반드시 return() 안에서 
  // 실행할 HTML 문서를 작성한다.
  // true, false 논리값이지 문자가 아님
  // true === 1, false === 0
  const name = '홍길동';
  const isLoggin = 'sucess';
  const fruits = ['사과','오렌지','바나나']
  const user = { name: "김철수", age: 25, email: "kim@example.com" }; 
  const clickHandler = () =>{
     console.log('버튼 클릭')
  }

  // 객체배열
  const products = [
      { id: 1, name: "노트북", price: 1200000 },
      { id: 2, name: "마우스", price: 30000 },
      { id: 3, name: "키보드", price: 80000 }
      ];

  return (
    // <></>는 프래그먼트로 리액트는 HTML 작성시
    // 반드시 부모태그가 하나만 존재해야 하므로
    // 비어있는 태그를 사용하도록 허용한 기술이다.
    // 리액트는 반드시 닫는 태그 존재해야 함 : <hr />
    <>
     {/* 문제 : name:'홍길동'정의 후 <h1>태그에 출력하기 */}
        {/* <div style={{backgroundColor:'lightblue',padding:'20px',borderRadius:'10px'}}> */}
          {/* javaScript의 class를 React는 className로 사용 */}
          {/* react에서 변수의 값을 사용하려면 반드시 {변수이름 입력} */}
          {/* <h1>{isLoggin==='sucess'?'환영':'로그인 하세요'}</h1> */}
          {/* <img src={reactLogo} alt="샘플 랜덤 이미지" /> */}
          {/* <ul> */}
             {/* map()함수 이용
             {/* {fruits.map((item,index)=>())} : 형식으로 사용*/}
             {/* {fruits.map((item,index)=>(
                <li key={index}>{item}</li>
             ))} */}
          {/* </ul>  */}
          {/* <p>{user.name}</p>
          <p>{user.age}</p>
          <p>{user.email}</p> */}
          {/* <p>스타일 적용된 박스</p> */}
          {/* <button type='button' onClick={clickHandler}>클릭</button> */}
        {/* </div> */}
        {/* UserCard안의 name과 age일명 매개변수이다. */}
        {/* <UserCard name='홍길동' age={20} />
        <UserCard name='개나리' age={15} />
        <UserCard name='진달래' age={30} /> */}
        {/* {products.map((item,index) => (
           <div key={item.id} style={{backgroundColor:'lightblue',
           padding:'20px',
           borderRadius:'10px'}}>
           <p>{item.name}</p> 
           <p>{item.price.toLocaleString()}</p> 
           </div>
        ))} */}
        {/* <Welcome name='개나리' /> */}
        {/* <Alert type='error' msg='오류' />
        <Alert type='sucess' msg='성공' />
        <Alert type='info' msg='정보' />
        <Alert type='warring' msg='경고' /> */}
        <ShopApp />
    </>
  )
}

// export는 App컴포넌트를 밖으로 내보낸다.
export default App
