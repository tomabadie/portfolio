import { motion, useReducedMotion } from 'motion/react';
import type { Technology } from '../../pages/resume/data/timelineDataType';
import IconWrapper from './IconWrapper';
import { skillsIcons } from './iconsData';

export interface StackListProps {
  type: Technology;
  styleVariant: 'icons' | 'names';
  orientationVariant: 'row' | 'col';
}

const StackList = ({ type, styleVariant, orientationVariant }: StackListProps) => {
  const shouldReduceMotion = useReducedMotion();
  const animatedList = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const animatedListItem =
    orientationVariant === 'row'
      ? {
          hidden: { opacity: 0, x: -10 },
          visible: { opacity: 1, x: 0 },
        }
      : {
          hidden: { opacity: 0, y: 10 },
          visible: { opacity: 1, y: 0 },
        };

  return (
    <motion.ul
      className={`flex flex-wrap ${styleVariant === 'names' && 'gap-2'} `}
      variants={animatedList}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      {styleVariant === 'icons' &&
        type.content.map((item) => {
          return (
            <li key={item} className="group relative flex h-10 w-10 items-center justify-center">
              <IconWrapper variant="basic" wrapperClassName="h-6 w-6 cursor-pointer text-secondary">
                {skillsIcons[item.toLowerCase()]}
              </IconWrapper>
              <span className="border-primary bg-global-primary absolute top-full z-20 mt-1 scale-0 rounded-sm border px-2 py-1 text-xs opacity-0 shadow transition-all duration-200 group-hover:scale-100 group-hover:opacity-100">
                {item}
              </span>
            </li>
          );
        })}

      {styleVariant === 'names' &&
        type.content.map((item) => {
          return (
            <motion.li
              key={item}
              variants={animatedListItem}
              transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.3 }}
              className={`flex items-center justify-center flex-${orientationVariant} `}
            >
              <span className="border-primary bg-global-primary transition-theme text-secondary rounded-sm border px-2 py-1 text-xs shadow">
                {item}
              </span>
            </motion.li>
          );
        })}
    </motion.ul>
  );
};

export default StackList;
