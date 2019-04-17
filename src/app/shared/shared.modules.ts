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
    MatTooltipModule
} from '@angular/material';
import {
    InitiafyButtonModule,
    InitiafyIconModule,
    InitiafyCardModule,
    InitiafyDataTableModule,
    InitiafySearchBarModule,
    InitiafyActionButtonModule
} from 'projects/design-system-initiafy/src/public_api';

@NgModule({
    declarations: [CodeComponent, DocumentationComponent],
    imports: [
        CommonModule,
        InitiafyButtonModule,
        InitiafyIconModule,
        InitiafyCardModule,
        InitiafyDataTableModule,
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
        MatTableModule,
        MatTooltipModule,
        FormsModule,
        ReactiveFormsModule,
        InitiafyIconModule,
        InitiafySearchBarModule,
        InitiafyCardModule,
        InitiafyActionButtonModule,
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
    ],
    exports: [
        CodeComponent, DocumentationComponent,
        CommonModule,
        InitiafyButtonModule,
        InitiafyIconModule,
        InitiafyCardModule,
        InitiafyDataTableModule,
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
        MatTableModule,
        MatTooltipModule,
        FormsModule,
        ReactiveFormsModule,
        InitiafyIconModule,
        InitiafySearchBarModule,
        InitiafyCardModule,
        InitiafyActionButtonModule,
        MarkdownModule
    ]
})
export class SharedModule { }
