import {
    Injectable
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class VariablesService {

    private _api;

    get api(): string {
        return this._api;
    }

    constructor(private $http: HttpClient) {
        this._api = 'https://metadata.kreftregisteret.no/rest/v1/';
    }

    public getVariables(keyword?: string): Observable<any> {
        let api = `${this.api}variables/${keyword ? ':search' : ''}`;
        let params = keyword ? { keyword } : null;

        return this.$http.get(api, { params });
    }

    public getVariableById(id: number): Observable<any> {
        return this.$http.get(`${this.api}variables/${id}`);
    }

    public saveToFile(data: any, name?: string) {
        let file = new Blob([JSON.stringify(data)], {type: 'application/json'});
        if (window.navigator.msSaveOrOpenBlob)
            window.navigator.msSaveOrOpenBlob(file, name ? name :'variables');
        else {
            let a = document.createElement("a"),
                url = URL.createObjectURL(file);
            a.href = url;
            a.download = name ? name :'variables';
            document.body.appendChild(a);
            a.click();
            setTimeout(function() {
                document.body.removeChild(a);
                window.URL.revokeObjectURL(url);
            }, 0);
        }
    }
}
