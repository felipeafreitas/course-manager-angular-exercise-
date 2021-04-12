import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from './course';
import { CourseService } from './courses.service';

@Component({
  templateUrl: './course-info.component.html',
})
export class CourseInfoComponent {
  course: Course;

  constructor(route: ActivatedRoute, private courseService: CourseService) {

    this.courseService.retrieveById(+route.snapshot.params.id).subscribe({
      next: (course) => (this.course = course),
      error: (err) => console.log(err),
    });

    // save(): void {
    //   this.courseService.save(this.course).subscribe({
    //     next: course => console.log('Saved with sucess', course),
    //     err: err => console.log(err)
    //   });
    // }
  }
}
