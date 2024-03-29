import { Component, Input } from '@angular/core';
import { INavData } from '../../nav-data';
import { MatIcon } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { fadeInOut } from '../sidenavtoogle';

@Component({
  selector: 'app-sublevel-menu',
  standalone: true,
  imports: [MatIcon, RouterModule],
  templateUrl: './sublevel-menu.component.html',
  styleUrl: '../sidenav.component.scss',
  animations: [
    fadeInOut,
    trigger('submenu', [
      state('hidden', style({
        height: '0',
        overflow: 'hidden'
      })),
      state('visible', style({
        height: '*'
      })),
      transition('visible <=> hidden', [style({overflow: 'hidden'}), 
        animate('{{transitionParams}}')]),
      transition('void => *', animate(0))
    ])
  ],
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

  constructor(public router: Router){}

  handleClick(pItem: any):void {
    if (!this.multiple){
      if(this.data.items && this.data.items.length > 0){
        for (let modelItem of this.data.items){
          if (pItem !== modelItem && modelItem.expanded){
            modelItem.expanded = false;
          }
        }
      }
    }

    pItem.expanded = !pItem.expanded;
  }
  
  getActiveClass(item: INavData): string {
    return item.expanded && this.router.url.includes(item.routeLink) ? 'active-sublevel' : '';
  }
}
