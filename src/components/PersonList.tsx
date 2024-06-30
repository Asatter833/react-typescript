import React from "react";

type contactListProps = {
  list: {
    name: string;
    age: number;
  }[];
};
const PersonList = (props: contactListProps) => {
  return (
    <div>
      <p className="font-semibold text-lg">My Contact List</p>
      {props.list.map((contact) => (
        <h2 className="font-medium" key={contact.name}>
          {contact.name} {contact.age}
        </h2>
      ))}{" "}
    </div>
  );
};

export default PersonList;
