import { EventEmitter, OnInit } from '@angular/core';
export declare class ButtonComponent implements OnInit {
    /** Design of the button */
    design: 'main' | 'stroke' | 'basic' | 'white';
    /** Color palette of the button */
    color: 'primary' | 'secondary';
    /** Text label for the button  */
    label: string;
    /** Type attribute of the button */
    type: 'submit' | 'reset' | 'button';
    /** Icon name of icon to appear */
    icon: string;
    /** Icon library to whivh the icon belongs */
    iconFont: 'initiafy' | 'glyphicon' | 'font-awesome-brand' | 'font-awesome-solid' | 'material-icons' | 'material-outlined';
    /** Additional css classes to apply to the button */
    cssClass: string;
    /** Text for the button's tooltip */
    tooltip: string;
    /** Disable state of the button */
    disabled: boolean;
    /** Hide label on mobile screens  */
    hideLabelOnMobile: boolean;
    /** Method called when button is clicked */
    callback: EventEmitter<{}>;
    constructor();
    ngOnInit(): void;
    readonly classes: "basic" | "main" | "stroke" | "white";
}
