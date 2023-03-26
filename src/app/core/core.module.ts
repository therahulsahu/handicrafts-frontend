import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../sharedM/shared.module';



@NgModule({
  declarations: [HeaderComponent,FooterComponent],
  imports: [RouterModule,SharedModule],
  exports: [HeaderComponent,FooterComponent,SharedModule]
})
export class CoreModule { }
