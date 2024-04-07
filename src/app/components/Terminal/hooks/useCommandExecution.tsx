// useCommandExecution.tsx
import { ReactNode, ReactElement } from "react";

type CommandComponents = { [key: string]: React.FC };

const useCommandExecution =
  (
    commandComponents: CommandComponents,
    setPath: (path: string) => void,
    historyLength: number
  ) =>
  (command: string): ReactNode[] => {
    const CommandComponent = commandComponents[command];
    if (CommandComponent) {
      setPath(`DinsKaln/portfolio/${command}`);
      return [<CommandComponent key={historyLength + 1} />];
    } else {
      return [
        "Error: command not found. Available commands: git, bio, help, skills, ctrl + l ",
      ];
    }
  };

export default useCommandExecution;
