import { animate, style, transition, trigger } from "@angular/animations";

export interface ISideNavToggle {
    screenWidth: number;
    collapsed: boolean;
}

export const fadeInOut = trigger('fadeInOut', [
    transition(':enter', [
      style({opacity: 0}), 
      animate('1000ms', style({opacity: 1}))
    ]),
    transition(':leave', [
      style({opcacity: 1}),
      animate('1000ms', style({opacity: 0}))
    ])
  ])