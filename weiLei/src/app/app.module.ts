import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
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

import {AppRoutingModule} from './app-routing.module';
/*
import { MyMenuComponent } from './personal-center/my-menu/my-menu.component';
import { MyProductComponent } from './personal-center/my-product/my-product.component';
import { MyMenuGatherComponent } from './personal-center/my-menu-gather/my-menu-gather.component';
import { MessageBoardComponent } from './personal-center/message-board/message-board.component';
import { FavoriteComponent } from './personal-center/favorite/favorite.component';
import { SetPersonalInformationComponent } from './personal-center/set-personal-information/set-personal-information.component';
*/


/*导入路由模块*/
import {PersonalCenterModule} from './personal-center/personal-center.module';
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LoginComponent,
    RegisterComponent,
    // PersonalCenterComponent,
    MenuClassifyComponent,
    MenuGatherComponent,
    MenuDetailsComponent,
    HotListComponent,
    DynamicComponent,
    SearchComponent,
    PageNotFoundComponent
   /* MyMenuComponent,
    MyProductComponent,
    MyMenuGatherComponent,
    MessageBoardComponent,
    FavoriteComponent,
    SetPersonalInformationComponent*/
  ],
  imports: [
    BrowserModule,
    PersonalCenterModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
