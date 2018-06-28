import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  imc = {};
  listaImc = [];

  constructor(public navCtrl: NavController, private alertCtrl:AlertController) {
  }

  calcularImc(){
    this.imc.resultado = parseFloat(this.imc.peso)/Math.pow(parseFloat(this.imc.altura),2);
    this.listaImc.push(this.imc);
    this.imc = {peso:"", altura:"", nome:"", resultado:""};
  }

  exibirIMC(imcLista){
    this.alertCtrl.create({
      title: 'Dados IMC!',
      subTitle: 'Olá '+imcLista.nome+'seu imc é '+imcLista.resultado,
      buttons: ['OK']
    }).present();
  }
}
