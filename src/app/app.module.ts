import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { FirstTaskComponent } from './first-task/first-task.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SecondTaskComponent } from './second-task/second-task.component';
import { ChildsecondtaskComponent } from './childsecondtask/childsecondtask.component';
import { ThirdTaskComponent } from './third-task/third-task.component';
import { FchildthirdtaskComponent } from './fchildthirdtask/fchildthirdtask.component';
import { SchildthirdtaskComponent } from './schildthirdtask/schildthirdtask.component';
import { FourthTaskComponent } from './fourth-task/fourth-task.component';

import { AddDisplayService } from 'src/service/add-display.service';
import { FifthTaskComponent } from './fifth-task/fifth-task.component';
import { SummaryPipe } from 'src/pipes/summary.pipe';
import { SixthTaskComponent } from './sixth-task/sixth-task.component';
import { SpecificPostComponent } from './specific-post/specific-post.component';
import { SeventhTaskComponent } from './seventh-task/seventh-task.component';
import { EighthTaskComponent } from './eighth-task/eighth-task.component';
import { NinthTaskComponent } from './ninth-task/ninth-task.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstTaskComponent,
    NotFoundComponent,
    WelcomeComponent,
    SecondTaskComponent,
    ChildsecondtaskComponent,
    ThirdTaskComponent,
    FchildthirdtaskComponent,
    SchildthirdtaskComponent,
    FourthTaskComponent,
    FifthTaskComponent,
    SummaryPipe,
    SixthTaskComponent,
    SpecificPostComponent,
    SeventhTaskComponent,
    EighthTaskComponent,
    NinthTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AddDisplayService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
