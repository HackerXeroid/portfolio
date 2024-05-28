interface CurrentlyWorkingOnProps {
  currProject: string;
}

function CurrentlyWorkingOn({ currProject }: CurrentlyWorkingOnProps) {
  return (
    <div className="py-2 px-6 border border-white w-full flex items-center top-0">
      <div className="w-4 h-4 bg-primary mr-3 inline-block"></div>
      <p className="text-gray">
        Currently working on{" "}
        <span className="font-semibold text-white">{currProject}</span>
      </p>
    </div>
  );
}
export default CurrentlyWorkingOn;
