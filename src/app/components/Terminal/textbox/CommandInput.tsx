// CommandInput.tsx
import React, { KeyboardEventHandler } from "react";

type CommandInputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: KeyboardEventHandler<HTMLInputElement>;
};

const CommandInput: React.FC<CommandInputProps> = ({
  value,
  onChange,
  onKeyDown,
}) => (
  <div className="flex items-center space-x-2">
    <span className="text-green-400"></span>
    <input
      type="text"
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      className="bg-transparent text-green-400 w-full focus:outline-none"
      autoFocus
    />
  </div>
);

export default CommandInput;
