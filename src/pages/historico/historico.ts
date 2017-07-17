import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HistoricoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-historico',
  templateUrl: 'historico.html',
})
export class HistoricoPage {

  public descricaoFoto: string = "Roberta Miranda do Cód";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public testeDeFuncao(): void{
    alert('Funcionando');
  }

  ionViewDidLoad() {
   //this.testeDeFuncao();
  }

}
