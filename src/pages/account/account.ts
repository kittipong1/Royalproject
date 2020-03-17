import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App} from 'ionic-angular';
import { AngularFireAuth}from 'angularfire2/auth';
import { AngularFireDatabase} from 'angularfire2/database';
import { ViewcheckinPage } from '../viewcheckin/viewcheckin';
import { ViewtripPage } from '../viewtrip/viewtrip';
/**
 * Generated class for the AccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {
  data:any;
  uid ; 
  result;
  constructor(private afAuth: AngularFireAuth , public navCtrl: NavController, public navParams: NavParams , public app : App, private fdb: AngularFireDatabase) {
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

    setTimeout(()=>{
      this.fdb.list("nametrip/"+this.uid).valueChanges().subscribe(_data =>{
    this.result =_data;
    })﻿;
    },1500);
    
  }
 stuid(Auid){
    this.uid = Auid ;
  }
  dotrip(_uid:any,_nametrip:string){
    this.navCtrl.push(ViewtripPage,{uid:_uid,nametrip:_nametrip});
  }
  docheckin(_uid:any){
    this.navCtrl.push(ViewcheckinPage,{uid:_uid});
  }
 }
