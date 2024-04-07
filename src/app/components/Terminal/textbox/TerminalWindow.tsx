// TerminalWindow.tsx
import React, { ReactNode } from "react";
import CommandList from "./CommandList";

type TerminalWindowProps = {
  path: string;
  isCommandListVisible: boolean;
  children: ReactNode;
  history: ReactNode[];
  endOfTerminalRef: React.RefObject<HTMLDivElement>;
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  handleCommand: (event: React.KeyboardEvent<HTMLInputElement>) => void;
};

const TerminalWindow: React.FC<TerminalWindowProps> = ({
  path,
  isCommandListVisible,
  history,
  endOfTerminalRef,
  input,
  setInput,
  handleCommand,
}) => (
  <div className="flex items-center justify-center h-screen text-green-400 font-mono">
    <div className="rounded-lg overflow-hidden shadow-lg bg-gray-800 p-4 w-1/2 h-3/4 ">
      <div className="sticky top-0 z-10 bg-gray-800">
        <div className="flex justify-between items-center text-sm text-gray-500 border-b border-gray-700 py-2 px-3">
          <div className="flex space-x-1">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div>bash</div>
        </div>
        <p className="text-gray-300">
          Todays is :
          {new Intl.DateTimeFormat("en-GB", { dateStyle: "full" }).format(
            new Date()
          )}
        </p>
        <p>Current path: {path}</p>
      </div>
      <div className="mt-4 ml-2 text-white overflow-hidden">
        {isCommandListVisible && (
          <div>
            <CommandList />
          </div>
        )}
      </div>
      <div
        className="text-white p-3 overflow-auto bg-gray-800 "
        style={{ maxHeight: "60vh" }}
      >
        {history.map((line: ReactNode, index: number) => (
          <div key={index}>{line}</div>
        ))}
        <div ref={endOfTerminalRef}></div>
      </div>
      <div className="flex items-center">
        <p className="mb-0">macbookpro@guest-MBP ~ %</p>
        <input
          id="terminal-input"
          className="flex-grow bg-gray-800 ml-2 text-white outline-none"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleCommand}
          autoComplete="off"
          placeholder="Enter a command..."
          style={{ caretColor: "green", caretShape: "block" }}
        />
      </div>
    </div>
  </div>
);

export default TerminalWindow;
