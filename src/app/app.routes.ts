import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { SettingsComponent } from './settings/settings.component';
import { RDPComponent } from './rdp/rdp.component';

export const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  { path: 'products', component: ProductsComponent},
  {path: 'statistics', component: StatisticsComponent},
  {path: 'rdpp', component: RDPComponent},
  {path: 'settings', component: SettingsComponent},
];
