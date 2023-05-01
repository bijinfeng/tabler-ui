---
title: Checkbox 开关
nav: 组件
---

## Checkbox 开关

### Default

```jsx
import React from 'react';
import { TablerCheckbox } from '@kebai/tabler-react';

export default () => {
  const onChange = (e) => {
    console.log(e);
  };

  return (
    <div style={{ display: 'flex', gap: 5 }}>
      <TablerCheckbox onChange={onChange}>Checkbox input</TablerCheckbox>
    </div>
  );
};
```
