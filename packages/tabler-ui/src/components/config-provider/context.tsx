import { h } from '@stencil/core';
import { createProviderConsumer } from '@stencil/state-tunnel';

export interface TunnelState {
  prefixCls: string;
}

export default createProviderConsumer<TunnelState>(
  {
    prefixCls: 'tblr',
  },
  (subscribe, child) => <context-consumer subscribe={subscribe} renderer={child} />,
);
