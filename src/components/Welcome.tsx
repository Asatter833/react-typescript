import React from "react";

type WelcomeProps = {
  name: string;
  workCount: number;
};

const Welcome = (props: WelcomeProps) => {
  return (
    <div className="font-semibold mt-10">
      Welcome {props.name}! You have {props.workCount} works to complete.
    </div>
  );
};

export default Welcome;
