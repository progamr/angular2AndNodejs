import {Component} from 'angular2/core'
import {CourseService} from './course.service'
import {AutoGrowDirective} from './auto-grow.directive'
@Component({
    selector: 'courses',
    template: `
    <h1>Courses</h1>
    {{ title }}
    <input type="text" (click)="onClick()" [style.border]="isActive ? '7px solid #F0DB4F': '3px solid #222222'" autoGrow />
    <ul>
        <li *ngFor="#course of courses" [class.active]="isActive">
            {{course}}
        </li>
    </ul>
    `,
    providers: [CourseService],
    directives: [AutoGrowDirective]
})
export class CoursesComponent {
    title = "the title of course page";
    courses;
    isActive = 1;
    constructor(courseService: CourseService) {
        this.courses = courseService.getCourses();
    }

    onClick() {
        console.log('clicked');
    }
}