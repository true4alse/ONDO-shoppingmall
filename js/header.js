

// 문서에 이벤트 위임: 전체 메뉴 열기/닫기, 모바일 GNB 탭 전환 처리
if (document) {
    document.addEventListener('click', (e) => {
        const smartOverlayMenu = document.querySelector('.smart-overlay-menu');
        const btnMenu = e.target.closest('.btn-menu');
        if (btnMenu) {
            e.preventDefault();
            if (smartOverlayMenu) {
                smartOverlayMenu.classList.add('on');
            }
            return;
        }

        const btnMenuClose = e.target.closest('.btn-menu-close');
        if (btnMenuClose) {
            e.preventDefault();
            if (smartOverlayMenu) {
                smartOverlayMenu.classList.remove('on');
            }
            return;
        }

        const smartListItem = e.target.closest('.gnb-smart > li');
        if (smartListItem) {
            const smartLists = [...document.querySelectorAll('.gnb-smart > li')];
            const gnb2depthSmarts = [...document.querySelectorAll('.gnb2depth-smart')];
            const idx = smartLists.indexOf(smartListItem);

            if (idx === 0) {
                return;
            }

            e.preventDefault();
            smartLists.forEach((li) => li.classList.remove('on'));
            smartListItem.classList.add('on');
            gnb2depthSmarts.forEach((div) => div.classList.remove('on'));

            if (gnb2depthSmarts[idx - 1]) {
                gnb2depthSmarts[idx - 1].classList.add('on');
            }
        }
    });
}