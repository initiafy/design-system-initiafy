import { OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { SnackBarData } from '../models/snack-bar-data';
export declare class SnackBarComponent implements OnInit {
    data: SnackBarData;
    private snackBar;
    constructor(data: SnackBarData, snackBar: MatSnackBar);
    ngOnInit(): void;
    dismiss(): void;
    action(): void;
}
