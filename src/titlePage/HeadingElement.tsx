import React, { FunctionComponent } from 'react';

const HeadingElement: FunctionComponent = (props) => {
  const { children } = props;
  return <h1 className="pb-3 mb-2 display-3 d-inline">{children}</h1>;
};
export default HeadingElement;
