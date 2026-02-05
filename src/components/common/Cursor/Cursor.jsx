import { useEffect, useRef } from "react";
import styles from "./Cursor.module.scss";

const COUNT = 10; // 원 개수
const LERP_FACTOR = 0.2; // 따라오는 속도 

function Cursor() {
  const coords = useRef({ x: 0, y: 0 }); // 마우스 현재 위치
  const circlesRef = useRef([]); // DOM 요소들을 저장할 배열 Ref
  const requestRef = useRef(); // 애니메이션 프레임 ID 저장

  
  useEffect(() => {
    // 마우스 사용 기기인지 확인 (hover가 가능한 기기인지 체크)
    const isMouseDevice = window.matchMedia("(pointer: fine)").matches;
    // 마우스 기기가 아니면 로직을 시작하지 않음
    if (!isMouseDevice) return;
    
    const animateCircles = () => {
      let { x, y } = coords.current;
  
      circlesRef.current.forEach((el, index) => {
        if (!el) return;
  
        // 1. 위치 및 스케일 업데이트
        el.style.left = `${x - 12}px`;
        el.style.top = `${y - 12}px`;
        el.style.transform = `scale(${(COUNT - index) / COUNT})`;
  
        // 2. 다음 원이 따라올 좌표 계산
        const nextCircle = circlesRef.current[index + 1] || circlesRef.current[0];
        // 현재 요소의 좌표를 임시 데이터 속성에 저장하여 다음 원이 참조하게 함
        el.x = x;
        el.y = y;
  
        const nextX = nextCircle.x || x;
        const nextY = nextCircle.y || y;
  
        x += (nextX - x) * LERP_FACTOR;
        y += (nextY - y) * LERP_FACTOR;
      });
  
      requestRef.current = requestAnimationFrame(animateCircles);
    };

    const onMouseMove = (e) => {
      coords.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", onMouseMove);
    requestRef.current = requestAnimationFrame(animateCircles);

    return () => {
      // 컴포넌트 언마운트 시 이벤트 및 애니메이션 정리
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <>
      {Array.from({ length: COUNT }).map((_, i) => (
        <div
          key={i}
          ref={(el) => (circlesRef.current[i] = el)} // 각 div를 ref 배열에 할당
          className={styles.cursor}
        />
      ))}
    </>
  );
}

export default Cursor;
