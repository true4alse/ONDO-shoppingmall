

const saleUlTag = document.querySelector('.new-product');
let result = newProductArray.map(product => {
    return `<li>
                <a href="#">
                    <figure>
                        <img src="./img/${product.pthumbFileName}" alt="${product.pname}">
                    </figure>
                    <div class="sale-txt">
                        <h4 class="title-1">${product.pname}</h4>
                        <p class="desc-1">${product.pdesc}</p>
                        <div class="pay-frame">
                            ${product.pdiscount?`<div class="pay-original">
                                <span>${formatMoney(product.price)}</span>원
                            </div>
                            <div class="pay-discount">
                                <div class="discount">${Math.round(product.pdiscount*100)}%</div>                                
                                <div class="pay"><b>${formatMoney(Math.round(product.price *(1-product.pdiscount)))}</b>원</div>
                            </div>`:`<div class="pay"><b>${formatMoney(product.price)}</b>원</div>`}
                            
                        </div>
                    </div>
                </a>
            </li>`
}).join('')

saleUlTag.innerHTML = result

function formatMoney(value){
    return Number(value).toLocaleString('ko-KR');
}


