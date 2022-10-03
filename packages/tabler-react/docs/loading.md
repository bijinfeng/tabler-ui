---
title: Loading 加载中
---

## Loading 加载中

### Default

```jsx
import React from 'react';
import { Loading } from '@kebai/tabler-react';

export default () => {
  return (
    <div style={{ display: 'flex', gap: 5 }}>
      <Loading />
    </div>
  );
};
```

### Colors

```jsx
import React from 'react';
import { Loading } from '@kebai/tabler-react';

export default () => {
  return (
    <div style={{ display: 'flex', gap: 5 }}>
      <Loading color="blue" />
      <Loading color="azure" />
      <Loading color="indigo" />
      <Loading color="purple" />
      <Loading color="pink" />
      <Loading color="red" />
      <Loading color="orange" />
      <Loading color="yellow" />
      <Loading color="lime" />
      <Loading color="green" />
      <Loading color="teal" />
      <Loading color="cyan" />
    </div>
  );
};
```

### Size

```jsx
import React from 'react';
import { Loading } from '@kebai/tabler-react';

export default () => {
  return (
    <div style={{ display: 'flex', gap: 5 }}>
      <Loading size="default" />
      <Loading size="small" />
    </div>
  );
};
```

### Growing spinner

```jsx
import React from 'react';
import { Loading } from '@kebai/tabler-react';

export default () => {
  return (
    <div style={{ display: 'flex', gap: 5 }}>
      <Loading type="grow" color="blue" />
      <Loading type="grow" color="azure" />
      <Loading type="grow" color="indigo" />
      <Loading type="grow" color="purple" />
      <Loading type="grow" color="pink" />
      <Loading type="grow" color="red" />
      <Loading type="grow" color="orange" />
      <Loading type="grow" color="yellow" />
      <Loading type="grow" color="lime" />
      <Loading type="grow" color="green" />
      <Loading type="grow" color="teal" />
      <Loading type="grow" color="cyan" />
    </div>
  );
};
```
