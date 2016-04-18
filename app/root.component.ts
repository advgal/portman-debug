/**
 * Created by gal on 29.01.16.
 */
import {Component} from 'angular2/core';
import {DetailsComponent} from "./details.component";
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";

@Component ({
    selector: 'pm-root',
    directives: [ ROUTER_DIRECTIVES],
    templateUrl: 'app/root.component.html'
})
@RouteConfig ([
    {path: '/dn/', name: 'Details', component: DetailsComponent}
])
export class RootComponent  {
    private list:Array<string>;

    constructor () {
        this.list = [];
        for (let lix:number=0; lix<3000;lix++){
            this.list.push ('item ' + lix );
        }
    }

}