import React from 'react';

type Props = {
  children: any;
  title: string;
  customClass: string;
};

const ChartContainer = ({children, title}: Props): JSX.Element => {
  return (
    <div>
      <h2 className="p-text-center p-mb-1 p-mt-4">{title}</h2>
      <div>{children}</div>
    </div>
  );
};

export default ChartContainer;
