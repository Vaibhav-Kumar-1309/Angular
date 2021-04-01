import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NinthTaskComponent } from './ninth-task/ninth-task.component';
import { EighthTaskComponent } from './eighth-task/eighth-task.component';
import { FchildthirdtaskComponent } from './fchildthirdtask/fchildthirdtask.component';
import { FifthTaskComponent } from './fifth-task/fifth-task.component';
import { FirstTaskComponent } from './first-task/first-task.component';
import { FourthTaskComponent } from './fourth-task/fourth-task.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SchildthirdtaskComponent } from './schildthirdtask/schildthirdtask.component';
import { SecondTaskComponent } from './second-task/second-task.component';
import { SeventhTaskComponent } from './seventh-task/seventh-task.component';
import { SixthTaskComponent } from './sixth-task/sixth-task.component';
import { SpecificPostComponent } from './specific-post/specific-post.component';
import { ThirdTaskComponent } from './third-task/third-task.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'task1',
    component: FirstTaskComponent
  },
  {
    path: 'task2',
    component: SecondTaskComponent
  },
  {
    path: 'task3',
    component: ThirdTaskComponent,
    children: [
      {
        path: 'first-child',
        component: FchildthirdtaskComponent
      },
      {
        path: 'second-child',
        component: SchildthirdtaskComponent
      },
      { path: '',
        redirectTo: 'first-child',
        pathMatch: 'full'
      } 
    ]
  },
  {
    path: 'task4',
    component: FourthTaskComponent
  },
  {
    path: 'task5',
    component: FifthTaskComponent
  },
  {
    path: 'task6',
    component: SixthTaskComponent
  },
  {
    path: 'task6/:id',
    component: SpecificPostComponent
  },
  {
    path: 'task7',
    component: SeventhTaskComponent
  },
  {
    path: 'task8',
    component: EighthTaskComponent
  },
  {
    path: 'task9',
    component: NinthTaskComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
