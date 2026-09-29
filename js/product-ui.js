const productDetailBox = document.querySelector('#product-detail-2');

productDetailBox.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn-rvtxt');
    if (!btn) return;

    const reviewTxt = btn.closest('.review-txt');
    if (!reviewTxt) return;

    reviewTxt.classList.toggle('fold');

    if (reviewTxt.classList.contains('fold')) {
        btn.innerHTML = `더보기<img src="./img/icn-more.svg" alt="더보기 아이콘">`;
    } else {
        btn.innerHTML = `접기<img src="./img/icn-more.svg" alt="접기 아이콘">`;
    }
});