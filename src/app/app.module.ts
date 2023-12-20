import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { CommandBarComponent } from './components/command-bar/command-bar.component';
import { ContactComponent } from './components/contact/contact.component';
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { ModalComponent } from './components/modal/modal.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { ProjectLeftComponent } from './components/project-left/project-left.component';
import { ProjectRightComponent } from './components/project-right/project-right.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SendEmailComponent } from './components/send-email/send-email.component';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { TechnologiesComponent } from './components/technologies/technologies.component';

@NgModule({
  declarations: [
    AppComponent,
	NavbarComponent,
    PresentationComponent,
    AboutComponent,
    TechnologiesComponent,
    ProjectsComponent,
    ProjectLeftComponent,
    ProjectRightComponent,
    ExperiencesComponent,
    SendEmailComponent,
    SocialMediaComponent,
    ContactComponent,
    CommandBarComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
	ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
