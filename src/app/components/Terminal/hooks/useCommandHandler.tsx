// useCommandHandler.tsx
import { KeyboardEvent } from "react";
import TimeStamp from "../textbox/TimeStamp"; // Assuming HistoryEntry is exported from this file

type ExecuteCommand = (command: string) => any[];

const useCommandHandler = (
  executeCommand: ExecuteCommand,
  commandComponents: { [key: string]: any },
  input: string,
  setInput: (input: string) => void,
  setHistory: (history: any[] | ((prevHistory: any[]) => any[])) => void,
  setIsCommandListVisible: (isVisible: boolean) => void
) => {
  return (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Tab") {
      e.preventDefault(); // Prevent the default tab key behavior
      const possibleCommands = Object.keys(commandComponents);
      const matchingCommand = possibleCommands.find((cmd) =>
        cmd.startsWith(input)
      );
      if (matchingCommand) {
        setInput(matchingCommand);
      }
    } else if (e.key === "Enter") {
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
