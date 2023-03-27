import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule} from "@angular/material/form-field";
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule} from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule, MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';

import { HttpClientModule } from  '@angular/common/http';

import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';

import { MatSnackBarModule } from "@angular/material/snack-bar";

@NgModule(
  {
    declarations: [],
    imports: [FormsModule,
      CommonModule,ReactiveFormsModule,MatFormFieldModule,
      MatCardModule,MatToolbarModule,MatButtonModule,MatDialogModule,MatSelectModule,
      MatOptionModule,MatInputModule,MatNativeDateModule,MatDatepickerModule,MatDialogModule,
      MatTableModule,MatPaginatorModule,MatSnackBarModule,HttpClientModule],
    exports: [FormsModule,
      CommonModule,ReactiveFormsModule,MatFormFieldModule,
      MatCardModule,MatToolbarModule,MatButtonModule,MatDialogModule,MatSelectModule,
      MatOptionModule,MatInputModule,MatNativeDateModule,MatDatepickerModule,MatDialogModule,
      MatTableModule,MatPaginatorModule,MatSnackBarModule,HttpClientModule],
    providers: []
  }
)
export class SharedModule {

}
