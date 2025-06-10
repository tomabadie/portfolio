import IconWrapper from '../../../components/ui/IconWrapper';
import { skillsIcons } from '../../../components/ui/iconsData';

const ProjectStack = ({ list }: { list: string[] }) => {
  return (
    <>
      {list.map((item) => {
        return (
          <div
            key={item}
            className="group relative flex w-10 flex-col items-center justify-center gap-1"
          >
            <IconWrapper
              variant="basic"
              wrapperClassName="h-6 w-6 cursor-pointer text-secondary-light dark:text-secondary-dark"
            >
              {skillsIcons[item.toLowerCase()]}
            </IconWrapper>
            <span className="text-secondary-light dark:text-secondary-dark bg-bg-global-secondary absolute top-full mt-1 scale-0 rounded-sm px-2 py-1 text-xs opacity-0 shadow transition-all duration-200 group-hover:scale-100 group-hover:opacity-100">
              {item}
            </span>
          </div>
        );
      })}
    </>
  );
};

export default ProjectStack;
