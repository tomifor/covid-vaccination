import React from 'react';

type Props = {
  children: any;
  title: string;
  customClass: string;
};

const ChartContainer = ({children, title}: Props): JSX.Element => {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
};

export default ChartContainer;
