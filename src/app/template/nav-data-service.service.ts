import { Injectable } from '@angular/core';
import { NavData } from './nav-data';

@Injectable({
  providedIn: 'root'
})
export class NavDataServiceService {
  protected navBars: NavData[] = [
    { routeLink: 'dashboard', icon: 'home', label: 'Dashboard' }
  ];

  constructor() { }

  getAllNavData(): NavData[] {
    return this.navBars;
  }
}
