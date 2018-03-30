import { DeviceService } from './shared/device.service';
import { DataService } from './shared/data.service';
import { NewsService } from './news.service';
import { PublicationService } from './publication.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Provider } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ButtonsModule, CarouselModule, TabsModule, AccordionModule, TooltipModule, ModalModule } from 'ngx-bootstrap';
import { Ng2DeviceDetectorModule } from 'ng2-device-detector';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ActivityComponent } from './activity/activity.component';
import { ResearchComponent } from './research/research.component';
import { PublicationComponent } from './publication/publication.component';
import { ContactComponent } from './contact/contact.component';
import { ProfessorComponent } from './professor/professor.component';
import { StudentComponent } from './student/student.component';
import { StudentService } from './student.service';

import { KeyvaluesPipe } from './keyvalues.pipe';
import { ConsoleLogPipe } from './console-log.pipe';
import { ThesisComponent } from './thesis/thesis.component';
import { ThesisService } from './thesis.service';
import { ActivityDetailsComponent } from './activity-details/activity-details.component';
import { NewsComponent } from './news/news.component';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { EnvironmentComponent } from './environment/environment.component';


export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ActivityComponent,
    ResearchComponent,
    PublicationComponent,
    ContactComponent,
    ProfessorComponent,
    StudentComponent,
    KeyvaluesPipe,
    ConsoleLogPipe,
    ThesisComponent,
    ActivityDetailsComponent,
    NewsComponent,
    EnvironmentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ButtonsModule.forRoot(),
    TabsModule.forRoot(),
    CarouselModule.forRoot(),
    AccordionModule.forRoot(),
    TooltipModule.forRoot(),
    Ng2DeviceDetectorModule.forRoot(),
    ModalModule.forRoot(),
    Angular2FontawesomeModule,
    FlexLayoutModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient]
      }
    }),
  ],
  providers: [
    StudentService,
    PublicationService,
    ThesisService,
    NewsService,
    DataService,
    DeviceService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
