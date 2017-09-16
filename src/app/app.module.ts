import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { EventsPage } from '../pages/events/events';
import { ImagePage } from '../pages/image/image';
import { RunnerPage } from '../pages/runner/runner';
import { ParticipantsPage } from '../pages/participants/participants';
import { RunnerDetailPage } from '../pages/runner-detail/runner-detail';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {CameraButtonComponent} from "../components/camera-button/camera-button";
import { Camera } from '@ionic-native/camera';
import { RecognizeServiceProvider } from '../providers/recognize-service/recognize-service';
import { HttpModule} from "@angular/http";
import { RunTypesServiceProvider } from '../providers/run-types-service/run-types-service';
import { RunServiceProvider } from '../providers/run-service/run-service';
import { UserServiceProvider } from '../providers/user-service/user-service';
import { AthleteServiceProvider } from '../providers/athlete-service/athlete-service';
import { EnvoirmentServiceProvider } from '../providers/envoirment-service/envoirment-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EventsPage,
    ImagePage,
    RunnerPage,
    ParticipantsPage,
    RunnerDetailPage,
    CameraButtonComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EventsPage,
    ImagePage,
    RunnerPage,
    ParticipantsPage,
    RunnerDetailPage
  ],
  providers: [
    StatusBar,
    Camera,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RecognizeServiceProvider,
    RunTypesServiceProvider,
    RunServiceProvider,
    UserServiceProvider,
    AthleteServiceProvider,
    EnvoirmentServiceProvider
  ]
})
export class AppModule {}
