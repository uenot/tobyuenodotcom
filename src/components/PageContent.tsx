import React from "react";

type Props = { children: React.ReactNode };

const PageContent = (props: Props) => {
  return (
    <div className="max-w-180 flex flex-col items-center justify-center space-y-3">
      {props.children}
    </div>
  );
};

export default PageContent;
