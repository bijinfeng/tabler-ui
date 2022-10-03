import { Component, h, Prop, Host } from '@stencil/core';
import Tunnel from '../config-provider/context';

@Component({
  tag: 'tabler-progress',
  styleUrl: 'style.scss',
})
export class TablerProgress {
  @Prop() prefixCls: string;

  /** 百分比 */
  @Prop() percent: number;

  render() {
    const baseCls = `${this.prefixCls}-progress`;

    return (
      <Host class={baseCls}>
        <div>
          <slot />
        </div>
      </Host>
    );
  }
}

Tunnel.injectProps(TablerProgress, ['prefixCls']);
