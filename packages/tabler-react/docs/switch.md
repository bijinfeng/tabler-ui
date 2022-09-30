---
title: Switch 开关
---

## Switch 开关

### Default

```jsx
import React from 'react';
import { Switch } from '@kebai/tabler-react';

export default () => {
  return (
    <div style={{ display: 'flex', gap: 5 }}>
      <Switch />
      <Switch checked />
      <Switch disabled />
      <Switch disabled checked />
      <Switch size="large" />
    </div>
  );
};
```
