import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { AngularFireDatabase} from 'angularfire2/database';
/**
 * Generated class for the CreatetripPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-createtrip',
  templateUrl: 'createtrip.html',
})
export class CreatetripPage {
	uid:any;
	tripname:any;
	details:any;
	date:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private fdb: AngularFireDatabase,private toast:ToastController) {
  }

  ionViewDidLoad() {
  	this.uid = this.navParams.get('uid');
  }

  createnametrip(){
  	this.fdb.database.ref('nametrip/'+this.uid+'/'+this.tripname).set({
  		tripname: this.tripname,
        details: this.details,
        date: this.date
        });
     this.fdb.database.ref('Mytrip/'+this.tripname+this.uid).set({
      Location01:{nameplace:'a',nickmap:'a'},
      Location02:{nameplace:'a',nickmap:'a'},
      Location03:{nameplace:'a',nickmap:'a'}
        });
        this.toast.create({
          message: 'สร้างทริป '+this.tripname+' เรียบร้อย',
          duration: 3000,
          position: 'top'
        }).present() 
        this.navCtrl.pop();
  }
}
