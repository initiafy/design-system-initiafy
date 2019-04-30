import { EventEmitter } from '@angular/core';
export declare class ActionButtonComponent {
    label: string;
    icon: string;
    iconFont: 'initiafy' | 'glyphicon' | 'font-awesome-brand' | 'font-awesome-solid' | 'material-icons' | 'material-outlined';
    tooltip: string;
    cssClass: string;
    size: 'small' | 'big' | 'bigger';
    disabled: boolean;
    callback: EventEmitter<{}>;
    constructor();
    readonly classes: string;
}
