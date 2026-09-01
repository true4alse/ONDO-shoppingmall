const saleUlTag = document.querySelector('.sale');
let result = productArray.map(product=>{
    return `<li>
                <a href="#">
                    <figure>
                        <img src="./img/${product.pthumbFileName}" alt="특가상품1">
                    </figure>
                    <div class="sale-txt">
                        <h4 class="title-1">LUNE 원목 라운드 테이블</h4>
                        <p class="desc-1">자연스러운 오크의 결을 살린 라운드 테이블 공간에 부드러운 온기를 더해줍니다.</p>
                        <div class="pay-frame">
                            <div class="pay-original">
                                <span>100,000</span>원
                            </div>
                            <div class="pay-discount">
                                <div class="discount">30%</div>
                                <div class="pay"><b>70,000</b>원</div>
                            </div>
                        </div>
                        <span class="like-badge noab"><img src="./img/heart-1.svg" alt="좋아요하트">87</span>
                    </div>
                </a>
            </li>`
}).join('')

saleUlTag.innerHTML = result


