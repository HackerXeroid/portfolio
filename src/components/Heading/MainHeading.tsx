interface MainHeadingProps {
  name: string;
  jobs: string[];
}

function MainHeading({ name, jobs }: MainHeadingProps) {
  return (
    <h1 className="text-3xl font-semibold text-white mb-8">
      {name} is a{" "}
      {jobs.slice(0, -1).map((job, index) => {
        return (
          <span key={index} className="text-primary">
            {job}
            {index < jobs.length - 2 ? ", " : ""}
          </span>
        );
      })}{" "}
      and <span className="text-primary">{jobs[jobs.length - 1]}</span>
    </h1>
  );
}
export default MainHeading;
