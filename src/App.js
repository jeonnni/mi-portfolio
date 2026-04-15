
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./components/common/Header/Header";
import Navbar from "./components/common/Navbar/Navbar";
import About from "./pages/About/About";
import Blog from "./pages/Blog/Blog";
import Projects from "./pages/Projects/Projects";
import Skills from "./pages/Skills/Skills";
import "./styles/variables.css";
import Loading from "./components/common/Loading/Loading";
import Contact from "./pages/Contact/Contact";
import Cursor from "./components/common/Cursor/Cursor";
import ScrollToTop from "./components/common/ScrollToTop/ScrollToTop";

function App() {
  const [darkMode, setDarkMode] = useState(false); // 라이트/다크모드
  const [isLoading, setIsLoading] = useState(true); // 로딩

  // 0. 마운트 즉시 최상단 강제 이동 (새로고침 시 스크롤 위치 튀는 현상 방지)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 1. 초기 로딩 제어 (마운트 시 1회)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);
  // 2. 다크모드 클래스 제어 (상태 변경 시마다)
  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <Router basename="/">
      <div className="container">
        <ScrollToTop />
        <Cursor />
        <Header />
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <Navbar darkMode={darkMode} onToggleDark={() => setDarkMode(!darkMode)} />
            <main className="content">
              <Routes>
                <Route path="/" element={<About />}></Route>
                {/* <Route path="/about" element={<About />}></Route> */}
                <Route path="/skills" element={<Skills />}></Route>
                <Route path="/projects" element={<Projects />}></Route>
                <Route path="/blog" element={<Blog />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
              </Routes>
            </main>
          </>
        )}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="theme-toggle-btn"
        >
          {darkMode ? "🌙 " : "☀️"}
        </button>
      </div>
    </Router>
  );
}

export default App;
