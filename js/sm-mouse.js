// javascript
// ========================================
// Desktop Smooth Scroll
// 마우스 휠을 이용한 부드러운 관성 스크롤
// ========================================

let scrollY = window.scrollY;
let targetY = scrollY;
let isScrolling = false;


// ----------------------------------------
// 설정값
// ----------------------------------------

const scrollSpeed = 1;       // 스크롤 속도
const ease = 0.08;            // 부드러움 정도
                               // 작을수록 더 천천히 미끄러짐
                               // 클수록 빠르게 따라감


// ----------------------------------------
// 마우스 휠 이벤트
// ----------------------------------------

window.addEventListener('wheel', function (e) {

    // 현재 스크롤 위치에 휠 이동량을 더함
    targetY += e.deltaY * scrollSpeed;

    // 페이지의 최대 스크롤 위치
    const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

    // 페이지 범위를 벗어나지 않도록 제한
    targetY = Math.max(0, Math.min(targetY, maxScroll));

    // 애니메이션 시작
    if (!isScrolling) {
        isScrolling = true;
        smoothScroll();
    }

}, { passive: true });


// ----------------------------------------
// 부드러운 스크롤 애니메이션
// ----------------------------------------

function smoothScroll() {

    // 현재 위치와 목표 위치의 차이
    const distance = targetY - scrollY;

    // 현재 위치를 목표 위치에 조금씩 접근시킴
    scrollY += distance * ease;

    // 실제 페이지 스크롤
    window.scrollTo(0, scrollY);

    // 목표 위치에 거의 도달하면 종료
    if (Math.abs(distance) < 0.5) {

        scrollY = targetY;
        window.scrollTo(0, scrollY);

        isScrolling = false;
        return;
    }

    // 다음 프레임 실행
    requestAnimationFrame(smoothScroll);
}

