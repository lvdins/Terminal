"use client";
import React, { useState, useEffect, useRef, ReactNode } from "react";
import { Git } from "../Git/git";
import Main from "../Main/main";
import Bio from "../Bio/bio";
import Skills from "../Skills/skills";
import TimeStamp from "./textbox/TimeStamp";
import useCommandExecution from "./hooks/useCommandExecution";
import useCommandHandler from "./hooks/useCommandHandler";
import CommandList from "./textbox/CommandList";
import TerminalWindow from "./textbox/TerminalWindow";

const commandComponents: { [key: string]: React.FC } = {
  git: Git,
  help: Main,
  bio: Bio,
  skills: Skills,
};

const useFocus = (id: string) => {
  useEffect(() => {
    document.getElementById(id)?.focus();
  }, []);
};

const Terminal = () => {
  const [input, setInput] = useState("");
  const [path, setPath] = useState("DinsKaln/portfolio/main");
  const [history, setHistory] = useState<string[]>([]);
  const endOfTerminalRef = useRef<HTMLDivElement | null>(null);
  const [isCommandListVisible, setIsCommandListVisible] = useState(true);

  useFocus("terminal-input");

  const executeCommand = useCommandExecution(
    commandComponents,
    setPath,
    history.length
  );

  const handleCommand = useCommandHandler(
    executeCommand,
    commandComponents,
    input,
    setInput,
    setHistory,
    setIsCommandListVisible
  );

  useEffect(() => {
    endOfTerminalRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  return (
    <div>
      <TerminalWindow
        path={path}
        isCommandListVisible={isCommandListVisible}
        history={history}
        endOfTerminalRef={endOfTerminalRef}
        input={input}
        setInput={setInput}
        handleCommand={handleCommand}
        children={undefined}
      />
    </div>
  );
};
export default Terminal;
