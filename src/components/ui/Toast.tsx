import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import IconWrapper from './IconWrapper';
import { CloseIcon } from './Icons';

export interface ToastProps {
  message: string;
  type?: 'success' | 'error';
  toastDuration: number;
  onClose: () => void;
}

export default function Toast({ message, onClose, type = 'success', toastDuration }: ToastProps) {
  const { language } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const timer = setTimeout(onClose, toastDuration);
    return () => clearTimeout(timer);
  }, [onClose, toastDuration]);

  return (
    <AnimatePresence>
      <motion.div
        role="status"
        aria-live="polite"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
        animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
        exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
        className={`transition-theme fixed top-6 left-1/2 z-50 mt-2 flex w-[90%] max-w-xs -translate-x-1/2 overflow-hidden rounded-lg px-4 py-3 text-center text-sm shadow-lg motion-reduce:transition-none ${
          type === 'success'
            ? 'bg-green-100 text-green-800 ring-1 ring-green-300'
            : 'bg-red-100 text-red-800 ring-1 ring-red-300'
        }`}
      >
        <span>{message}</span>{' '}
        <button
          type="button"
          aria-label={language === 'en' ? 'Close' : 'Fermer'}
          className="ml-auto"
          data-cursor="hover"
          onClick={onClose}
        >
          {' '}
          <IconWrapper
            variant="plain"
            wrapperClassName={`h-5 w-5  ${type === 'success' ? 'text-green-800' : 'text-red-800'} `}
          >
            {' '}
            <CloseIcon />{' '}
          </IconWrapper>{' '}
        </button>
        {!shouldReduceMotion && (
          <motion.div
            className={`absolute bottom-0 left-0 h-1 ${type === 'success' ? 'bg-green-600/60' : 'bg-red-600/60'}`}
            initial={{ width: '100%' }}
            animate={{ width: 0 }}
            transition={{ duration: toastDuration / 1000, ease: 'linear' }}
          />
        )}
      </motion.div>
    </AnimatePresence>
  );
}
