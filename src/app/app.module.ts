import { ShareModule } from './share/share.module';
import { TaskModule } from './task/task.module';
import { ProjectModule } from './project/project.module';
import { LoginModule } from './login/login.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    BrowserAnimationsModule,
    LoginModule,
    ProjectModule,
    TaskModule,
    ShareModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
