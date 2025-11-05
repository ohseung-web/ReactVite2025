import {useState} from 'react'
// createContext => 데이터 공용 저장 장소 생성하는 라이브러리
import { createContext } from 'react'

// 1번 : 데이터 저장소 Context 생성
// 내가 만든 저장소는 내보내기 해야 되기 때문에 export해야한다.
export const ThemeContext = createContext();

// 2번 : Provider 컴포넌트를 정의 
export default function ThemeProvider({children}){

    // 전역변수 지정 
    // toggle 버튼 (false => true, true => false)
    // toggle 버튼을 숨김/보임 상태를 저장하는 상태변수
    const [theme, setTheme] =useState(false)

    // 토글 함수(업데이트하는 함수)
    // prev => 이전의 값이라는 의미 약어이다.
    // prev = false => true 된상태를 정확히 알려준다
    // 리액트가 setTheme((prev) => !prev)형식으로 
    // 업데이트 함수를 작성하면
    //  아래의 함수 형식으로 이해해서 전환해준다.
    //  function toggle(prev){
    //     setTheme(!prev)
    //   }
    const toggleTheme = () => {
        setTheme((prev) => !prev )
        // setTheme(!theme)
    }
    
    // 공유할 데이터는 : 값, 함수 모두 가능
    return(
        // 내가 만든 데이터 저장소 이름.Provider
        // ThemeContext.Provider 의 value={{}} 값을 공유한다.
        // 여기서 공유할 데이터 : theme, toggleTheme
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
} 
