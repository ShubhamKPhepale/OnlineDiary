import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { EducationComponent } from './education/education.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LogoutModalComponent } from './logout-modal/logout-modal.component';
import { DetailsModalComponent } from './details-modal/details-modal.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServicesComponent } from './services/services.component';
import { PersonalDiaryComponent } from './personal-diary/personal-diary.component';
import { SchoolDiaryComponent } from './school-diary/school-diary.component';
import { WeddingDiaryComponent } from './wedding-diary/wedding-diary.component';
import { DiarypersonalComponent } from './services/diarypersonal/diarypersonal.component';
import { DiaryschoolComponent } from './services/diaryschool/diaryschool.component';
import { DiaryweddingComponent } from './services/diarywedding/diarywedding.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    HomeComponent,
    EducationComponent,
    ContactUsComponent,
    LogoutModalComponent,
    DetailsModalComponent,
    AboutUsComponent,
    ServicesComponent,
    PersonalDiaryComponent,
    SchoolDiaryComponent,
    WeddingDiaryComponent,
    DiarypersonalComponent,
    DiaryschoolComponent,
    DiaryweddingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
