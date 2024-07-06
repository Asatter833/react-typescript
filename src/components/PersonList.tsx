import React from "react";

type ContactListProps = {
  list: {
    name: string;
    age: number;
  }[];
};
const PersonList = (props: ContactListProps) => {
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
