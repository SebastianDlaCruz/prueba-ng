import { Component, Input } from '@angular/core';
import { StateEvent } from '../../../core/models/events';

@Component({
  selector: 'app-state-event',
  templateUrl: './state-event.component.html',
  styleUrl: './state-event.component.css'
})
export class StateEventComponent {
  @Input() state = 0;
}
