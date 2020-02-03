import { Component, ElementRef } from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';
    assetID: string;
    img_cc: string;
    url: string;
    imgpath: string;
    detailPath:string;
    constructor(private element: ElementRef) {
        this.url = this.element.nativeElement.getAttribute('url');
        this.imgpath = this.element.nativeElement.getAttribute('imgpath');
        this.assetID = this.element.nativeElement.getAttribute('assetID');
        this.img_cc = this.element.nativeElement.getAttribute('img_cc');
        this.detailPath = this.element.nativeElement.getAttribute('detailPath');

    }
}
