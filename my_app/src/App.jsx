import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

// src -> assets -> 이미지 파일은 반드시 ipmort한다.
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import는 외부파일을 가져온다.
import './App.css'
// 이미지를 하나하나 import해서 개별로 가져올 수 있다.
// public 폴더의 이미지 파일은 import하지 않아도
// 사용 가능하다.
// import Child from './propsComponents/child';
// UserCard()함수 생성 하기
// UserCard()컴포넌트를 App()컴포넌트의 자식으로 사용할 예정
// App()컴포넌트의 name, age매개변수를 => props명령어를 이용해
// 컴포넌트와 컴포넌트 사이의 데이터 이동이 가능하다.
// 부모 -> 자식만 매개변수 보낼 수 있다.
// props는 부모의 모든 매개변수를 대변한다.
// {props.name}, {props.age}
// props로 매개변수를 보내지 않고 직접 매개변수 값을 지정
// {name, age}형식으로 작성한다.
// 부모 blogc.jsx를 import한다.
import UserApp from './UserApp';
import Home from './ContextAPI02/pages/Home';
import Profile from './ContextAPI02/Components/Profile';
import LoginForm from './ContextAPI02/Components/LoginForm';
import AuthProvider from './ContextAPI02/Contexts/AuthContext';
import Header from './ContextAPI02/Components/Header';
import WishlistProvider from './wishlist/WishlistContext';
import ProductList from './wishlist/ProductList';
import WishlistPage from './wishlist/WishlistPage';
import Exj01 from './JSON/ExJ01';

function UserCard({name,age}){
  return(
    <>
      {/* <div style={{border:'1px solid #ddd',
        padding:'15px',
        margin:'10px',
        borderRadius:'8px'
      }}>
       <h2>{name}</h2>
       <h2>{age}</h2>
      </div> */}
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
  // const name = '홍길동';
  // const isLoggin = 'sucess';
  // const fruits = ['사과','오렌지','바나나']
  // const user = { name: "김철수", age: 25, email: "kim@example.com" }; 
  // const clickHandler = () =>{
  //    console.log('버튼 클릭')
  // }

  // 객체배열
  // const products = [
  //     { id: 1, name: "노트북", price: 1200000 },
  //     { id: 2, name: "마우스", price: 30000 },
  //     { id: 3, name: "키보드", price: 80000 }
  //     ];
  // 내가만든 useProduct()커스텀 훅 호출
  //  const data = useRecipes();


  // ✅ showWishlist : 찜 목록 보이기 여부 (true/false)
  // ✅ setShowWishlist : 상태를 변경하는 함수
  // 기본값은 false → 처음에는 상품 목록이 보임
  // const [showWishlist, setShowWishlist] = useState(false);

  return (
    
    <>
     {/* 
         // ✅ WishlistProvider로 전체 앱을 감싼다.
         // 이 안의 모든 컴포넌트들은 WishlistContext의 전역 상태를 사용할 수 있음.
     */}
     
    {/* <WishlistProvider> */}
      {/* ------------------ 헤더 영역 ------------------ */}
      {/* <header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '20px',
          backgroundColor: '#eee',
        }} */}
      
        {/* 왼쪽 제목 */}
        {/* <h1>🧡 찜하기 예제</h1> */}

        {/* 오른쪽 버튼: 클릭 시 찜 목록 보기 ↔ 상품 보기 토글 */}
        {/* <button onClick={() => setShowWishlist(!showWishlist)}> */}
          {/* {showWishlist ? '상품 보기' : '찜 목록 보기'} */}
        {/* </button> */}
      {/* </header> */}

      {/* ------------------ 본문 영역 ------------------ */}
      {/* showWishlist가 true면 찜 목록 페이지(WishlistPage),
          false면 상품 목록(ProductList)를 보여줌 */}
      {/* {showWishlist ? <WishlistPage /> : <ProductList />} */}
    {/* </WishlistProvider> */}
    
     {/* // <></>는 프래그먼트로 리액트는 HTML 작성시
    // 반드시 부모태그가 하나만 존재해야 하므로
    // 비어있는 태그를 사용하도록 허용한 기술이다.
    // 리액트는 반드시 닫는 태그 존재해야 함 : <hr /> */}
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
        {/* <Fakestoreapi /> */}
        {/* <BrowserRouter> */}
        {/* 커스텀 훅이든 이미 존재하는 훅이든 JSX안으로 가져올 수 없다. */}
            {/* <Routes>
                <Route path='/' element={<RecipeList data={data} />} />
                <Route path='/detail/:id' element={<RecipeDetail data={data} />} />
            </Routes> */}
        {/* </BrowserRouter> */}
        {/* <UserApp /> */}
      {/* <AuthProvider>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
    </AuthProvider> */}
    <Exj01 />
    </>
  )
}

// export는 App컴포넌트를 밖으로 내보낸다.
export default App
