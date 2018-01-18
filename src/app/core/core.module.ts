import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShareModule } from './../share/share.module';
import { NgModule, SkipSelf, Optional } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { loadSvgResources } from './../utils/svg.util';
import 'hammerjs';
@NgModule({
  imports: [
    BrowserAnimationsModule,
    ShareModule,
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ]
})

// @SkipSelf --Specifies that the dependency resolution should start from the parent injector.
// @Optional -- A parameter metadata that marks a dependency as optional. Injector provides null if the dependency is not found.
export class CoreModule {
  constructor( @Optional() @SkipSelf() parent: CoreModule,
    ir: MatIconRegistry,
    ds: DomSanitizer) {
    if (parent) {
      throw new Error('模块已经加载,请勿重复加载该模块！！！');
    }
    loadSvgResources(ir, ds);
  }
}
