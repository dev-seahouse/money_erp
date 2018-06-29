import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogoutComponent } from './auth/logout/logout.component';
import { ThemeComponent } from './theme/theme.component';
import { AuthGuard } from './auth/_guards';

const routes: Routes = [
  { path: 'login', loadChildren: './auth/auth.module#AuthModule' },
  { path: 'logout', component: LogoutComponent },
  {
      path: '',
      component: ThemeComponent,
      canActivate: [AuthGuard],
      children: [
          {
              path: 'dashboard',
              loadChildren: './home/home.module#HomeModule'
          },
          {
            path: 'suppliers',
            loadChildren: './suppliers/suppliers.module#SuppliersModule'
          },
          {
              path: 'data-local',
              // tslint:disable-next-line:max-line-length
              loadChildren: './theme/pages/default/crud/metronic-datatable/child/child-data-local/child-data-local.module#ChildDataLocalModule'
          },
          {
              path: '',
              redirectTo: 'dashboard',
              pathMatch: 'full'
          }
      ]
    },
    {
        path: '**',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
