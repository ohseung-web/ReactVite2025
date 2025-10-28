import {useState} from 'react'

export default function Hover02(){
    // isTooltip = false 면 Tooltip 안보임
    const[isTooltip, setIsTooltip]=useState(false)
    
    return(
        <div>
            <button type='button'
             onMouseEnter={() => setIsTooltip(true)}
             onMouseLeave={() => setIsTooltip(false)}
            >마우스를 올려보세요</button>
            {isTooltip && <div>도움말 메시지</div>}
            {isTooltip ? <div>도움말 메시지</div> : null}
        </div>
    )
}