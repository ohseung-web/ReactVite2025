import React from 'react';
import DaumPostcode from 'react-daum-postcode';
// import Modal from 'react-modal';
import { useState } from 'react';
import './Postcode.css'; // 👈 모달용 스타일 따로 분리

const Postcode = () => {
  //국가기초구역번호. 2015년 8월 1일부터 시행될 새 우편번호.
  const [zipCode, setZipcode] = useState(''); 
  const [Address, setAddress] = useState(''); // 주소
  const [isOpen, setIsOpen] = useState(false); //검색버튼 누르기 전

  const completeHandler = (data) => {
    // 우편번호 검색 도로명 또는 지역명으로 입력
    let addr = '';
    if (data.userSelectedType === 'R') {
      addr = data.roadAddress; //도로명 주소
    } else {
      addr = data.jibunAddress; //지역명 주소
    }
    setZipcode(data.zonecode);
    setAddress(addr);
    setIsOpen(false);
  };

   // 모달 열기/닫기
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      {/* 기본 입력 필드 */}
      <input
        type="text"
        value={zipCode}
        readOnly
        placeholder="우편번호"
        name="post"
        id="post"
      />
      <button type="button" onClick={toggle} id="userAddSearch">
        우편번호 검색
      </button>
      <br />
      <input
        type="text"
        value={Address}
        readOnly
        placeholder="도로명 주소"
        name="userAddress"
        id="userAddress"
      />
      <input
        type="text"
        placeholder="상세 주소"
        name="detailAddress"
        id="detailAddress"
      />

      {/*  커스텀 모달 */}
      {isOpen && (
        <div className="modalOverlay" onClick={toggle}>
          <div className="modalBox" onClick={(e) => e.stopPropagation()}>
            {/* 닫기 버튼 */}
            <button className="closeBtn" onClick={toggle}>
              ✖ 닫기
            </button>
            {/* Daum 주소 검색기 */}
            <DaumPostcode onComplete={completeHandler} height="100%" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Postcode;
