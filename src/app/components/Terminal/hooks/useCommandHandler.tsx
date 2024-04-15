import { KeyboardEvent, useState } from "react";
import TimeStamp from "../textbox/TimeStamp";

type ExecuteCommand = (command: string) => any[];

const useCommandHandler = (
  executeCommand: ExecuteCommand,
  commandComponents: { [key: string]: any },
  input: string,
  setInput: (input: string) => void,
  setHistory: (history: any[] | ((prevHistory: any[]) => any[])) => void,
  setIsCommandListVisible: (isVisible: boolean) => void
) => {
  const [commandIndex, setCommandIndex] = useState(0);

  return (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Tab") {
      e.preventDefault();
      const possibleCommands = Object.keys(commandComponents);

      if (!input || input === possibleCommands[commandIndex]) {
        const newCommandIndex = (commandIndex + 1) % possibleCommands.length;
        setCommandIndex(newCommandIndex);
        setInput(possibleCommands[newCommandIndex]);
      } else {
        const matchingCommand = possibleCommands.find((cmd) =>
          cmd.startsWith(input)
        );
        if (matchingCommand) {
          setInput(matchingCommand);
        }
      }
    }

    if (e.key === "l" && e.ctrlKey) {
      setHistory([]);
      setInput("");
      e.preventDefault();
      return;
    }

    if (e.key === "Enter") {
      const command = input.trim();
      const newEntries = executeCommand(command);
      setHistory((prev: any[]) => [
        ...prev,
        <TimeStamp key={prev.length}>{`> ${command}`}</TimeStamp>,
        ...newEntries,
      ]);
      setInput("");
      setIsCommandListVisible(false);
    }
  };
};

export default useCommandHandler;
