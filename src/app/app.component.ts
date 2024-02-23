import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidenavComponent } from './template/sidenav/sidenav.component';
import { SideNavToggle } from './template/sidenav/sidenavtoogle';
import { BodyComponent } from './template/body/body.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidenavComponent, BodyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Angular Nav Bar';

  isSideNavStatus: SideNavToggle = {collapsed: false, screenWidth: 0};

  onToggleSideNav(data: SideNavToggle):void {
    this.isSideNavStatus.collapsed = data.collapsed;
    this.isSideNavStatus.screenWidth = data.screenWidth;
  }
}
