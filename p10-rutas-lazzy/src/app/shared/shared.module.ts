import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PieComponent } from './pie/pie.component';
import { CabezaComponent } from './cabeza/cabeza.component';
import { LogoComponent } from './logo/logo.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    CabezaComponent,
    PieComponent,
    LogoComponent,
    MenuComponent
  ],
  exports: [
    CabezaComponent,
    PieComponent,
    MenuComponent
  ]
})
export class SharedModule { }
