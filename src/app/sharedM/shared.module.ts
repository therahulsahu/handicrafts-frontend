import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule} from "@angular/material/form-field";
import { MatCardModule } from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
@NgModule(
  {
    declarations: [],
    imports: [FormsModule,
      CommonModule,ReactiveFormsModule,MatFormFieldModule,MatCardModule,MatToolbarModule,MatButtonModule],
    exports: [FormsModule,
      CommonModule,ReactiveFormsModule,MatFormFieldModule,MatCardModule,MatToolbarModule,MatButtonModule],
    providers: []
  }
)
export class SharedModule {

}
