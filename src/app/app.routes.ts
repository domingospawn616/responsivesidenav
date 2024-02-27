import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { PagesComponent } from './pages/pages/pages.component';
import { MediaComponent } from './pages/media/media.component';
import { SettingsComponent } from './pages/settings/settings.component';

export const routes: Routes = [
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent},
    {
        path: 'products', 
        loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule)
    },
    {path: 'statistics', component: StatisticsComponent},
    {
        path: 'coupens', 
        loadChildren: () => import('./pages/coupens/coupens.module').then(m => m.CoupensModule)
    },
    {path: 'pages', component: PagesComponent},
    {path: 'media', component: MediaComponent},
    {path: 'settings', component: SettingsComponent},
];
