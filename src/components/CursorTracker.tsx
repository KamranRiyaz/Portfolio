import { useEffect, useState } from 'react';

const CursorTracker = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsMoving(true);

      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setIsMoving(false), 150);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      {/* Main cursor glow */}
      <div
        className="fixed pointer-events-none z-50 mix-blend-difference"
        style={{
          left: mousePosition.x - 20,
          top: mousePosition.y - 20,
          transform: `scale(${isMoving ? 1.2 : 1})`,
          transition: 'transform 0.2s ease-out',
        }}
      >
        <div className="w-10 h-10 bg-gradient-primary rounded-full opacity-30 blur-sm animate-pulse" />
      </div>

      {/* Trailing dots */}
      <div
        className="fixed pointer-events-none z-40"
        style={{
          left: mousePosition.x - 2,
          top: mousePosition.y - 2,
          transition: 'all 0.1s ease-out',
        }}
      >
        <div className="w-1 h-1 bg-tech-purple rounded-full opacity-60" />
      </div>

      {/* Larger glow area */}
      <div
        className="fixed pointer-events-none z-30 mix-blend-screen"
        style={{
          left: mousePosition.x - 50,
          top: mousePosition.y - 50,
          transform: `scale(${isMoving ? 1.5 : 1})`,
          transition: 'transform 0.3s ease-out',
        }}
      >
        <div className="w-24 h-24 bg-gradient-glow rounded-full opacity-20 blur-xl" />
      </div>
    </>
  );
};

export default CursorTracker;