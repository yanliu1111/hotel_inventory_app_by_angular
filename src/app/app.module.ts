import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ContainerComponent } from './container/container.component';
import { EmployeeComponent } from './employee/employee.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { InitService } from './init.service';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomsListComponent } from './rooms/rooms-list/rooms-list.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AppNavComponent } from './app-nav/app-nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NotfountComponent } from './notfount/notfount.component';

function initFactory(InitService: InitService) {
  return () => InitService.init();
}
@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    RoomsListComponent,
    HeaderComponent,
    ContainerComponent,
    EmployeeComponent,
    AppNavComponent,
    NotfountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
  providers: [
    provideClientHydration(),
    {
      provide: APP_INITIALIZER,
      useFactory: initFactory,
      deps: [InitService],
      multi: true
    },
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
