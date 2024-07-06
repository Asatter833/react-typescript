import React from "react";

// type StatusProps = {
//   status: string;
//   //this type will take any string value and the specified data will noot be shown in message text resulting an bugz
// };

type StatusProps = {
  status: "loading" | "success" | "error";
};
//this type will only take these 3 specified values as an props any other string will show an error.

const Status = (props: StatusProps) => {
  let message;
  if (props?.status === "loading") {
    message = "Loading...";
  } else if (props?.status === "success") {
    message = "Data fetched successfully!";
  } else if (props?.status === "error") {
    message = "Error fetching data";
  }

  console.log(props);
  return (
    <div>
      <h2>Status - {message}</h2>
    </div>
  );
};

export default Status;
