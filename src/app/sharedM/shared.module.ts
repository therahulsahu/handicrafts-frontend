import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule(
  {
    declarations: [],
    imports: [FormsModule,
      CommonModule,ReactiveFormsModule],
    exports: [FormsModule,
      CommonModule,ReactiveFormsModule],
    providers: []
  }
)
export class SharedModule {

}