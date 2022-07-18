import React,{MouseEvent} from "react";
import styled from "styled-components";
interface XScrollDragProps {
  children: React.ReactNode | JSX.Element;
}

interface CustomWheelEvent<Element> extends MouseEvent<Element> {
  deltaMode: number;
  deltaX: number;
  deltaY: number;
  deltaZ: number;
}

const XScrollDrag = ({ children, ...props }:XScrollDragProps) => {
  const [isDrag, setIsDrag] = React.useState(false);
  const [startX, setStartX] = React.useState<number>(0);

  const scrollRef = React.useRef<HTMLDivElement>(null);
  let scrollLeftVal:number|undefined = scrollRef.current?.scrollLeft;

  const onDragStart = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setIsDrag(true);
    if(scrollLeftVal){
      setStartX(e.pageX + scrollLeftVal);
    }
    // e.pageX : 문서의 왼쪽상단을 기준으로 마우스 위치의 X좌표 값
    // scrollRef.current.scrollLeft : 수평 스크롤바의 위치값
  };

  const onDragEnd = () => {
    setIsDrag(false);
  };

  const onDragMove = (e: MouseEvent<HTMLElement>) => {
    if (isDrag) {
      scrollLeftVal = startX - e.pageX;
      // 실질적으로 움직여주는 부분
    }
  };
  const throttle = (func:any, ms:number) => {
    let throttled = false;
    return (...args:any[]) => {
      if (!throttled) {
        throttled = true;
        setTimeout(() => {
          func(...args);
          throttled = false;
        }, ms);
      }
    };
  };

  const delay = 30;
  const onThrottleDragMove=() =>{
    if(isDrag){
      throttle(onDragMove, delay);
    }
    
  } 

   const onwheel: any = (event: CustomWheelEvent<Element>) => {
    if(scrollLeftVal){
      scrollLeftVal += event.deltaY;
    }
    event.preventDefault(); // 링크나 폼 전송과 같은 기본 동작을 방지
  };

  React.useEffect(() => {
    scrollRef.current?.addEventListener("wheel", onwheel, { passive: false });
  }, []);

  return (
    <CategoryBox
      ref={scrollRef}
      onMouseDown={onDragStart}
      onMouseUp={onDragEnd}
      onMouseMove={onThrottleDragMove}
      onMouseLeave={onDragEnd}
      style={{ ...props }}
    >
      {children}
    </CategoryBox>
  );
};

const CategoryBox = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap; // 넘쳐도 줄바꿈 X, white-space: no-wrap과 같은 효과
  overflow-x: scroll; // x축 넘치면 스크롤 생성
`;

export default XScrollDrag;