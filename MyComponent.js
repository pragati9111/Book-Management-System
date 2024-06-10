import React, { Profiler } from 'react';

const onRenderCallback = (
  id, // the "id" prop of the Profiler tree that has just committed
  phase, // either "mount" or "update"
  actualDuration, // time spent rendering the committed update
  baseDuration, // estimated time to render the entire subtree without memoization
  startTime, // when React began rendering this update
  commitTime, // when React committed this update
  interactions // the Set of interactions belonging to this update
) => {
  console.log({ id, phase, actualDuration, baseDuration, startTime, commitTime, interactions });
};

const MyComponent = () => {
  return (
    <Profiler id="MyComponent" onRenderCallback={onRenderCallback}>
      <div>My Component Content</div>
    </Profiler>
  );
};

export default MyComponent;
