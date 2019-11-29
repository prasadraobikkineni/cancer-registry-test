import { Component, OnInit } from '@angular/core';
import { VariablesService } from '../variables.service';

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

    public variables = [];
    public keyword: string = '';

    constructor(private $var: VariablesService) {
    }

    public ngOnInit() {
        this.getVariables();
    }

    public getVariables() {
        this.$var.getVariables(this.keyword).subscribe((res) => {
            this.variables = res;
        }, () => {
            this.variables = [];
        })
    }

    public saveToFile() {
        this.$var.saveToFile(this.variables);
    }
}
