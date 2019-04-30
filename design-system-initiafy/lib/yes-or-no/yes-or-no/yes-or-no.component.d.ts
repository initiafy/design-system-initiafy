import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { YesOrNoDialogData } from '../models/dialogData';
export declare class YesOrNoDialogComponent implements OnInit {
    dialogRef: MatDialogRef<YesOrNoDialogComponent>;
    data: YesOrNoDialogData;
    constructor(dialogRef: MatDialogRef<YesOrNoDialogComponent>, data: YesOrNoDialogData);
    ngOnInit(): void;
    closeDialog(): void;
}
