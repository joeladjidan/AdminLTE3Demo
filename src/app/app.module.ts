import { NgModule } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  DashboardComponent,
} from './core/components/dashboard/dashboard.component';
import { LoginComponent } from './core/components/login/login.component';
import { DashboardModule } from './core/modules/dashboard/dashboard.module';
import { LoginModule } from './core/modules/login/login.module';
import {
  ContentWrapperComponent,
} from './shared/content-wrapper/content-wrapper.component';
import {
  ControlSidebarComponent,
} from './shared/control-sidebar/control-sidebar.component';
import {
  MainFooterComponent,
} from './shared/main-footer/main-footer.component';
import {
  MainHeaderComponent,
} from './shared/main-header/main-header.component';
import {
  MainSidebarComponent,
} from './shared/main-sidebar/main-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MainSidebarComponent,
    ContentWrapperComponent,
    MainFooterComponent,
    ControlSidebarComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    LoginModule,
    DashboardModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

