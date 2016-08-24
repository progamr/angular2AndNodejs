import {Directive, ElementRef, Renderer} from 'angular2/core'

@Directive({
    selector: '[hint]',
    host: {
    '(click)': 'onClick()'
    }
})

export class HintDirective {

    constructor(private el: ElementRef, private renderer: Renderer) {}
    onClick() {
        var val: string = this.el.nativeElement.value;
        alert(val);
    }
}