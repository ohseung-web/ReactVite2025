import { useState } from "react";

export default function  Changimg04(){

  // category :1, category:2 => category별 이미지를 탭메뉴 출력
  // 조건에 만족하는 값을 하나가 아니라 여러개 배열로 추출하는 함수 
  //  => 배열이름.filter((요소,인덱스,원본배열) => {return 조건})
  // 조건에 만족하는 새로운 배열을 반환한다.
  // 조건에 만족하지 않으면 빈 배열 [ ]반환한다.
  // imgs.filter((img) => 조건 입력) => 조건에 만족 [{id:1},{id:2},{id:3},{id:4}]
const imgs = [
        { id: 1, name: 'pic-1.jpg', category: 1 },
        { id: 2, name: 'pic-2.jpg', category: 1 },
        { id: 3, name: 'pic-3.jpg', category: 1 },
        { id: 4, name: 'pic-4.jpg', category: 1 },
        { id: 5, name: 'tree-1.jpg', category: 2 },
        { id: 6, name: 'tree-2.jpg', category: 2 },
        { id: 7, name: 'tree-3.jpg', category: 2 },
        { id: 8, name: 'tree-4.jpg', category: 2 },
    ];
    // 선택한 category의 값이 담기는 변수
    // 초기값을 selectCate = 1로 줌 
    // 고로, category=1번의 배경이미지가 출력되도록 의도
    const[selectCate, setSelectCate]= useState(1);
    // 배열이름.filter()
    const filterImg = imgs.filter((img) => img.category === selectCate)
    console.log("요기까지")
    console.log(filterImg)
  return(
    <>
       <div>
           <h3>이미지 탭 전환 예제</h3>
           <button type="button" onClick={()=>setSelectCate(1)}>배경</button>
           <button type="button" onClick={() => setSelectCate(2)}>나무</button>
           <div className="img-area">
             {/* map()이 필요 => 배열로 => filter()는 배열로 담김 */}
             {/* filter()로 추출한 결과를 map()으로 UI 출력 */}
             {filterImg.map((img) => (
                 <img key={img.id} src={`/images/${img.name}`} alt={img.name} />
             ))}
           </div>
       </div>
    </>
  )
}