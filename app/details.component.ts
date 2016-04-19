import {Component, OnInit} from 'angular2/core';
import {RouteParams} from "angular2/router";

@Component ({
    selector: 'pm-details',
    directives: [],
    templateUrl: 'app/details.component.html',
    styleUrls: []
})
export class DetailsComponent implements OnInit {
    private dn;
    constructor (private routeParams: RouteParams) {
    }

    ngOnInit() {
        this.dn = this.routeParams.get('dn');
    }
}