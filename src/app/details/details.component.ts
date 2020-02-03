import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/map';
@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.css'],

})
export class DetailsComponent {
    itpccreated: any; butttonDisplay: any; id: any; caption: any; decade: any; country: any; title: any; topics: any; copyright: any; creator: any; projectid: any; filename: string;
    posts: any[] = []; region: any; imagepath: any; rightsusageterms: any; keywords: any; filedescription: any; @Input() assetID: string; detailApi: any; @Input() img_cc: string;
    high_res_image: any; low_res_image: any;jpeg_image:string; tif_image:string; prevReferrer:string;

    @Input() url: string;
    @Input() imgpath: string;
    @Input() detailPath: string;
    
    constructor(private http: Http) {
    }
    ngOnInit() {
    }

    ngOnChanges() {
        this.detailApi = this.url;
        this.getDeatailPosts(this.detailApi);
    }

    onImgLoad = function(e) {
       
    };
    onThumbLoad = function(e) {
    
    };
    
    getDeatailPosts = function (detailApi: string) {
       
        let displayUrl = window.location.href;
        let displayUrlSplit = displayUrl.split('?');
        let Id:any ="";
        let PC:any="";
        if(displayUrlSplit.length>1){
            let idSplit:any = [];
            idSplit = displayUrlSplit[1].split("&");
            if(idSplit.length>1){
                let PageCount = idSplit[1].split("pC=");
                let imageID = idSplit[0].split("id=");
                Id = imageID[1];
                PC = PageCount[1];
            }
        }
        let response = this.http.get(this.detailApi+"&qterm="+Id, '').map((response: Response) => {
            return response.json();
        })
        response.subscribe(
            res => {
                let resources = res["photoarchives"];
              
                this.imagepath = this.imgpath;
                
                if(document.referrer != undefined && document.referrer != ''){
                    let displayUrl = document.referrer
                    let displayUrlSplit = displayUrl.split('?');
                    if(displayUrlSplit.length>1){
                        let url=document.referrer;
                        url = url.split("&id=")[0]+"&id="+Id+"&pC="+PC+'&ref=true';
                        this.prevReferrer =url;
                        // document.referrer+'@id='+Id+'&pC='+PC+''+'&ref=true';
                    }
                    else{
                        let url=document.referrer;
                        
                        url = url.split("&id=")[0]+"?&id="+Id+"&pC="+PC+'&ref=true';
                        this.prevReferrer =url; 
                        //document.referrer +'@id='+Id+'&pC='+PC+''+'&ref=true';
                    }
                }else{
                    this.prevReferrer = 'https://aem-archivesphotos.worldbank.org/en/about/archives/photo-gallery/photo-gallery-landing'+'?&id='+Id+'&pC='+PC+''+'&ref=true';
                }
                
                for (var key in resources) {
                    this.id = resources[key].id;
                    this.title = resources[key]['iptc_title'];
                    this.caption = resources[key]['wbg_caption'];
                    this.creator = resources[key]['iptc_creator'];
                    this.projectid = resources[key]['wbg_project_id'];
                    this.itpccreated = resources[key]['iptc_date_created'];
                    debugger
                    this.copyright = resources[key]['iptc_copyright_info_url'];
                    this.filedescription = resources[key]['file_description'];
                    this.keywords = resources[key]['keywords'];
                    this.butttonDisplay = resources[key]['for_public_download'];
                    this.filename = resources[key]['filename'];
                    this.rightsusageterms = resources[key]['iptc_rights_usage_terms'];
                    this.high_res_image = this.imagepath+this.id+'&f=preview';
                    this.low_res_image = this.imagepath+this.id+'&f=thumbnail';
                    this.jpeg_image =  this.imagepath+this.id+'&f=_derivative?async=false&imageOptions={ "outputFileFormat" : "JPEG", "colorMode" : "RGB", "resizeWidth" : 3300, "resizeHeight" : 3300, "compressionQuality" : 100, "source" : "original" }';
                   // this.tif_image =  this.imagepath+this.id+'&f=_derivative?async=false&imageOptions={ "outputFileFormat" : "tif", "colorMode" : "RGB", "resizeWidth" : 512, "resizeHeight" : 600, "compressionQuality" : 95, "source" : "original" }';

                    this.posts.push({
                        title: this.title,
                        id: this.id,
                        caption: this.caption,
                        rightsusageterms: this.rightsusageterms,
                        copyright: this.copyright,
                        creator: this.creator,
                        projectid: this.projectid,
                        keywords: this.keywords,
                        filedescription: this.filedescription,
                        itpccreated: this.itpccreated,
                        butttonDisplay: this.butttonDisplay,
                        filename: this.filename,
                        high_res_image: this.high_res_image,
                        low_res_image: this.low_res_image,
                        jpeg_image : this.jpeg_image,
                       // tif_image : this.tif_image
                    });
                }
            });
    }
}