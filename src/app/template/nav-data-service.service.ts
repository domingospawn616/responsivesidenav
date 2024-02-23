import { Injectable } from '@angular/core';
import { INavData } from './nav-data';

@Injectable({
  providedIn: 'root'
})
export class NavDataServiceService {
  protected navBars: INavData[] = [
    { routeLink: 'dashboard', icon: 'home', label: 'Dashboard' },
    { routeLink: 'products', icon: 'dataset', label: 'Products' },
    { routeLink: 'statistics', icon: 'apps', label: 'Statistics' },
    { 
      routeLink: 'coupens', 
      icon: 'create_new_folder', 
      label: 'Coupens',
      items: [
        {routeLink: 'coupens/list', icon: 'workspaces', label: 'List Coupens'},
        {routeLink: 'coupens/create', icon: 'workspaces', label: 'Create Coupens'}
      ]
    },
    { routeLink: 'pages', icon: 'content_copy', label: 'Pages' },
    { routeLink: 'media', icon: 'play_circle', label: 'Media' },
    { routeLink: 'settings', icon: 'settings', label: 'Settings' },
  ];

  constructor() { }

  getAllNavData(): INavData[] {
    return this.navBars;
  }
}
