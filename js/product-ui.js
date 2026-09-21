const btnRvtxt = document.querySelectorAll('.btn-rvtxt');
btnRvtxt.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        btn.closest('.review-txt').classList.toggle('fold');
        if(btn.closest('.review-txt').classList.contains('fold')){
            // fold라는 클래스가 있을 때 실행되는 코드
            btn.innerHTML = `더보기<img src="./img/icn-more.svg" alt="더보기 아이콘">`
        }else{
            // fold라는 클래스가 없을 때 실행되는 코드
            btn.innerHTML = `접기<img src="./img/icn-more.svg" alt="접기 아이콘">`
        }
    });
});