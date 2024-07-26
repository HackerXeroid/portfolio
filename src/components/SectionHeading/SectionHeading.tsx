import { Link } from "react-router-dom";

interface SectionHeadingProps {
  headingText: string;
  widthClass: string;
  viewAll?: boolean;
}

function SectionHeading({
  headingText,
  widthClass,
  viewAll,
}: SectionHeadingProps) {
  return (
    <div className="flex items-center gap-4 pb-12">
      <h2 className="font-medium text-3xl">
        <span className="text-primary">#</span>
        <span className="text-white">{headingText}</span>
      </h2>
      <hr className={`bg-primary h-0.5 w-1/2 border-none ${widthClass}`} />
      {viewAll && (
        <Link
          to="/projects"
          className="ml-auto text-white font-medium text-base"
        >
          View All ~~&gt;
        </Link>
      )}
    </div>
  );
}
export default SectionHeading;
