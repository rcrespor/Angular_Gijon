import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BindingComponent } from './binding/binding.component';
import { FormsModule } from '@angular/forms';
import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    BindingComponent,
    PadreComponent,
    HijoComponent
  ],
  exports: [
    BindingComponent,
    PadreComponent,
    HijoComponent
  ]
})
export class MainModule { }
