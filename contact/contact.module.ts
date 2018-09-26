import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorService } from './services/calculator.service';
import { ContactformComponent } from './contactform/contactform.component';

@NgModule({
  declarations: [ContactformComponent],
  providers : [CalculatorService],
  imports: [
    CommonModule
  ],
  exports : [ContactformComponent]
 
})
export class ContactModule { }



