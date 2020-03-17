import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase} from 'angularfire2/database';
/**
 * Generated class for the ViewcheckinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-viewcheckin',
  templateUrl: 'viewcheckin.html',
})
export class ViewcheckinPage {
	uid:any;
	cc;
	items = [] ;
  constructor(public navCtrl: NavController, public navParams: NavParams ,  private fdb: AngularFireDatabase) {
  }

  ionViewDidLoad() {
    this.uid = this.navParams.get('uid');
  	this.getfdbdata();
    setTimeout(()=>{
    },1000);
  }
  getfdbdata(){
  	this.fdb.list('Checkin/'+this.uid).valueChanges().subscribe(_data =>{
    this.items =_data;
  })﻿;
  }
}
