import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { AngularFireDatabase} from 'angularfire2/database';
import { ViewitemPage } from '../viewitem/viewitem';
/**
 * Generated class for the DosearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dosearch',
  templateUrl: 'dosearch.html',
})
export class DosearchPage {
	range:any;
	geo =[];
	items=[];
	result=[];
	xrange:any;
	yrange:any;
	xerange:any;
	yerange:any;
	uid:any;
  constructor(public navCtrl: NavController, public navParams: NavParams , private fdb: AngularFireDatabase ,private toast:ToastController) {

  }

  ionViewDidLoad() {
  	this.uid = this.navParams.get('uid');
  	this.range = this.navParams.get('range');
  	this.geo = [this.navParams.get('geo')];
  	this.getfdbdata();
    console.log(this.geo);
    setTimeout(()=>{
    	this.searchdata(this.range);
    },1000);
    setTimeout(()=>{
      if(this.result.length < 1){
      this.toast.create({
          message: 'ไม่พบโครงสถานที่โครงการตามระยะทางที่กำหนด',
          duration: 3000,
          position: 'top'
        }).present()
      }
      else{
      this.toast.create({
          message: 'ผลการค้นหามีจำนวณทั้งหมด '+this.result.length+' โครงการ',
          duration: 3000,
          position: 'top'
        }).present()
      }
    },1500);
    
  }
  getfdbdata(){
  	this.fdb.list('Items/').valueChanges().subscribe(_data =>{
    this.items =_data;
  })﻿;
  }
  searchdata(range){
  	this.yrange = this.geo[0].lati + (range * 0.00475059) ;
  	this.yerange = this.geo[0].lati - (range * 0.00475059) ;
  	this.xrange = this.geo[0].long + (range * 0.00475059) ;
  	this.xerange = this.geo[0].long - (range * 0.00475059) ;
  	// console.log(this.yrange,this.yerange,this.xrange,this.xerange);
  	for (var i = this.items.length - 1; i >= 0; i--) {
  		if(this.items[i].lati < this.yrange && this.items[i].lati > this.yerange && this.items[i].long < this.xrange && this.items[i].long > this.xerange){
  			this.result[this.result.length++] = this.items[i]; 
  		}
  	}
  	
  }

  viewitem(_item:any,_id:any,_uid:any){
    this.navCtrl.push(ViewitemPage,{item:_item,id:_id,uid:_uid});
  }
}
