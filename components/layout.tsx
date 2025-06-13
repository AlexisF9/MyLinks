import { PropsWithChildren } from "react";

export const LayoutPage = (props: PropsWithChildren) => {
  return (
    <div className="flex flex-col max-w-7xl mx-auto px-4 min-h-full h-full">
      {props.children}
    </div>
  );
};
