import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  imc={};
  listaImc=[];

  constructor(public navCtrl: NavController) {

  }
  calcularImc()
  {
    this.imc.resultado = parseFloat(this.imc.peso)/
    ( Math.pow(parseFloat(this.imc.altura),2));
    this.listaImc.push(this.imc);
    this.imc={peso:'',altura:'',nome:''};
  }

}
