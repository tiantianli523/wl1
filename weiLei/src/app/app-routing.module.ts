/**
 * Created by 李 on 2017/9/11.
 */
import { NgModule }from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//导入系统路由

import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
// import { PersonalCenterComponent } from './personal-center/personal-center.component';
import { MenuClassifyComponent } from './menu-classify/menu-classify.component';
import { MenuGatherComponent } from './menu-gather/menu-gather.component';
import { MenuDetailsComponent } from './menu-details/menu-details.component';
import { HotListComponent } from './hot-list/hot-list.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { SearchComponent } from './search/search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AccountSetComponent } from './account-set/account-set.component';
import { CreateMenuComponent } from './create-menu/create-menu.component';

//配置路由表(父)
const routes: Routes = [
  {
    path: 'index',
    component: IndexComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'hot-list',
    component: HotListComponent
  },
  {
    path: 'dynamic',
    component: DynamicComponent
  },
  {
    path: 'menu-classify',
    component: MenuClassifyComponent
  },
  {
    path: 'menu-gather',
    component: MenuGatherComponent
  },
  {
    path: 'menu-details',
    component: MenuDetailsComponent
  },
  // {
  //   path:'personal-center',
  //   component:PersonalCenterComponent
  // },
  {
    path: 'create-menu',
    component: CreateMenuComponent
  },
  {
    path: 'account-set',
    component: AccountSetComponent
  },
  {
    path: '',
    redirectTo: '/index',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports:
    [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
