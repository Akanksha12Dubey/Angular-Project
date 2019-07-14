import { CoursesService } from './courses.service';
import { Component } from '@angular/core';
@Component({
    selector:'courses',
    template: `
  {{ text|summary }}

    `,
    
})


export class CoursesComponent{
    text = `
    this is my new course, I'm gonna learn it soon. So I can get a new job. I will make ssure this job soon.


    `
}