interface SkillCategoryProps {
  category: string;
  skills: string[];
  className?: string;
}

function SkillCategory({ category, skills, className }: SkillCategoryProps) {
  return (
    <div
      className={`border border-gray text-gray min-w-min-content inline-block ${className}`}
    >
      <h3 className="font-semibold text-base text-white p-2 border border-transparent border-b-gray">
        {category}
      </h3>
      <div className="p-2">{skills.join(" ")}</div>
    </div>
  );
}
export default SkillCategory;
