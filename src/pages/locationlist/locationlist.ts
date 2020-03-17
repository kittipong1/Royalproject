
import { Component } from '@angular/core';
import { Platform ,IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import { AngularFireDatabase} from 'angularfire2/database';
import { ViewitemPage } from '../viewitem/viewitem';
import { AngularFireAuth} from 'angularfire2/auth';
/**
 * Generated class for the LocationlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-locationlist',
  templateUrl: 'locationlist.html',
})
export class LocationlistPage {
  textSearch:string;
  items = [] ;
  result ;
  uid:any;
  constructor(public platform: Platform , public navCtrl: NavController, public navParams: NavParams , private fdb: AngularFireDatabase ,
   private toast:ToastController , private afAuth: AngularFireAuth ) {
  this.fdb.list("Items/").valueChanges().subscribe(_data =>{
    this.result =_data;
  })﻿;
      
    setTimeout(fun=>{
       this.initializeitems();
     },3000);
  }

  stuid(Auid){
    this.uid = Auid ;
  }

  ionViewWillLoad(){
     this.afAuth.authState.subscribe(data=>{
      if(data && data.email && data.uid){
        const modeluser = data ;
        this.stuid(data.uid);
        this.toast.create({
          message: 'Wellcome to Royalproject Application  '+modeluser.email,
          duration: 3000
        }).present()
      }
    });
     setTimeout(()=>{
       if(this.uid == undefined){
         this.toast.create({
          message: 'Email หรือ Password ผิด ไม่สามาเข้าใช้งานได้ กรุณาเข้าสู่ระบบใหม่อีกครั้ง',
          duration: 3000
        }).present();
         
       }
     },1500);
  }

  initializeitems(){
     this.items = this.result;
  }

  viewitem(_item:any,_id:any,_uid:any){
    this.navCtrl.push(ViewitemPage,{item:_item,id:_id,uid:_uid});
  }

  filterItems(ev: any) {
    this.initializeitems();
    let val = ev.target.value;

    if (val) {
   
        this.items = this.items.filter(item=>{

        if(!item.nameplace) return false;

         return (item.nameplace.toLowerCase().indexOf(val.toLowerCase()) > -1);
           });
        
    }
  }
}
