import { Component, Element, Prop, Event, h, EventEmitter, Host } from '@stencil/core';

@Component({
  tag: 'tabler-checkbox',
})
export class TablerCheckbox {
  @Element() el: HTMLElement;

  @Prop() checked: boolean;

  @Prop() disabled: boolean = false;

  @Event() change: EventEmitter<boolean>;

  onCheckChange = (e: any) => {
    this.change.emit(e.target.checked);
    console.log(e);
  };

  render() {
    return (
      <label class="flex">
        <input type="checkbox" onChange={this.onCheckChange} />
        <span>
          <slot />
        </span>
      </label>
    );
  }
}
