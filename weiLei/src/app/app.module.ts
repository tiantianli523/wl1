import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

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
import { AccountSetComponent } from './account-set/account-set.component';
import { CreateMenuComponent } from './create-menu/create-menu.component';

import {AppRoutingModule} from './app-routing.module';

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
    PageNotFoundComponent,
    AccountSetComponent,
    CreateMenuComponent
  ],
  imports: [
    BrowserModule,
    PersonalCenterModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
