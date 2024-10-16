import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StateEventComponent } from './state-event.component';
import { TagModule } from 'primeng/tag';


@NgModule({
  declarations: [
    StateEventComponent
  ],
  imports: [
    CommonModule,
    TagModule
  ],
  exports: [StateEventComponent]
})
export class StateEventModule { }
