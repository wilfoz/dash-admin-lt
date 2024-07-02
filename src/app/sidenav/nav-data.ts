import { INavbarData } from "./helper";

export const navbarData: INavbarData[] = [
  {
    routerLink: 'dashboard',
    icon:'fal fa-home',
    label: 'Dashboard'
  },
  {
    routerLink: 'products',
    icon:'fal fa-box-open',
    label: 'Products',
    items: [
      {
        routerLink: 'products/list',
        label: 'List Products',
        expanded: true,
        items: [
          {
            routerLink: 'products/level-2',
            label: 'List Products',
          }
        ]
      },
      {
        routerLink: 'products/create',
        label: 'Create Products'
      }
    ]
  },
  {
    routerLink: 'statistics',
    icon:'fal fa-chart-bar',
    label: 'Statistics'
  },
  {
    routerLink: 'rdpp',
    icon:'fal fa-file',
    label: 'RDP'
  },
  {
    routerLink: 'settings',
    icon:'fal fa-cog',
    label: 'Settings'
  }
]
