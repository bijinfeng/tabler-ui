/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { BadgetColor } from "./components/badge/types";
import { SwitchSize } from "./components/switch/types";
export namespace Components {
    interface ConfigProvider {
        "prefixCls": string;
    }
    interface TablerBadge {
        /**
          * 标签颜色
         */
        "color": BadgetColor;
        /**
          * 点击跳转的地址，指定此属性按钮的行为和 a 链接一致
         */
        "href": string;
        "light": boolean;
        "outline": boolean;
        "pill": boolean;
        "prefixCls": string;
        /**
          * 相当于 a 链接的 `target` 属性，`href` 存在时生效
         */
        "target": string;
    }
    interface TablerButton {
        /**
          * 是否独占一行
         */
        "block": boolean;
        /**
          * 是否圆形按钮
         */
        "circle": boolean;
        /**
          * 是否禁用状态
         */
        "disabled": boolean;
        /**
          * 图标类名
         */
        "icon": string;
        /**
          * loading
         */
        "loading": boolean;
        /**
          * 是否朴素按钮
         */
        "plain": boolean;
        /**
          * 是否圆角按钮
         */
        "round": boolean;
        "size": string;
        /**
          * 类型
         */
        "type": string;
    }
    interface TablerCheckbox {
        "checked": boolean;
        "disabled": boolean;
        "label": string;
        "prefixCls": string;
    }
    interface TablerSwitch {
        /**
          * 打开状态的受控值
         */
        "checked": boolean;
        /**
          * 不可用状态
         */
        "disabled": boolean;
        "prefixCls": string;
        /**
          * 开关尺寸
         */
        "size": SwitchSize;
    }
}
declare global {
    interface HTMLConfigProviderElement extends Components.ConfigProvider, HTMLStencilElement {
    }
    var HTMLConfigProviderElement: {
        prototype: HTMLConfigProviderElement;
        new (): HTMLConfigProviderElement;
    };
    interface HTMLTablerBadgeElement extends Components.TablerBadge, HTMLStencilElement {
    }
    var HTMLTablerBadgeElement: {
        prototype: HTMLTablerBadgeElement;
        new (): HTMLTablerBadgeElement;
    };
    interface HTMLTablerButtonElement extends Components.TablerButton, HTMLStencilElement {
    }
    var HTMLTablerButtonElement: {
        prototype: HTMLTablerButtonElement;
        new (): HTMLTablerButtonElement;
    };
    interface HTMLTablerCheckboxElement extends Components.TablerCheckbox, HTMLStencilElement {
    }
    var HTMLTablerCheckboxElement: {
        prototype: HTMLTablerCheckboxElement;
        new (): HTMLTablerCheckboxElement;
    };
    interface HTMLTablerSwitchElement extends Components.TablerSwitch, HTMLStencilElement {
    }
    var HTMLTablerSwitchElement: {
        prototype: HTMLTablerSwitchElement;
        new (): HTMLTablerSwitchElement;
    };
    interface HTMLElementTagNameMap {
        "config-provider": HTMLConfigProviderElement;
        "tabler-badge": HTMLTablerBadgeElement;
        "tabler-button": HTMLTablerButtonElement;
        "tabler-checkbox": HTMLTablerCheckboxElement;
        "tabler-switch": HTMLTablerSwitchElement;
    }
}
declare namespace LocalJSX {
    interface ConfigProvider {
        "prefixCls"?: string;
    }
    interface TablerBadge {
        /**
          * 标签颜色
         */
        "color"?: BadgetColor;
        /**
          * 点击跳转的地址，指定此属性按钮的行为和 a 链接一致
         */
        "href"?: string;
        "light"?: boolean;
        "outline"?: boolean;
        "pill"?: boolean;
        "prefixCls"?: string;
        /**
          * 相当于 a 链接的 `target` 属性，`href` 存在时生效
         */
        "target"?: string;
    }
    interface TablerButton {
        /**
          * 是否独占一行
         */
        "block"?: boolean;
        /**
          * 是否圆形按钮
         */
        "circle"?: boolean;
        /**
          * 是否禁用状态
         */
        "disabled"?: boolean;
        /**
          * 图标类名
         */
        "icon"?: string;
        /**
          * loading
         */
        "loading"?: boolean;
        /**
          * 是否朴素按钮
         */
        "plain"?: boolean;
        /**
          * 是否圆角按钮
         */
        "round"?: boolean;
        "size"?: string;
        /**
          * 类型
         */
        "type"?: string;
    }
    interface TablerCheckbox {
        "checked"?: boolean;
        "disabled"?: boolean;
        "label"?: string;
        "prefixCls"?: string;
    }
    interface TablerSwitch {
        /**
          * 打开状态的受控值
         */
        "checked"?: boolean;
        /**
          * 不可用状态
         */
        "disabled"?: boolean;
        "prefixCls"?: string;
        /**
          * 开关尺寸
         */
        "size"?: SwitchSize;
    }
    interface IntrinsicElements {
        "config-provider": ConfigProvider;
        "tabler-badge": TablerBadge;
        "tabler-button": TablerButton;
        "tabler-checkbox": TablerCheckbox;
        "tabler-switch": TablerSwitch;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "config-provider": LocalJSX.ConfigProvider & JSXBase.HTMLAttributes<HTMLConfigProviderElement>;
            "tabler-badge": LocalJSX.TablerBadge & JSXBase.HTMLAttributes<HTMLTablerBadgeElement>;
            "tabler-button": LocalJSX.TablerButton & JSXBase.HTMLAttributes<HTMLTablerButtonElement>;
            "tabler-checkbox": LocalJSX.TablerCheckbox & JSXBase.HTMLAttributes<HTMLTablerCheckboxElement>;
            "tabler-switch": LocalJSX.TablerSwitch & JSXBase.HTMLAttributes<HTMLTablerSwitchElement>;
        }
    }
}
