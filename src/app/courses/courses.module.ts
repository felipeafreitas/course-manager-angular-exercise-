import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StarComponent } from '../shared/component/star/star.component';
import { StarModule } from '../shared/component/star/start.module';
import { AppPipeModule } from '../shared/pipe/app.pipe.modules';
import { CourseInfoComponent } from './course-info.component';
import { CourseListComponent } from './course-list.component';

@NgModule({
  declarations: [CourseListComponent, CourseInfoComponent],
  imports: [
    FormsModule,
    CommonModule,
    // StarModule,
    AppPipeModule,
    RouterModule.forChild([
      {
        path: 'courses',
        component: CourseListComponent,
      },
      {
        path: 'courses/info/:id',
        component: CourseInfoComponent,
      },
    ]),
  ],
})
export class CourseModule {}
