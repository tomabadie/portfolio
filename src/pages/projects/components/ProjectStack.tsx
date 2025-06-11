import IconWrapper from '../../../components/ui/IconWrapper';
import { skillsIcons } from '../../../components/ui/iconsData';
import type { ProjectStackProps } from '../data/projectsDataType';

const ProjectStack = ({ type, variant }: ProjectStackProps) => {
  return (
    <div className={`flex flex-wrap ${variant === 'names' && 'gap-2'} `}>
      {variant === 'icons' &&
        type.content.map((item) => {
          return (
            <div key={item} className="group relative flex h-10 w-10 items-center justify-center">
              <IconWrapper variant="basic" wrapperClassName="h-6 w-6 cursor-pointer ">
                {skillsIcons[item.toLowerCase()]}
              </IconWrapper>
              <span className="border-primary bg-global-primary absolute top-full z-20 mt-1 scale-0 rounded-sm border px-2 py-1 text-xs opacity-0 shadow transition-all duration-200 group-hover:scale-100 group-hover:opacity-100">
                {item}
              </span>
            </div>
          );
        })}

      {variant === 'names' &&
        type.content.map((item) => {
          return (
            <div key={item} className="flex items-center justify-center">
              <span className="border-primary bg-global-primary transition-theme rounded-sm border px-2 py-1 text-xs shadow">
                {item}
              </span>
            </div>
          );
        })}
    </div>
  );
};

export default ProjectStack;
