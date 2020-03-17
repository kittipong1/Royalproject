import { Component , ViewChild , ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams , AlertController ,ToastController} from 'ionic-angular';
import { AddtripPage } from '../addtrip/addtrip';
import { AngularFireDatabase} from 'angularfire2/database';

/**
 * Generated class for the ViewitemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var google:any;

@IonicPage()
@Component({
  selector: 'page-viewitem',
  templateUrl: 'viewitem.html',
})
export class ViewitemPage {
	details = []
  id
  lati:any;
  long:any;
  uid:any;
  testRadioOpen: boolean;
  testRadioResult;
  ratingvalue:any;
  cc;
  nickmap;
  @ViewChild('map') mapRef : ElementRef;
  map:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public alerCtrl: AlertController,private fdb: AngularFireDatabase,private toast:ToastController) {
  	this.details = this.navParams.get('item');
    this.id = this.navParams.get('id');
    this.uid = this.navParams.get('uid');
    this.lati = this.details['lati'];
    this.long = this.details['long'];
    this.nickmap = this.details['nickmap'];
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewitemPage');
    this.showMap();
    this.getratingdata();
 
  }

  getratingdata(){
    this.cc = this.fdb.database.ref('Ratings/'+this.id+'/'+this.uid)
    this.cc.once("value")
  .then(snapshot=>{
    var name = snapshot.child("avalue").val(); 
    if(name != null){
      document.getElementById("rating").innerHTML = "rating :" + name ;
    }else{
      document.getElementById("rating").innerHTML = "rating : คุณยังไม่ได้ให้คะแนน"
    }
  });
  }

  showMap(){
    const location = new google.maps.LatLng(this.lati,this.long);
    const option = {
      center: location,
      zoom:12,
      streetViewControl:true,
      mapTypeId:'roadmap'//roadmap , satellite , hybrid , terrain
    };
    this.map = new google.maps.Map(this.mapRef.nativeElement,option);
    this.addMarker(location,this.map);
  }
  addMarker(position,map){
    return new google.maps.Marker({
      position,
      map
    });
  }
 
  doaddtrip(_uid:any,_idplace:any,_lati:any,_long:any,_nickmap:any,_nameplace:any){
    this.navCtrl.push(AddtripPage,{uid:_uid,idplace:_idplace,lati:_lati,long:_long,nickmap:_nickmap,nameplace:_nameplace});
  }
  docheckin(uid,id,_nameplace){
        if(uid && id){
        this.fdb.database.ref('Checkin/'+uid+'/'+id).set({
        nameplace : _nameplace 
        });
        this.toast.create({
          message: 'Checkin เรียบร้อย',
          duration: 3000,
          position: 'top'
        }).present() 
      }
  }

  doRadio(uid,id){
     let alert = this.alerCtrl.create();
    alert.setTitle('Rating Vote');

    alert.addInput({
      type: 'radio',
      label: '1',
      value: '1',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      label: '2',
      value: '2'
    });

    alert.addInput({
      type: 'radio',
      label: '3',
      value: '3'
    });

    alert.addInput({
      type: 'radio',
      label: '4',
      value: '4'
    });

    alert.addInput({
      type: 'radio',
      label: '5',
      value: '5'
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Ok',
      handler: data => {
        console.log('Radio data:', data);
        this.testRadioOpen = false;
        this.testRadioResult = data;
        if(uid && id){
        this.fdb.database.ref('Ratings/'+id+'/'+uid).set({
        avalue : data ,
        });console.log ('Save Susess');
        }else{
        console.log ('Save Error');
        }
      }
    });

    alert.present().then(() => {
      this.testRadioOpen = true;
    });
  
  }

}
