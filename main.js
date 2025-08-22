// Header - Mobile Swiper //
document.addEventListener('DOMContentLoaded', function () {
  new Swiper('.mobile-main .swiper', {
    slidesPerView: 1,
    loop: true,
    speed: 1000,
    longSwipesRatio: 0.3, // 드래그 비율
    longWeipesMs: 300, // 긴 swipe 인식 시간
    resistanceRatio: 0.7, // 슬라이드 밀림 방지
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.mobile-main .swiper-pagination',
      clickable: true
    }
  });
});

// About me - Swiper //
document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.resume .swiper', {
    spaceBetween: 10, // 슬라이드 사이 여백
    centeredSlides: true,
    loop: true,
    autoplay: {
     delay: 3000
   },
    pagination: {
      el: '.resume .swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.resume .swiper-button-next',
      prevEl: '.resume .swiper-button-prev'
    },
    breakpoints: {
      1200: {
      slidesPerView: 3
      },
      768: {
        slidesPerView: 1
      }
    }
  });
});

// Work - Swiper //
document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.content-right .swiper', {
    slidesPerView: 'auto',
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false, // 사용자 인터랙션 후에도 autoplay 유지
    },
    breakpoints: {
      768: {
        spaceBetween: 100, // 768px 이상일 때
      },
      0: {
        spaceBetween: 0 // 0 ~ 767px일 때
      }
    }
  });

  // 슬라이드에 있는 버튼들 선택
  const buttons = document.querySelectorAll('.slide-buttons button');

  // 각 버튼에 클릭 이벤트 등록
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const index = Number(button.getAttribute('data-index')); // 버튼에 지정된 index 값 읽기
      swiper.slideToLoop(index); // loop 모드일 때 슬라이드를 해당 index로 이동
      swiper.autoplay.start(); // 클릭 시 autoplay가 멈췄다면 다시 시작
    });
  });

  // 슬라이드가 변경될 때마다 호출되는 이벤트
  swiper.on('slideChange', () => {
    const realIndex = swiper.realIndex; // 실제 슬라이드의 현재 인덱스 가져오기
    buttons.forEach((btn, idx) => {
      // 현재 슬라이드 인덱스와 버튼 인덱스를 비교해서
      // 일치하는 버튼에만 active 클래스 추가하고 나머지는 제거
      btn.classList.toggle('active', idx === realIndex);
    });
  });
});

// To-top button //
document.addEventListener('DOMContentLoaded', function () {
  
  const toTopBtn = document.getElementById('to-top');
    
  // 스크롤 이벤트 리스너 등록
  window.addEventListener('scroll', () => {    
    // 현재 스크롤 위치가 300px 이상이면 버튼 표시, 아니면 숨김
    if (window.scrollY > 300) {
      toTopBtn.style.display = 'block';
    } else {
      toTopBtn.style.display = 'none';
    }
  });
    
  // "to-top" 버튼 클릭 시 페이지 맨 위로 이동
  toTopBtn.addEventListener('click', function () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });
