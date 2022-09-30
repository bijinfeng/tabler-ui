import { Component, h, Prop, Listen, Host } from '@stencil/core';
import cls from 'classnames';
import Tunnel from '../config-provider/context';
import type { SwitchSize } from './types';

@Component({
  tag: 'tabler-switch',
  styleUrl: 'style.scss',
})
export class TablerSwitch {
  @Prop() prefixCls: string;

  /** 打开状态的受控值 */
  @Prop({ reflect: true }) checked = false;
  /** 不可用状态 */
  @Prop({ reflect: true }) disabled = false;
  /** 开关尺寸 */
  @Prop() size: SwitchSize = 'small';

  @Listen('change')
  changeHandler() {
    if (this.disabled) return;
    this.checked = !this.checked;
  }

  render() {
    const baseCls = `${this.prefixCls}-switch`;

    return (
      <Host class={cls(baseCls, { [`${baseCls}-lg`]: this.size === 'large' })}>
        <input type="checkbox" disabled={this.disabled} class={`${baseCls}_input`} checked={this.checked} />
        <slot />
      </Host>
    );
  }
}

Tunnel.injectProps(TablerSwitch, ['prefixCls']);
