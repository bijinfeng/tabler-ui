import {Component, h, Prop, Listen} from '@stencil/core'

@Component({
  tag: 'tabler-checkbox',
  styleUrl: 'style.scss',
})
export class TablerCheckbox {
  @Prop({reflect: true}) checked = false

  @Prop({reflect: true}) disabled = false

  @Prop() label: string

  @Listen('change')
  changeHandler() {
    if (this.disabled) return
    this.checked = !this.checked
  }

  render() {
    return (
      <label class="tabler-checkbox">
        <input type="checkbox" class="tabler-checkbox_input" value=""></input>
        <span class="tabler-checkbox_core"></span>
        {this.label && <span class="tabler-checkbox_label">{this.label}</span>}
      </label>
    )
  }
}