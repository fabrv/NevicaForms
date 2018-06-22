import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SocketProvider } from '../providers/socket/socket';
import { FormPage } from '../pages/form/form';
import { AnswerPage } from '../pages/answer/answer';
import { StorageSaveProvider } from '../providers/storage-save/storage-save';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    FormPage,
    AnswerPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, { autoFocusAssist: false , scrollAssist: false,iconMode: "md"} )
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    FormPage,
    AnswerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SocketProvider,
    StorageSaveProvider
  ]
})
export class AppModule {}
