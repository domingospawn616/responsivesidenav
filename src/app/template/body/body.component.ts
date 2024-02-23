import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SideNavToggle } from '../sidenav/sidenavtoogle';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent {
  @Input() screenStatus: SideNavToggle = {collapsed: false, screenWidth: 0};

  getBodyClass(): string {
    let styleClass = '';

    if(this.screenStatus.collapsed && this.screenStatus.screenWidth > 768){
      styleClass = 'body-trimed';
    } else if(this.screenStatus.collapsed && this.screenStatus.screenWidth <= 768 && this.screenStatus.screenWidth > 0){
      styleClass = 'body-md-screen';
    }

    console.log('screenStatus = '+JSON.stringify(this.screenStatus));
    console.log('StyleClass = '+styleClass);
    return styleClass;
  }
}
