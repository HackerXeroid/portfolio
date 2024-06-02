interface LineBreakProps {
  times?: number;
}

const LineBreak = ({ times = 1 }: LineBreakProps) => {
  return (
    <>
      {Array.from({ length: times }).map((_, i) => (
        <br key={i} />
      ))}
    </>
  );
};

export default LineBreak;
