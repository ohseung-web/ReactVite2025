import { createContext, useState } from 'react';

// 1️⃣ Context 생성
// - createContext()는 React의 전역 저장소(공유 공간)를 만드는 함수입니다.
// - 컴포넌트 트리 전체에 데이터를 전달할 수 있게 해줍니다.
export const AuthContext = createContext();

// 2️⃣ Provider 정의
// - AuthProvider 컴포넌트는 Context의 '공급자(Provider)' 역할을 합니다.
// - App 전체를 감싸서 user, login, logout 데이터를 전역으로 전달합니다.
export default function AuthProvider({ children }) {
  // 상태 변수 user : 현재 로그인한 사용자 정보 저장
  // 기본값은 null → 아직 로그인하지 않은 상태
  const [user, setUser] = useState(null);

  // 로그인 함수 : 사용자 이름을 받아 user 객체로 저장
  const login = (username) => {
    setUser({ name: username });
  };

  // 로그아웃 함수 : user를 null로 초기화 (로그인 해제)
  const logout = () => {
    setUser(null);
  };

  // Provider는 value 속성을 통해 하위 컴포넌트에 데이터를 공유합니다.
  // children은 <AuthProvider>...</AuthProvider> 안에 포함된 컴포넌트들을 의미합니다.
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
