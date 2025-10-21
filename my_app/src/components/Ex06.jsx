// 컴포넌트 이름은 반드시 대문자로 시작한다.
import ReactSVG from '../assets/react.svg'

function Ex06(){
   return(
     <>
       <div className="gallery">
         <div className="imgCard">
            <img src={ReactSVG} alt="풍경2" />
            <p>아름다운 산</p>
          </div>         
         <div className="imgCard">
            <img src="/images/image01.png" alt="풍경1" />
            <p>푸른 바다</p>
          </div>         
         <div className="imgCard">
            <img src="/images/image03.png" alt="풍경3" />
            <p>도시 야경</p>
          </div>         
       </div>
     </>
   )
}
// 반드시 Export default 명령어로 내보내기 한다.
// 내가 작성한 함수를
export default Ex06