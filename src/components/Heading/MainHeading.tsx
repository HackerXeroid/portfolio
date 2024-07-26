import { useTranslation } from "react-i18next";

interface MainHeadingProps {
  name: string;
  jobs: string[];
}

function MainHeading({ name, jobs }: MainHeadingProps) {
  const { t } = useTranslation();

  return (
    <h1 className="text-3xl font-semibold text-white mb-8">
      {t(name)} is a{" "}
      {jobs.slice(0, -1).map((job, index) => {
        return (
          <span key={index} className="text-primary">
            {t(job)}
            {index < jobs.length - 2 ? ", " : ""}
          </span>
        );
      })}{" "}
      and <span className="text-primary">{t(jobs[jobs.length - 1])}</span>
    </h1>
  );
}
export default MainHeading;
