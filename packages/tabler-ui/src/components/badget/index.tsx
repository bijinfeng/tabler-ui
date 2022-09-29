import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'tabler-badget',
  styleUrl: 'style.scss',
})
export class TablerBadget {
  /** 类型 */
  @Prop() type = 'primary';

  render() {
    return (
      <div></div>
    )
  }
}
