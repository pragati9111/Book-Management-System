import React from 'react';

const OptimizedComponent = React.memo(({ data }) => {
  return <div>{data}</div>;
});

export default OptimizedComponent;
