import { Component,ElementRef,ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { Geolocation } from '@ionic-native/geolocation';
import { DosearchPage } from '../dosearch/dosearch';
import { AngularFireAuth}from 'angularfire2/auth';
/**
 * Generated class for the SearchprojectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var google:any;
@IonicPage()
@Component({
  selector: 'page-searchproject',
  templateUrl: 'searchproject.html',
})
export class SearchprojectPage {
	lati:any ='';
  long:any ='';
	range: number = 5;
	location:any ;
	option:any ;
  marker ;
  geo:any;
  uid:any;
	@ViewChild('map') mapRef : ElementRef;
  	map:any;
  constructor(private afAuth: AngularFireAuth ,
    public navCtrl: NavController,
    public navParams: NavParams,
     ) { //private geolocation: Geolocation
  }


  ionViewDidLoad() {
    this.afAuth.authState.subscribe(data=>{
      if(data && data.email && data.uid){
        this.stuid(data.uid);
      }
      else{
        console.log("can't connect to database");
      }
    });
    // this.geolocation.getCurrentPosition().then((resp) => {
    // // resp.coords.latitude
    // // resp.coords.longitude
    // this.lati = resp.coords.latitude;
    // this.long = resp.coords.longitude;
    // this.geo = {lati:this.lati,long:this.long};
    // this.location = new google.maps.LatLng(this.lati,this.long);
    // }).catch((error) => {
    // console.log('Error getting location', error);
    // });
    setTimeout(fun=>{
      if(this.lati == '' || this.long == ''){
      this.lati = 18.7061;
      this.long = 98.9817;
      }
      this.showMap(this.range);
     },1500);
    
    // google.maps.event.addListener(this.map, 'click', this.changelocation());
  }
  stuid(Auid){
    this.uid = Auid ;
  }
  showMap(range){
    this.location = new google.maps.LatLng(this.lati,this.long);
    this.option = {
      center: this.location,
      zoom:10,
      streetViewControl:false,
      mapTypeId:'roadmap'//roadmap , satellite , hybrid , terrain
    };
    this.map = new google.maps.Map(this.mapRef.nativeElement,this.option);
    this.addMarker(this.location,this.map);
    this.range =  range ;
    this.addCirle(this.range,this.location,this.map);
  }
 
 addMarker(position,map){
    return new google.maps.Marker({
      position,
      map
    });
  }
 addCirle(radius,position,map){
  return new google.maps.Circle({
  center:position,
  radius:(radius/6378.1)*6378100,
  strokeColor:"#e27afb",
  strokeOpacity:0.8,
  strokeWeight:2,
  fillColor:"#e27afb",
  fillOpacity:0.4,
  map: map,
});
 }
 onChange(ev: any) {
 	this.showMap(ev._value);
  }
  Changeposition(){

  }
  godosearch(){
    this.navCtrl.push(DosearchPage,{range:this.range,geo:{lati:18.7061,long:98.9817},uid:this.uid});
  //   this.navCtrl.push(DosearchPage,{range:this.range,geo:this.geo,uid:this.uid});
  }
}
