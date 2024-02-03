import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { SocialMediaModule } from './social-media/social-media.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
 BrowserAnimationsModule, 
SharedModule,SocialMediaModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
