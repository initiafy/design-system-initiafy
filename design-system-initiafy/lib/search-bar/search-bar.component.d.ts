import { OnInit, EventEmitter } from '@angular/core';
export interface SearchItem {
    title: string;
    dataName: string;
}
export declare class SearchBarComponent implements OnInit {
    /** Placeholder text for the Input */
    placeholder: string;
    /** Color Scheme for the component */
    color: 'primary' | 'secondary';
    /** Initial Value for the Input */
    value: string;
    /** Text to display on expand button when component is collapsed */
    buttontext: string;
    /** Icon to display on button when component is collapsed */
    buttonicon: string;
    /** Event triggered when the form is submitted */
    search: EventEmitter<string>;
    collapsedValue: boolean;
    /** Whether the component is collapsed */
    collapsed: boolean;
    /** Event triggered when the collapsed state of the component is toggled */
    collapsedChange: EventEmitter<{}>;
    constructor();
    ngOnInit(): void;
    onSubmit(): void;
    unCollapse(): void;
}
