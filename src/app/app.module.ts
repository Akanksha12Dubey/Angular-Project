import { CoursesComponent } from './courses.component';
import { CoursesService } from './courses.service';

import { HttpModule } from '@angular/http';
import { SummaryPipe } from './summary.pipe';
import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms"
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    SummaryPipe
    ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
      
  ],
  providers: [
    CoursesService
    ],
  bootstrap: [AppComponent]
}) 
export class AppModule { }
