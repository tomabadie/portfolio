import { motion, useMotionValue, useReducedMotion, useSpring } from 'motion/react';
import { useEffect, useState } from 'react';
import { useCursorPosition } from '../../hooks/useCursorPosition';

const CustomCursor = () => {
  const [cursorType, setCursorType] = useState<string>('default');
  const shouldReduceMotion = useReducedMotion();

  /* Position */
  const { x, y } = useCursorPosition();

  const cursorX = useMotionValue(x);
  const cursorY = useMotionValue(y);

  const springX = shouldReduceMotion
    ? cursorX
    : useSpring(cursorX, { stiffness: 200, damping: 20 });
  const springY = shouldReduceMotion
    ? cursorY
    : useSpring(cursorY, { stiffness: 200, damping: 20 });

  useEffect(() => {
    cursorX.set(x);
    cursorY.set(y);
  }, [x, y, cursorX, cursorY]);

  /* Cursor Type */
  useEffect(() => {
    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("[data-cursor='hover']")) {
        setCursorType('hover');
      } else if (target.closest("[data-cursor='text']")) {
        setCursorType('text');
      } else {
        setCursorType('default');
      }
    };

    window.addEventListener('mousemove', handleHover);
    return () => window.removeEventListener('mousemove', handleHover);
  }, []);

  return (
    <>
      {/* Cursor */}
      <motion.div
        className={`bg-primary-light/30 dark:bg-primary-dark/30 border-primary-light dark:border-primary-dark pointer-events-none fixed top-0 left-0 z-60 ${cursorType === 'text' ? '' : 'size-2 rounded-full'} border-1`}
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          width: cursorType === 'text' ? '2px' : undefined,
          height: cursorType === 'text' ? '24px' : undefined,
          borderRadius: cursorType === 'text' ? '2px' : undefined,
        }}
        animate={
          cursorType === 'hover'
            ? {
                scale: 3,
                border: 2,
              }
            : {
                scale: 1,
                border: 1,
              }
        }
      />

      {/* Circle */}
      <motion.div
        className="border-primary pointer-events-none fixed top-0 left-0 z-60 size-16 rounded-full border-1"
        style={{ x: springX, y: springY, translateX: '-50%', translateY: '-50%' }}
        animate={
          cursorType === 'hover'
            ? {
                scale: 0,
              }
            : {
                scale: 1,
              }
        }
      />
    </>
  );
};

export default CustomCursor;
