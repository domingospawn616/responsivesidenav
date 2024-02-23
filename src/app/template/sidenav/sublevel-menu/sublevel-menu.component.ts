import { Component, Input } from '@angular/core';
import { INavData } from '../../nav-data';
import { ISideNavToggle } from '../sidenavtoogle';

@Component({
  selector: 'app-sublevel-menu',
  standalone: true,
  imports: [],
  templateUrl: './sublevel-menu.component.html',
  styleUrl: '../sidenav.component.scss'
})
export class SublevelMenuComponent {

  @Input() data: INavData = {
    routeLink: '',
    icon: '',
    label: '',
    items: []
  }
  @Input() collapsed: boolean = false;
  @Input() animating: boolean | undefined;
  @Input() expanded: boolean | undefined;
  @Input() multiple: boolean = false;
}
