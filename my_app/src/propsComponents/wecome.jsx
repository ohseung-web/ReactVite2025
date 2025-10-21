// 부모 컴포넌트
function Parent02(){
    return <Welcome name='길동' />
}
export default Parent02

// 자식 컴포넌트
// props명령어를 사용하려면 자식과 부모가 같은
// jsx파일안에 존재해야 함
function Welcome({name}){
    return <h1>안녕하세요. {name}님</h1>
}