import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChatBoxComponent } from './components/chat-box/chat-box.component';
import { UserAvatarComponent } from './components/user-avatar/user-avatar.component';
import { MessageTabComponent } from './components/message-tab/message-tab.component';
import { MsgWindowComponent } from './components/msg-window/msg-window.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatBoxComponent,
    UserAvatarComponent,
    MessageTabComponent,
    MsgWindowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
