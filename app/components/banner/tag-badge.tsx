import { TagBadgeProps } from './banner.types';

const TagBadge = ({ label }: TagBadgeProps) => {
    return (
        <span className="px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-sm transition-all hover:bg-white/30">
      {label}
    </span>
    );
};

export default TagBadge;
