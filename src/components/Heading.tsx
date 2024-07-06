type HeadingProps = {
  children: string;
};

const Heading = (props: HeadingProps) => {
  console.log(props);
  return <div>{props.children}</div>;
};

export default Heading;
