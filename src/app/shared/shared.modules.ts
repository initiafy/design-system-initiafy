import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeComponent } from './code/code.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';
import { HttpClient } from '@angular/common/http';
import {
    MatTableModule,
    MatCardModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatSelectModule,
    MatPaginatorModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatDividerModule
} from '@angular/material';
import {
    InitiafyHeaderModule,
    InitiafySidenavModule,
    InitiafyContentModule,
    InitiafyActionBarModule,
    InitiafyActionButtonModule,
    InitiafyButtonModule,
    InitiafyCardModule,
    InitiafyDataTableModule,
    InitiafyIconModule,
    InitiafyLoadingCardModule,
    InitiafyModalModule,
    InitiafyProgressBarModule,
    InitiafySpinnerModule,
    InitiafyRatingModule,
    InitiafyPopoverModule
} from 'projects/design-system-initiafy/src/public_api';

@NgModule({
    declarations: [
        CodeComponent,
        DocumentationComponent
    ],
    imports: [
        CommonModule,
        MatCardModule,
        MatCheckboxModule,
        MatDividerModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatSelectModule,
        MatPaginatorModule,
        MatSidenavModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatTableModule,
        MatTooltipModule,
        FormsModule,
        ReactiveFormsModule,
        MarkdownModule.forRoot({
            loader: HttpClient,
            markedOptions: {
                provide: MarkedOptions,
                useValue: {
                    gfm: true,
                    tables: true,
                    breaks: false,
                    pedantic: false,
                    sanitize: false,
                    smartLists: true,
                    smartypants: false
                }
            }
        }),
        // Design System
        InitiafyHeaderModule,
        InitiafySidenavModule,
        InitiafyContentModule,
        InitiafyActionBarModule,
        InitiafyActionButtonModule,
        InitiafyButtonModule,
        InitiafyCardModule,
        InitiafyDataTableModule,
        InitiafyIconModule,
        InitiafyLoadingCardModule,
        InitiafyModalModule,
        InitiafyProgressBarModule,
        InitiafyRatingModule,
        InitiafySpinnerModule,
        InitiafyPopoverModule
    ],
    exports: [
        CodeComponent, DocumentationComponent,
        CommonModule,
        MatCardModule,
        MatCheckboxModule,
        MatDividerModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatSelectModule,
        MatPaginatorModule,
        MatSidenavModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatTableModule,
        MatTooltipModule,
        FormsModule,
        ReactiveFormsModule,
        MarkdownModule,
        // Design System
        InitiafyHeaderModule,
        InitiafySidenavModule,
        InitiafyContentModule,
        InitiafyActionBarModule,
        InitiafyActionButtonModule,
        InitiafyButtonModule,
        InitiafyCardModule,
        InitiafyDataTableModule,
        InitiafyIconModule,
        InitiafyLoadingCardModule,
        InitiafyModalModule,
        InitiafyProgressBarModule,
        InitiafyRatingModule,
        InitiafySpinnerModule,
        InitiafyPopoverModule
    ]
})
export class SharedModule { }
