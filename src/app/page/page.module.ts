import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageComponent } from './view/page/page.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { AboutComponent } from './components/about/about.component';
import { TechnologiesComponent } from './components/technologies/technologies.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectLeftComponent } from './components/project-left/project-left.component';
import { ProjectRightComponent } from './components/project-right/project-right.component';
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { SendEmailComponent } from './components/send-email/send-email.component';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { ContactComponent } from './components/contact/contact.component';
import { CommandBarComponent } from './components/command-bar/command-bar.component';
import { ModalComponent } from './components/modal/modal.component';

const routes: Routes = [{ path: '', component: PageComponent }];

@NgModule({
  declarations: [
    NavbarComponent,
    PageComponent,
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
    CommonModule,
	RouterModule.forChild(routes),
  ]
})
export class PageModule { }
