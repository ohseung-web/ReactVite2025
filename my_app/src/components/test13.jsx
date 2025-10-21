function Test13(){
    const isActive = true;
    return(
        <>
          <div className={isActive===true?'box active':'box'}>박스</div>
        </>
    )
}
export default Test13