import { Injectable } from '@angular/core';
import { INavData } from './nav-data';

@Injectable({
  providedIn: 'root'
})
export class NavDataServiceService {
  protected navBars: INavData[] = [
    { routeLink: 'dashboard', icon: 'home', label: 'Dashboard' },
    {
      routeLink: 'products', 
      icon: 'dataset', 
      label: 'Products',
      items: [
        {
          routeLink: 'products/list', 
          icon: '', 
          label: 'Level 1.1',
          items: [
            {
              routeLink: 'products/level2.1',
              label: 'Level 2.1',
              icon: '',
              items: [
                {
                  routeLink: 'products/level3.1',
                  label: 'Level 3.1',
                  icon: ''
                },{
                  routeLink: 'products/level3.2',
                  label: 'Level 3.2',
                  icon: ''
                }
              ]
            }
          ]
        },{
          routeLink: 'products/list', 
          icon: '', 
          label: 'Level 1.2',
        }
      ]
    },
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
    { 
      routeLink: 'settings', 
      icon: 'settings', 
      label: 'Settings',
      expanded: true,
      items: [
        {
          routeLink: 'settings/profile',
          icon: 'person',
          label: 'Profile'
        },
        {
          routeLink: 'settings/customize',
          icon: 'settings_account_box',
          label: 'Customize'
        }
      ]
    },
  ];

  constructor() { }

  getAllNavData(): INavData[] {
    return this.navBars;
  }
}
