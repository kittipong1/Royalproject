import { Component, ViewChild , ElementRef} from '@angular/core';
import { IonicPage, NavController, NavParams ,ToastController} from 'ionic-angular';
import { AngularFireDatabase} from 'angularfire2/database';

/**
 * Generated class for the ViewtripPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google:any;
@IonicPage()
@Component({
  selector: 'page-viewtrip',
  templateUrl: 'viewtrip.html',
})
export class ViewtripPage {
	uid:any;
	nametrip:string;
	list:any;
	result:any;
	cc;
	location:any;
	directionsService ;
	directionsDisplay ;
	@ViewChild('map') mapRef : ElementRef;
  	map:any;
   	waypts:any= [];
   	way
   	origin
   	destination
    A;
    B;
    C;
  constructor(public navCtrl: NavController, public navParams: NavParams, private fdb: AngularFireDatabase,private toast:ToastController) {
  }

  ionViewDidLoad() {
  	this.nametrip = this.navParams.get('nametrip');
    this.uid = this.navParams.get('uid');
    this.list = this.nametrip+this.uid;
    this.getfdbdata();

      setTimeout(()=>{
       this.showmap();
       this.A = this.result.Location01.nameplace ;
       this.B = this.result.Location02.nameplace ;
       this.C = this.result.Location03.nameplace ;
    },1000);
    
   
  }
  showmap(){
  		this.directionsService = new google.maps.DirectionsService;
        this.directionsDisplay = new google.maps.DirectionsRenderer;
        this.map = new google.maps.Map(this.mapRef.nativeElement, {
          zoom: 6,
          center: {lat: 18.7061, lng: 98.9817}
        });
        this.directionsDisplay.setMap(this.map);
		this.calculateAndDisplayRoute(this.directionsService,this.directionsDisplay);

  }
  calculateAndDisplayRoute(directionsService, directionsDisplay){
  	var waypts = [];
  	this.origin = "'"+this.result.Location01.nickmap+"'";
  	this.destination = "'"+this.result.Location03.nickmap+"'";

  	waypts.push({
  		location: "'"+this.result.Location02.nickmap+"'",
  		stopover: true
  	});

  	directionsService.route({
          origin: this.origin,
          destination: this.destination,
          waypoints: waypts,
          optimizeWaypoints: true,
          travelMode: 'DRIVING'
        }, (response, status)=>{
          if (status === 'OK') {
             directionsDisplay.setDirections(response);
          } else {
            this.toast.create({
          message: 'ไม่สามารถแสดงเส้นทางได้เนืองจาก Location บางตำแหน่งผิดพลาด',
          duration: 3000,
          position: 'top'
        }).present();
          }
        });
  }
  getfdbdata(){
  	this.cc = this.fdb.database.ref('Mytrip/'+this.list)
    this.cc.on('value',data=>{
  		this.result = data.val() ;
	});
  }

  deletetrip(_uid,_nametrip){
    this.fdb.database.ref('Mytrip/'+_nametrip+_uid).remove();
    this.fdb.database.ref('nametrip/'+_uid+'/'+_nametrip).remove();
    this.toast.create({
          message: 'ได้ทำการลบ '+_nametrip+' เรียบร้อย',
          duration: 3000,
          position: 'top'
        }).present();
    this.navCtrl.pop();
  }
}
