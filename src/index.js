import React from 'react';
import "./styles/reset.css";
import "./styles/animations.css";
import "./index.css";
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 브라우저의 자동 스크롤 복원 비활성화
// (새로고침 시 이전 스크롤 위치로 튀는 현상 방지)
if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual';
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
