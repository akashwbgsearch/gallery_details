import { Injectable,Input } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable  } from 'rxjs/Observable';

@Injectable()
export class DetailService {
//   @Input() assetID: string;detailApi:any;
//   apiUrl:string="https://qsmservicesdev.worldbank.org/archives/api/archives/search?query={%22term%22:{%22operator%22:%22assetsById%22,%22values%22:[%221632322%22]},%22startingIndex%22:0,%22pageSize%22:50,%22sortOptions%22:{%22field%22:%22Cataloged%22,%22order%22:%22desc%22}}";
//   constructor(private http:Http ) {
//     let decodedUrl=decodeURI(this.apiUrl);
//     let api=decodedUrl.split("=")[0];
   
// let queryjson = JSON.parse(decodeURI(decodedUrl.split("=")[1]));

// let term = queryjson.term;

// term['values'][0]=this.assetID;
// this.detailApi=api+"="+queryjson;
// console.log("dfsdf"+this.detailApi);

//    }

  
//   getdetailsData():Observable<any> {
  
//     return this.http.get(this.apiUrl)
//     .map(
        
//           //  res => res.json()
          
//            this.extractData
//         )
//         .catch(this.handleError);
// }
// private extractData(res:Response) {
//   let body = res.json();
//     console.log(body);
   
//   return body || [];
// }
// private handleError(error:any) {
//   // In a real world app, we might use a remote logging infrastructure
//   // We'd also dig deeper into the error to get a better message
//   let errMsg = (error.message) ? error.message :
//       error.status ? `${error.status} - ${error.statusText}` : 'Server error';
//   console.error(errMsg); // log to console instead
//   return Observable.throw(errMsg);
// }

}
