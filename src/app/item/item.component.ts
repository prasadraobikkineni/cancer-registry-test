import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { VariablesService } from '../variables.service';

@Component({
    selector: 'item',
    templateUrl: './item.component.html'
})
export class ItemComponent implements OnInit {

    public item = null;

    constructor(private $route: ActivatedRoute,
                private $var: VariablesService) {
    }

    public ngOnInit() {
        this.getVariable();
    }

    public getVariable() {
        this.$route.params.subscribe((params) => {
            this.$var.getVariableById(params.id).subscribe((res) => {
                this.item = res;
            }, () => {
                this.item = null;
            })
        })
    }

    public saveToFile() {
        this.$var.saveToFile(this.item, `${this.item.id} - ${this.item.name}`);
    }
}
