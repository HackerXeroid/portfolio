export interface SkillCategoryProps {
  category: string;
  skills: string[];
  className?: string;
}

function SkillCategory({ category, skills }: SkillCategoryProps) {
  return (
    <div className={`border border-gray text-gray inline-block w-48`}>
      <h3 className="font-semibold text-base text-white p-2 border border-transparent border-b-gray">
        {category}
      </h3>
      <div className="p-2">{skills.join(" ")}</div>
    </div>
  );
}
export default SkillCategory;
