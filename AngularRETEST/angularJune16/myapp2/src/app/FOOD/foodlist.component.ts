import { Component } from '@angular/core'
import { foodservice } from './foodservice.services';

@Component
({
    selector:'foodlist',
    templateUrl:'./foodlist.component.html'
})
export class foodlistComponent
{

    foodArray=[];
    constructor(private foodservice:foodservice){}
   
    ngOnInit()
    {
        this.foodArray=this.foodservice.getFood();
    }
}