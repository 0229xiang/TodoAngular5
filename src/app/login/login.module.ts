import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ShareModule } from './../share/share.module';
import { LoginRoutingModule } from './login.routing.module';
import { NgModule } from '@angular/core';


@NgModule({
  imports: [
    LoginRoutingModule,
    ShareModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent
  ]
})
export class LoginModule { }
