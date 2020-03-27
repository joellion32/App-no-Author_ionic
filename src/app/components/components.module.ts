import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ImageComponent } from './image/image.component';



@NgModule({
  declarations: [NavbarComponent, ImageComponent],
  imports: [
    CommonModule
  ], 
  exports: [
    NavbarComponent,
    ImageComponent
  ]
})
export class ComponentsModule { }
