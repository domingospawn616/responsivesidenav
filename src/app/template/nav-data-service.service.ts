import { Injectable } from '@angular/core';
import { NavData } from './nav-data';

@Injectable({
  providedIn: 'root'
})
export class NavDataServiceService {
  protected navBars: NavData[] = [
    { routeLink: 'dashboard', icon: 'home', label: 'Dashboard' },
    { routeLink: 'products', icon: 'dataset', label: 'Products' },
    { routeLink: 'statistics', icon: 'apps', label: 'Statistics' },
    { routeLink: 'coupens', icon: 'create_new_folder', label: 'Coupens' },
    { routeLink: 'pages', icon: 'content_copy', label: 'Pages' },
    { routeLink: 'media', icon: 'play_circle', label: 'Media' },
    { routeLink: 'settings', icon: 'settings', label: 'Settings' },
  ];

  constructor() { }

  getAllNavData(): NavData[] {
    return this.navBars;
  }
}
