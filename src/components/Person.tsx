import React from "react";

type personDataType = {
  data: {
    name: string;
    age: number;
  };
};
const Person = (props: personDataType) => {
  return (
    <div>
      This is {props.data?.name} and I am {props?.data?.age} years old.
    </div>
  );
};

export default Person;
