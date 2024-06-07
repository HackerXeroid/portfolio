import SkillsSection, {
  SkillCategory,
} from "../components/SkillsSection/SkillsSection";

interface SkillsPageProps {
  skills: SkillCategory[];
}

function SkillsPage({ skills }: SkillsPageProps) {
  return <SkillsSection skills={skills} />;
}
export default SkillsPage;
