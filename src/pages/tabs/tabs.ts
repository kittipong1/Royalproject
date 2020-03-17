import { Component } from '@angular/core';
import { Platform , IonicPage, NavController, NavParams ,App } from 'ionic-angular';
import { LocationlistPage } from '../locationlist/locationlist';
import { AccountPage } from '../account/account';
import { AboutusPage } from '../aboutus/aboutus';
import { SearchprojectPage } from '../searchproject/searchproject';
import { AngularFireAuth} from 'angularfire2/auth';
import { LoginPage } from '../login/login';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
	tab1:any;
	tab2:any;
	tab3:any;
	tab4:any;
  uid:any;
  constructor(public platform: Platform , public navCtrl: NavController, public navParams: NavParams, private afAuth: AngularFireAuth ,public appCtrl: App) {
	  this.tab1 = LocationlistPage;
	  this.tab2 = SearchprojectPage;
	  this.tab3 = AccountPage;
	  this.tab4 = AboutusPage;
  }

  ionViewDidLoad() {
  	this.afAuth.authState.subscribe(data=>{
      if(data && data.email && data.uid){
        this.uid = data.uid;
      }
    });
     setTimeout(()=>{
       if(this.uid == undefined){
         this.platform.ready().then(() => {
         this.appCtrl.getRootNav().setRoot(LoginPage);
       });
       }
     },1500);
  }
  
}
