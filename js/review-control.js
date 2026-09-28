// 리뷰데이터들을 product.html파일의 리뷰 영역에 li태그의 형태로 넣어주는 파일

const reviewUl = document.querySelector('.review');
let  reviewHtmlTag = '';
reviewInfo.forEach(function(item){
    let reviewImgTag = '';
    item.reviewImgs.forEach(function(img,index){
        reviewImgTag += `<li><img src="./img/review/${img}" alt="리뷰이미지${index}"></li>`;
    });
    reviewHtmlTag += `<li>
                            <div class="review-user">
                                <span class="rev-name">정*진</span>
                                <span class="rev-date">2026.09.16</span>
                            </div>
                            <div class="review-content">
                                <div class="stars">
                                    <img src="./img/star.svg" alt="좋아요 별">
                                    <img src="./img/star.svg" alt="좋아요 별">
                                    <img src="./img/star.svg" alt="좋아요 별">
                                    <img src="./img/star.svg" alt="좋아요 별">
                                    <img src="./img/star.svg" alt="좋아요 별">
                                </div>
                                <div class="review-txt fold">
                                    <p>
                                        [매장/타쇼핑몰 구매 후기] 방 분위기를 고급스럽게 만들어줄 호텔식 침대를 찾다가 스와니에 아이보리 색상을 선택했는데, 결과적으로 정말 만족어
                                        보이는 효과가 있어서 작은 공간에서도 활용도가 높은 것 같아요. 청소할 때도 걸리는 부분이 적어서 관리가 훨씬 편해졌고, 생활 동선도 자연스럽게
                                        정리되는 느낌입니다.조명 부분도 굉장히 만족스러운 요소 중 하나입니다. 전체 조명을 켜지 않고 헤드 부분에 있는 간접조명만 켜도 분위기가 충분히
                                        아늑하게 연출됩니다. 자기 전에는 밝은 조명보다 이런 은은한 빛이 훨씬 편안하게 느껴지는데, 실제로 사용해보니 눈도 덜 피로하고 수면 준비에도
                                        도움이 되는 것 같아요. 남편이 먼저 잠든 이후 혼자 휴대폰을 보거나 간단하게 책을 읽을 때는 독서등이 따로 있어서 훨씬 실용적입니다. 밝기도
                                        적당해서 옆 사람을 방해하지 않으면서 개인 시간을 보낼 수 있다는 점이 특히 좋았어요.패널 가격이 조금 부담스럽긴 했지만 결국 선택하게 된 가장
                                        큰 이유는 실용적인 기능들이었습니다. C타입 휴대폰 충전이 가능하고, 콘센트도 함께 구성되어 있어서 침대 위에서 생활하는 시간이 훨씬
                                        편리해졌어요. 예전에는 충전하려고 따로 멀티탭을 빼거나 선을 길게 늘어뜨려야 해서 불편했는데, 지금은 그런 번거로움이 완전히 사라졌습니다. 이런
                                        작은 디테일들이 실제 생활에서는 생각보다 큰 차이를 만들어준다는 걸 사용하면서 더 실감하고 있어요.침대 프레임 자체의 완성도도 굉장히
                                        만족스럽습니다. 철제 프레임이라 내구성이 뛰어나고, 실제로 사용하면서 흔들림이나 소음이 거의 느껴지지 않습니다. 밤에 뒤척이거나 움직일 때도
                                        안정감이 있어서 편안하게 사용할 수 있었어요. 알루미늄 테두리 마감도 상당히 고급스럽고 깔끔하게 처리되어 있어서 전체적인 디자인 완성도를 한층
                                        더 높여주는 느낌입니다. 디테일 하나하나 신경 쓴 제품이라는 인상을 받았습니다.설치 과정도 매우 만족스러웠습니다. 기사님께서 시간 약속도 잘
                                        지켜주셨고, 제품 설명도 친절하게 해주셔서 처음 사용하는 입장에서 이해하기 쉬웠어요. 설치도 깔끔하게 마무리해주셔서 따로 손볼 부분 없이 바로
                                        사용할 수 있었고, 마무리 정리까지 꼼꼼하게 해주셔서 처음부터 기분 좋게 사용할 수 있었습니다.전체적으로 디자인, 색감, 기능성, 실용성까지
                                        모두 만족스러운 제품이라 침실 인테리어를 중요하게 생각하시는 분들께 특히 추천드리고 싶어요. 저처럼 밝고 깔끔하면서도 고급스러운 분위기를
                                        선호하시는 분들께는 정말 잘 맞을 것 같습니다. 단순히 잠만 자는 공간이 아니라 하루의 시작과 끝을 보내는 공간이 더 편안하고 만족스럽게
                                        바뀌었다는 점에서, 이번 선택은 충분히 가치 있었다고 느끼고 있습니다.</p>
                                    <button class="btn-rvtxt">
                                        더보기
                                        <img src="./img/icn-more.svg" alt="더보기 아이콘">
                                    </button>
                                </div>
                                <div class="review-img">
                                    <ul class="review-gallery">
                                        <li><img src="./img/rev1.jpg" alt="리뷰이미지1"></li>
                                        <li><img src="./img/rev2.jpg" alt="리뷰이미지2"></li>
                                        <li><img src="./img/rev3.jpg" alt="리뷰이미지3"></li>
                                        <li><img src="./img/rev4.jpg" alt="리뷰이미지4"></li>
                                        <li><img src="./img/rev5.jpg" alt="리뷰이미지5"></li>
                                        <li><img src="./img/rev6.jpg" alt="리뷰이미지6"></li>
                                    </ul>
                                </div>
                                <div class="review-etc">
                                    <a href="#"><img src="./img/icon-rev-good.svg" alt="유용해요">유용해요</a>
                                    <a href="#"><img src="./img/icon-rev-bad.svg" alt="신고차단">신고차단</a>
                                </div>
                            </div>
                        </li>`;
});