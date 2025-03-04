import { ProjectPlaceholderProps } from './project-card.types';

const ProjectPlaceholder = ({ category, config }: ProjectPlaceholderProps) => {

    const categoryConfig = config[category] || config['AI/ML'];

    return (
        <div className={`flex items-center justify-center w-full h-full
         ${categoryConfig.bgColor} ${categoryConfig.color}`}>
            <div className="text-center">
                {categoryConfig.icon}
            </div>
        </div>
    );
};

export default ProjectPlaceholder;
