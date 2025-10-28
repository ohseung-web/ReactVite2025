// 자식은 UI
// posts={posts} 
           // likes={likes} 
           // setModalOpen={setModalOpen} 
           // setSelectedIndex={setSelectedIndex}
           // delPost={delPost}
           // addLikes={addLikes}
export default function PostList(props){
    return(
        <>  
        <div className='blog'>
            {/* 블로그제목, 블로그 좋아요 */}
             {props.posts.map((post,index)=>(
              // 글목록 부분
                <div className='list' key={index}>
                    <h4 onClick={()=>{props.setModalOpen(true); props.setSelectedIndex(index);}}>
                        {post}
                        <span style={{cursor:'pointer'}} 
                        onClick={(e)=>{
                            // 버블링 : 자식을 선택해도 부모요소인
                            // <h4>태그가 실행됨
                            // 버블링을 해결하는 메소드 : e.stopPropagation()
                        e.stopPropagation();
                        props.addLikes(index);}
                        }>
                        👍{props.likes[index]}
                        </span>
                    </h4>
                    <p>11월 1일 발생</p>
                    <button type='button' onClick={()=>props.delPost(index)}>삭제</button>
                </div>
            ))}
          </div>
        </>
    )
}