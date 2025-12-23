import {useState, useEffect} from 'react'
import '../Mega/Reservation.css'

export default function Reservation(){
    // 아래는 빈칸만 100개를 만든거나 마찬가지
    //const seatArr = Array.from(Array(10), (row, rowindex) => Array.from(Array(10),(col,colindex)=> rowindex * 10 + colindex + 1));
    const seatArr = Array.from(Array(10), () => Array(10).fill(0));
    // 100의 칸에 데이터를 넣어야 함

    const alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']; //좌석 열 알파벳

    return(
        <>
           <div className="Resercontainer">
                <div className="screen_seat">
                    <p className="screentext">SCREEN</p>
                    <div className="seat">
                        <table className='seattable'>
                            <tbody>
                                {seatArr.map((seat,rowindex)=>(
                                    <tr key={rowindex}>
                                        <td className='alpha'>{alpha[rowindex]}</td>
                                        {seatArr[0].map((seat,colindex)=>(
                                            <td key={`${rowindex}-${colindex}`}>{colindex+1}</td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
           </div>
        </>
    )
}