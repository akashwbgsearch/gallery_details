import { Component, Input } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/map';
@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
    itpccreated: any; loadingImageUrl:any;butttonDisplay: any; id: any; caption: any; decade: any; country: any; title: any; topics: any; copyright: any; creator: any; projectid: any; filename: string;
    posts: any[] = []; region: any; imagepath: any; rightsusageterms: any; keywords: any; filedescription: any; @Input() assetID: string; detailApi: any; @Input() img_cc: string;
    high_res_image: any; low_res_image: any;jpeg_image:string; tif_image:string; 
    prevReferrer:string;loading:boolean;

    @Input() url: string;
    @Input() imgpath: string;
    @Input() detailPath: string;
    @Input() loadingPath: string;
    @Input() projPath: string;
    constructor(private http: Http) {
    }
    ngOnInit() {
        this.detailApi = this.url;
        this.loadingImageUrl=this.loadingPath;
        this.loading=true;
        this.getDeatailPosts(this.detailApi);
        this.loading=false;
    }
    ngOnChanges() {
       //
    }
    onImgLoad = function(e) {
       
    };
    onThumbLoad = function(e) {
    
    };
    
    getDeatailPosts = function (detailApi: string) {
        debugger
        this.loading=true;
        let displayUrl = window.location.href;
        let displayUrlSplit = displayUrl.split('?');
        let Id:any ="";
        let PC:any="";
        if(displayUrlSplit.length>1){
            let idSplit:any = [];
            idSplit = displayUrlSplit[1].split("&");
            if(idSplit.length>0){
                if(idSplit[1]!=undefined){
                    let PageCount = idSplit[1].split("pC=");
                    PC = PageCount[1];
                }
                if(idSplit[0]!=undefined){
                 let imageID = idSplit[0].split("id=");
                 Id = imageID[1];
                }
            }
        }
        else{
            let IdURL = displayUrl.split('photo-gallery-details.');
            Id = IdURL[1];
        }
        let response = this.http.get(this.detailApi+"&id="+Id, '').map((response: Response) => {
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
                    if(this.itpccreated!=null && this.itpccreated.indexOf('Z')>-1){
                        this.itpccreated = this.itpccreated.substring(0,this.itpccreated.length-1);
                    }
                    this.copyright = resources[key]['iptc_copyright_info_url'];
                    this.filedescription = resources[key]['file_description'];
                    this.keywords = resources[key]['keywords'];
                    this.butttonDisplay = resources[key]['for_public_download'];
                    this.filename = resources[key]['filename'];
                    this.rightsusageterms = resources[key]['iptc_rights_usage_terms'];
                    this.high_res_image = this.imagepath+this.id+'&f=preview';
                    this.low_res_image = this.imagepath+this.id+'&f=thumbnail';
                    this.jpeg_image =  this.imagepath+this.id+'&f=_derivative?async=false&imageOptions={ "outputFileFormat" : "JPEG", "colorMode" : "RGB", "resizeWidth" : 3300, "resizeHeight" : 3300, "compressionQuality" : 100, "source" : "original" }';
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
                        jpeg_image : this.jpeg_image
                    });
                }
            });
            this.loading=false;
    }
}