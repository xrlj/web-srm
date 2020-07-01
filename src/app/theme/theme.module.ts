import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BlankComponent, DefaultComponent} from './layouts';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {ThemeRoutingModule} from './theme-routing.module';


@NgModule({
  declarations: [DefaultComponent, BlankComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    ThemeRoutingModule
  ]
})
export class ThemeModule { }
