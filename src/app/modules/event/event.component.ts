import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Events } from '../../core/models/events';
import { EventsService } from '../../core/services/events/events.service';
import { UserService } from '../../core/services/user/user.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrl: './event.component.css'
})
export class EventComponent implements OnInit {

  viewEvent: Events | null = null;
  private activeRouter = inject(ActivatedRoute);
  private event = inject(EventsService)
  private user = inject(UserService);
  

  ngOnInit(): void {
    this.activeRouter.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.event.getEvent(id).subscribe(event => {
          this.viewEvent = event
        })
      }
    })

  }
}
