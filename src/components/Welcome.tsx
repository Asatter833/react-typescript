import React from "react";

type WelcomeProps = {
  name: string;
  workCount: number;
  isLogged: boolean;
};

const Welcome = (props: WelcomeProps) => {
  return (
    <div className="font-semibold mt-10">
      {props.isLogged
        ? `Welcome ${props.name}! You have ${props.workCount} works to complete.`
        : "Please Log in"}
    </div>
  );
};

export default Welcome;
