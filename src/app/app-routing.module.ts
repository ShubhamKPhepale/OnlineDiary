import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ServicesComponent } from './services/services.component';
import { DiarypersonalComponent } from './services/diarypersonal/diarypersonal.component';
import { DiaryschoolComponent } from './services/diaryschool/diaryschool.component';
import { DiaryweddingComponent } from './services/diarywedding/diarywedding.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { WeddingDiaryComponent } from './wedding-diary/wedding-diary.component';
import { SchoolDiaryComponent } from './school-diary/school-diary.component';
import { PersonalDiaryComponent } from './personal-diary/personal-diary.component';

const routes: Routes = [

    { path: 'aboutus', component: AboutUsComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    {
        path: 'home',
        component: HomeComponent,
        children: [
            { path: 'contactus', component: ContactUsComponent },
            { path: 'WeddingDiary', component: WeddingDiaryComponent },
            { path: 'SchoolDiary', component: SchoolDiaryComponent },
            { path: 'PersonalDiary', component: PersonalDiaryComponent },
        ],
    },

    { path: '', redirectTo: '/aboutus', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule { }
