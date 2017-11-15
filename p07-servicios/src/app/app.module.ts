import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { MainModule } from './main/main.module';
import { LibrosMockService } from './services/libros-mock.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    MainModule,
    FormsModule
  ],
  providers: [
    LibrosMockService
  ],
  bootstrap: [AppComponent] // es la forma especial de importar el componente principal
})
export class AppModule { }
