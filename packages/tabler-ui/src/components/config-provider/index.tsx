import { h, Component, Prop } from '@stencil/core';
import Tunnel, { TunnelState } from './context';

@Component({
  tag: 'config-provider',
})
export class ConfigProvider {
  @Prop() prefixCls = 'tblr';
  
  render() {
    const tunnelState: TunnelState = {
      prefixCls: this.prefixCls,
    };

    return (
      <Tunnel.Provider state={tunnelState}>
        <slot />
      </Tunnel.Provider>
    )
  }
}
