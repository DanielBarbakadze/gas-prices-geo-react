import React from "react";

type BoxProps = {
  children: React.ReactNode;
  className?: string;
};

const Box = ({ children, className }: BoxProps) => {
  return (
    <div className={"rounded-20 bg-white-0 p-16 " + className || ""}>
      {children}
    </div>
  );
};

export default Box;
