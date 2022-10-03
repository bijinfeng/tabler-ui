import { Component, h, Prop, Host } from '@stencil/core';
import cls from 'classnames';
import Tunnel from '../config-provider/context';
import { Colors } from '../../types';

export type LoadingType = 'spinner' | 'grow';
export type LoadingSize = 'default' | 'small';

@Component({
  tag: 'tabler-loading',
  styleUrl: 'style.scss',
})
export class TablerLoading {
  @Prop() prefixCls: string;

  /** 颜色 */
  @Prop() color: Colors = 'blue';
  /** 样式 */
  @Prop() type: LoadingType = 'spinner';
  /** 大小 */
  @Prop() size: LoadingSize = 'default';

  render() {
    const baseCls = `${this.prefixCls}-loading`;

    return (
      <Host class={cls(baseCls, `${baseCls}-${this.color}`, {
        [`${baseCls}-grow`]: this.type === 'grow',
        [`${baseCls}-sm`]: this.size === 'small',
      })} />
    );
  }
}

Tunnel.injectProps(TablerLoading, ['prefixCls']);
