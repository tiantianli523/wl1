/**
 * Created by 李 on 2017/9/11.
 */
import { NgModule }from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//导入系统路由

import {PersonalCenterComponent } from './personal-center.component';
import { MyMenuComponent } from './my-menu/my-menu.component';
import { MyProductComponent } from './my-product/my-product.component';
import { MyMenuGatherComponent } from './my-menu-gather/my-menu-gather.component';
import { MessageBoardComponent } from './message-board/message-board.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { SetPersonalInformationComponent } from './set-personal-information/set-personal-information.component';
import { FavoriteMenuComponent } from './favorite-menu/favorite-menu.component';

//配置路由表(父)
const routes: Routes = [
  {
    path:'personal-center',
    component:PersonalCenterComponent,
    children:[

      {
        path:'favorite',
        component:FavoriteComponent
      },
      {
        path:'favorite-menu',
        component:FavoriteMenuComponent
      },
      {
        path:'my-menu',
        component:MyMenuComponent
      },
      {
        path:'my-menu-gather',
        component:MyMenuGatherComponent
      },
      {
        path:'my-product',
        component:MyProductComponent
      },
      {
        path:'set-personal-information',
        component:SetPersonalInformationComponent
      },
      {
        path:'message-board',
        component:MessageBoardComponent
      },
      {
        path: '',
        redirectTo: '/personal-center/my-menu',
        pathMatch:'prefix'
      }

    ]
  }
];

@NgModule({
  imports:
    [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class PersonalCenterRoutingModule {}
