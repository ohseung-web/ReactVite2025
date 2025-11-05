// 공유한 데이터 꺼내오는 훅 import하기 => useContext
import { useContext } from "react";
// 내가만든 공유 데이터 저장소 이름 import한다. => ThemeContext
import { ThemeContext } from "../../ThemeContext";

export default function Header(){
    // 내가 공유한 데이터 가져온다.
    const {theme,toggleTheme} = useContext(ThemeContext)

    return(
        <header className={`header ${theme?'dark':'light'}`}>
            <h2>Theme Switch</h2>
            {/*  */}
            <button type="button" onClick={toggleTheme}>{theme?'light':'dark'}로 전환</button>
        </header>
    )
}
