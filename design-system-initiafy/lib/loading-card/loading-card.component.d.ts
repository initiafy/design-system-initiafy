import { OnInit } from '@angular/core';
export declare class LoadingCardComponent implements OnInit {
    cssClass: string;
    size: 'small' | 'std' | 'medium' | 'big' | 'full';
    isLoading: boolean;
    constructor();
    ngOnInit(): void;
    readonly classes: string;
}
