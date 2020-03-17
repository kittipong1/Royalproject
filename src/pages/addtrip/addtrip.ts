import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController} from 'ionic-angular';
import {
  FormGroup,
  FormControl
} from '@angular/forms';
import { CreatetripPage } from '../createtrip/createtrip';
import { AngularFireDatabase} from 'angularfire2/database';
/**
 * Generated class for the AddtripPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addtrip',
  templateUrl: 'addtrip.html',
})
export class AddtripPage {
  nametrip;
  nameForm;
  location;
  uid;
  idplace;
  lati;
  long;
  nickmap;
  nameplace;
  result;
  constructor(public navCtrl: NavController, public navParams: NavParams,private fdb: AngularFireDatabase,private toast:ToastController) {
  	this.lati = this.navParams.get('lati');
    this.long = this.navParams.get('long');
    this.nameplace = this.navParams.get('nameplace');
    this.idplace = this.navParams.get('idplace');
    this.nickmap = this.navParams.get('nickmap');
    this.uid = this.navParams.get('uid');

  	this.nameForm = new FormGroup({
      "nametrip": new FormControl(),
     "location": new FormControl({value: 'Location01', disabled: false})
     });
  }

  doSubmit(event) {
  	if(this.nameForm.value.location && this.nameForm.value.nametrip){
  		this.fdb.database.ref('Mytrip/'+this.nameForm.value.nametrip+this.uid+'/'+this.nameForm.value.location).set({
  		lati : this.lati ,
  		long : this.long ,
      nickmap : this.nickmap ,
      nameplace : this.nameplace 
    });
      this.toast.create({
          message: 'เพิ่มทริป '+this.nameplace+' ลงในทริปเรียบร้อย',
          duration: 3000,
          position: 'top'
        }).present() 
      this.navCtrl.pop();
  	}else{
  	console.log ('Save Error');
  	}
  }
  ionViewDidLoad() {
    this.fdb.list("nametrip/"+this.uid).valueChanges().subscribe(_data =>{
    this.result =_data;
  })﻿;
    setTimeout(()=>{
      // console.log(this.result);
    },1000)
  }
  docreatnamptrip(){
    this.navCtrl.push(CreatetripPage,{uid:this.uid});
  }
}
