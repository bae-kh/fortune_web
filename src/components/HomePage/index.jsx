import React, { useEffect } from 'react'; // React import 확인

export default function HomePage({ onFortuneClick }) {
  useEffect(() => {
      if (typeof window !== 'undefined') {
          const tns = require('tiny-slider').tns;
          let slider = tns({
              container: '.banner-wrapper',
              items: 1,
              slideBy: 'page',
              autoplay: true,
              autoplayButtonOutput: false,
              controls: false,
              nav: true,
              autoplayTimeout: 5000,
              speed: 1000,
              mode: 'gallery',
              animateIn: 'fadeIn',
              animateOut: 'fadeOut'
          });
      }
  }, []);

    return (
        <>
            <header className="header">
                <div className="header-content">
                    <div className="logo">✧ Mystical Fortune ✧</div>
                    <div className="auth-buttons">
                        <button className="login-btn">로그인</button>
                        <button className="signup-btn">회원가입</button>
                    </div>
                </div>
            </header>

            <main className="main-content">
                <div className="banner-container">
                    <div className="banner-wrapper">
                        <div className="banner-slide">
                            <div className="banner-content">
                                <h2>✧ 오늘의 운세 ✧</h2>
                                <p>당신의 하루를 밝혀줄 신비로운 메시지를 확인하세요</p>
                            </div>
                        </div>
                        <div className="banner-slide">
                            <div className="banner-content">
                                <h2>✧ 특별한 인연 ✧</h2>
                                <p>새로운 회원을 위한 특별한 혜택을 놓치지 마세요</p>
                            </div>
                        </div>
                        <div className="banner-slide">
                            <div className="banner-content">
                                <h2>✧ 2024년 운세 ✧</h2>
                                <p>당신의 새해를 비춰줄 별들의 메시지</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="services">
                  <a href="/fortune" className="service-card">
                        <div className="service-icon">🔮</div>
                        <h3>일반 운세</h3>
                        <p>매일 새롭게 업데이트되는 당신만을 위한 운세와 함께 하루를 시작하세요</p>
                    </a>
                    <div className="service-card">
                        <div className="service-icon">🎴</div>
                        <h3>타로 카드</h3>
                        <p>78장의 타로 카드가 들려주는 신비로운 이야기를 통해 답을 찾아보세요</p>
                    </div>
                    <div className="service-card">
                        <div className="service-icon">⭐</div>
                        <h3>별자리 운세</h3>
                        <p>12개의 별자리가 전하는 당신만의 특별한 메시지를 확인하세요</p>
                    </div>
                    <div className="service-card">
                        <div className="service-icon">📅</div>
                        <h3>사주팔자</h3>
                        <p>생년월일을 통해 알아보는 당신의 운명과 미래의 길을 안내합니다</p>
                    </div>
                </div>
            </main>
        </>
    );
}