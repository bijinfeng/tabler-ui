import {Component, h, Prop, Listen} from '@stencil/core'
import Tunnel from '../config-provider/context';

@Component({
  tag: 'tabler-checkbox',
  styleUrl: 'style.scss',
})
export class TablerCheckbox {
  @Prop() prefixCls: string;

  @Prop({reflect: true}) checked = false

  @Prop({reflect: true}) disabled = false

  @Prop() label: string

  @Listen('change')
  changeHandler() {
    if (this.disabled) return
    this.checked = !this.checked
  }

  render() {
    const baseCls = `${this.prefixCls}-checkbox`;

    return (
      <label class={baseCls}>
        <input type="checkbox" class={`${baseCls}_input`} value=""></input>
        <span class={`${baseCls}_core`}></span>
        {this.label && <span class={`${baseCls}_label`}>{this.label}</span>}
      </label>
    )
  }
}

Tunnel.injectProps(TablerCheckbox, ['prefixCls']);
