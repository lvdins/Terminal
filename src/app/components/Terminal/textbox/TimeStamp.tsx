import { ReactNode } from "react";

const TimeStamp = ({ children }: { children: ReactNode }) => {
  const timestamp = new Date().toLocaleTimeString();
  return (
    <div className="flex justify-between items-center w-full">
      <div>{children}</div>
      <span className="text-gray-500 text-xs">{timestamp}</span>
    </div>
  );
};

export default TimeStamp;
