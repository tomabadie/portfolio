import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useEffect } from 'react';

export interface ToastProps {
  message: string;
  type?: 'success' | 'error';
  onClose: () => void;
}

export default function Toast({ message, onClose, type = 'success' }: ToastProps) {
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const timer = setTimeout(onClose, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        role="status"
        aria-live="polite"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
        animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
        exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
        className={`transition-theme fixed top-6 left-1/2 z-50 w-[90%] max-w-xs -translate-x-1/2 rounded-lg px-4 py-3 text-center text-sm shadow-lg motion-reduce:transition-none ${
          type === 'success'
            ? 'bg-green-100 text-green-800 ring-1 ring-green-300'
            : 'bg-red-100 text-red-800 ring-1 ring-red-300'
        }`}
      >
        {message}
      </motion.div>
    </AnimatePresence>
  );
}
