import { OnInit, EventEmitter } from '@angular/core';
export declare class ModalComponent implements OnInit {
    overlay: boolean;
    hideCloseButton: boolean;
    close: EventEmitter<{}>;
    constructor();
    ngOnInit(): void;
}
