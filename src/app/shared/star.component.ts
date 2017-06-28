import { Component,OnChanges,Input, Output,EventEmitter } from "@angular/core";

@Component(
    {
        selector : 'ai-star',
        templateUrl : 'app/shared/star.component.html',
        styleUrls : ['app/shared/star.component.css']
    }
)

export class StarComponent implements OnChanges
{
    @Input() rating : number = 4;
    starWidth : number;

    ngOnChanges()
    {
        this.starWidth = this.rating * 86/5;
    }

    @Output() notify : EventEmitter<string> = new EventEmitter<string>();

    onClick()
    {
        this.notify.emit(`The rating ${this.rating} clicked!`);
    }
}
