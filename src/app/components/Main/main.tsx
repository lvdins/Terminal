// components/Main.tsx
import React from "react";

const Main = () => {
  const commands = ["bio, git, help, ctrl+l, skills"];
  return (
    <div>
      <h1>Please choose one of the following commands to proceed!</h1>
      <p>Available commands: {commands.join(", ")}</p>
    </div>
  );
};

export default Main;
