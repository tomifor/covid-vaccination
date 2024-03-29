import React from 'react';

type Props = {
  children: any;
  title: string;
  customClass?: string;
};

const ChartContainer = ({children, title, customClass}: Props): JSX.Element => {
  return (
    <div>
      <h2 className="p-text-center p-mb-1 p-mt-4 ">{title}</h2>
      <div className={'p-pr-2 p-pl-1'}>{children}</div>
    </div>
  );
};

export default ChartContainer;
