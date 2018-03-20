import { ThesisComponent } from './thesis/thesis.component';
import { PublicationComponent } from './publication/publication.component';
import { ActivityComponent } from './activity/activity.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResearchComponent } from './research/research.component';
import { ContactComponent } from './contact/contact.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'activity',
    component: ActivityComponent
  },
  {
    path: 'research',
    component: ResearchComponent
  },
  {
    path: 'publication',
    component: PublicationComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'thesis',
    component: ThesisComponent
  },
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'home',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
