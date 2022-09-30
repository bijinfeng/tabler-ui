import { Component, h, Prop, Host } from '@stencil/core';
import cls from 'classnames';
import Tunnel from '../config-provider/context';
import type { BadgetColor } from './types';

@Component({
  tag: 'tabler-badge',
  styleUrl: 'style.scss',
})
export class TablerBadge {
  @Prop() prefixCls: string;

  /** 标签颜色 */
  @Prop() color: BadgetColor;

  @Prop() outline = false;

  @Prop() pill = false;

  @Prop() light = false;

  /** 点击跳转的地址，指定此属性按钮的行为和 a 链接一致 */
  @Prop() href: string;

  /** 相当于 a 链接的 `target` 属性，`href` 存在时生效 */
  @Prop() target: string;

  render() {
    const baseCls = `${this.prefixCls}-badge`;

    return (
      <Host class={cls(baseCls, {
        [`${baseCls}-outline`]: this.outline,
        [`${baseCls}-pill`]: this.pill,
        [`${baseCls}-lt`]: this.light && this.color,
        [`${baseCls}-${this.color}`]: this.color,
      })}>
        {this.href ? <a class={`${baseCls}-link`} href={this.href} target={this.target}>{<slot />}</a> : <slot />}
      </Host>
    );
  }
}

Tunnel.injectProps(TablerBadge, ['prefixCls']);
