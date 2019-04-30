import { OnInit } from '@angular/core';
export declare class IconComponent implements OnInit {
    icon: string;
    iconFont: 'initiafy' | 'glyphicon' | 'font-awesome-brand' | 'font-awesome-solid' | 'material-icons' | 'material-outlined';
    size: 'smaller' | 'small' | 'medium' | 'big';
    cssClass: string;
    tooltip: string;
    constructor();
    ngOnInit(): void;
    readonly iconClasses: string;
    readonly showText: boolean;
}
