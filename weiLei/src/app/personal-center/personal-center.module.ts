import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {PersonalCenterComponent } from './personal-center.component';
import { MyMenuComponent } from './my-menu/my-menu.component';
import { MyProductComponent } from './my-product/my-product.component';
import { MyMenuGatherComponent } from './my-menu-gather/my-menu-gather.component';
import { MessageBoardComponent } from './message-board/message-board.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { SetPersonalInformationComponent } from './set-personal-information/set-personal-information.component';

/*导入路由模块*/
import {PersonalCenterRoutingModule} from './personal-center-routing.module';
@NgModule({
  declarations: [
    MyMenuComponent,
    MyProductComponent,
    MyMenuGatherComponent,
    MessageBoardComponent,
    FavoriteComponent,
    PersonalCenterComponent,
    SetPersonalInformationComponent
  ],
  imports: [
    BrowserModule,
    PersonalCenterRoutingModule
  ],
  providers: [],
  bootstrap: [PersonalCenterComponent]
})
export class PersonalCenterModule { }
