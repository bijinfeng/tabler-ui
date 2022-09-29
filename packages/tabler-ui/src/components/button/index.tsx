/** @format */

import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'tabler-button',
  styleUrl: 'style.scss',
})
export class TablerButton {
  /** 类型 */
  @Prop() type = 'primary';

  /** 是否朴素按钮 */
  @Prop() plain = false;

  /** 是否圆角按钮 */
  @Prop() round = false;

  /** 图标类名 */
  @Prop() icon: string;

  /** 是否圆形按钮 */
  @Prop() circle = false;

  /** 是否禁用状态 */
  @Prop() disabled = false;

  @Prop() size = 'default';

  /** 是否独占一行 */
  @Prop() block = false;

  /** loading */
  @Prop() loading = false;

  render() {
    return (
      <button
        class={{
          'tabler-button': true,
          [`tabler-button${this.plain ? '_plain' : ''}_${this.type}`]: true,
          'is-round': this.round,
          'is-circle': this.circle,
          'is-disabled': this.loading || this.disabled,
          [`is-${this.size}`]: true,
          'is-block': this.block,
          'is-loading': this.loading,
        }}
        disabled={this.disabled || this.loading}
      >
        {this.loading && <tabler-loading class="tabler-button_icon tabler-button_loading_icon"></tabler-loading>}
        {this.icon && <tabler-icon name={this.icon} class="tabler-button_icon"></tabler-icon>}
        <span class="tabler-icon_content">
          <slot></slot>
        </span>
      </button>
    );
  }
}
