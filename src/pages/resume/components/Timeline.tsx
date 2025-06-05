import { useState } from 'react';
import type { TimelineItem, TimelineProps } from '../data/timelineDataType';
import TimelineDialog from './TimelineDialog';

const Timeline = ({ timelineList }: TimelineProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [focusedItem, setFocusedItem] = useState<TimelineItem | null>(null);

  const handleClick = (item: TimelineItem) => {
    setIsOpen(true);
    setFocusedItem(item);
  };

  return (
    <>
      <ul className="before:bg-border-primary-light dark:before:bg-border-primary-dark transition-theme relative space-y-8 pl-1 before:absolute before:-ml-px before:h-full before:w-0.5 before:rounded-full">
        {timelineList.map((item) => {
          const startYear = item.startDate.split('/')[0];
          const endYear = item.endDate ? item.endDate.split('/')[0] : startYear;

          return (
            <li key={item.id} className="relative -ms-1.5 flex items-start gap-4">
              <span className="border-accent-light dark:border-accent-dark bg-global-secondary transition-theme size-3 shrink-0 rounded-full border-2" />

              <div className="-mt-2">
                <time className="text-secondary text-xs/none font-medium">
                  {startYear === endYear ? endYear : `${startYear} - ${endYear}`}{' '}
                  {item.duration && ` - ${item.duration}`}
                </time>

                <button type="button" className="block" onClick={() => handleClick(item)}>
                  <h3 className="hover:text-accent-light dark:hover:text-accent-dark transition-theme cursor-pointer text-start text-lg font-bold">
                    {item.company}
                  </h3>
                </button>

                <p className="text-secondary mt-0.5 text-sm">{item.position}</p>
              </div>
            </li>
          );
        })}
      </ul>
      <TimelineDialog isOpen={isOpen} setIsOpen={setIsOpen} focusedItem={focusedItem} />
    </>
  );
};

export default Timeline;
