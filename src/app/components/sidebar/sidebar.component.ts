import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/userCtrl', title: 'Utilisateurs',  icon: 'list_alt', class: '' },
    { path: '/departements', title: 'Departements',  icon: 'collections_bookmark', class: '' },
    { path: '/caisses', title: 'Caisses',  icon: 'money', class: '' },
    { path: '/profiles', title: 'Profiles',  icon: 'subscriptions', class: '' },
    { path: '/workflows', title: 'Workflows',  icon: 'attachment', class: '' },
    // { path: '/usersCtrl', title: 'traitement Stock',  icon: 'storage', class: '' },
    // { path: '/usersCtrl', title: 'Facturation - devis',  icon: 'collections_bookmark', class: '' },
    // { path: '/usersCtrl', title: 'Etats et rapports',  icon: 'attachment', class: '' },
    // { path: '/usersCtrl', title: 'Preferences',  icon: 'settings_input_component', class: '' },
    // { path: '/user-profile', title: 'User Profile',  icon:'person', class: '' },
    // { path: '/table-list', title: 'Table List',  icon:'content_paste', class: '' },
    // { path: '/typography', title: 'Typography',  icon:'library_books', class: '' },
    // { path: '/icons', title: 'Icons',  icon:'bubble_chart', class: '' },
    // { path: '/maps', title: 'Maps',  icon:'location_on', class: '' },
    // { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
    // { path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
