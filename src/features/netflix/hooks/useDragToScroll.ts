import { useRef, useState } from "react";

const useDragToScroll = (rowRef: React.RefObject<HTMLDivElement>) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (rowRef.current?.offsetLeft || 0));
    setScrollLeft(rowRef.current?.scrollLeft || 0);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    console.log(e.pageX, rowRef.current?.offsetLeft);
    const x = e.pageX - (rowRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 6; // Adjust the scroll speed here
    if (rowRef.current) {
      rowRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  return {
    isDragging,
    handleMouseDown,
    handleMouseLeave,
    handleMouseUp,
    handleMouseMove,
  };
};

export default useDragToScroll;
