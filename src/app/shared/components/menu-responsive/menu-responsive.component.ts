import { Component ,Input} from '@angular/core';
import { MegaMenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu-responsive',
  templateUrl: './menu-responsive.component.html',
  styleUrl: './menu-responsive.component.css'
})
export class MenuResponsiveComponent {
  @Input() items : MegaMenuItem[] | undefined = [];
}
