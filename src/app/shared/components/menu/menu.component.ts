import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: ``
})
export class MenuComponent {
  items: MenuItem[] | undefined;
    
  ngOnInit() {
      this.items = [
          {
              label: 'Documents',
              items: [
                  {
                      label: 'New',
                      icon: 'pi pi-plus'
                  },
                  {
                      label: 'Search',
                      icon: 'pi pi-search'
                  }
              ]
          },
          {
              label: 'Profile',
              items: [
                  {
                      label: 'Settings',
                      icon: 'pi pi-cog'
                  },
                  {
                      label: 'Logout',
                      icon: 'pi pi-sign-out'
                  }
              ]
          }
      ];
  }


}
