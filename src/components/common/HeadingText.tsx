const HeadingText = ({
  headingText1,
  headingText2,
  paragraph,
  className,
  colored,
}: any) => {
  return (
    <>
      <h4 className="text-2xl md:text-4xl md:mb-5 font-extralight">
        {headingText1} <br />
        <strong className={`font-medium ${colored}`}>{headingText2}</strong>
      </h4>
      <p
        className={`text-sm font-extralight ${
          className ? className : "w-3/5 mx-auto"
        }`}
      >
        {paragraph}
      </p>
    </>
  );
};

export default HeadingText;
