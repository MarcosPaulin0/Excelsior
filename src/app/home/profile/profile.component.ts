import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  nickname!: string;
  name!: string;
  email!: string;
  adress!: string;
  contact!: string;
  cardNumber!: string;
  cardHolderName!: string;
  validity!: string;
  number: any;

  constructor() { }

  ngOnInit(): void {
    //window.localStorage.getItem('cadastroAccount');
    let usuarioAccount = JSON.parse(window.localStorage.getItem('cadastroAccount') || '{}');
    this.nickname = (usuarioAccount.nickname);
    this.name = (usuarioAccount.firstName + '' + usuarioAccount.lastName);
    this.email = (usuarioAccount.email);
    let contactVar = (usuarioAccount.contact);
    let novoContato= contactVar.slice(0,6)+ '-' + contactVar.slice(7);
    this.contact = novoContato;

    //window.localStorage.getItem('cadastroAdress');
    let usuarioAdress = JSON.parse(window.localStorage.getItem('cadastroAdress') || '{}');
    this.adress = (usuarioAdress.adress+', '+ usuarioAdress.number +', '+ usuarioAdress.complement
    + ','+ usuarioAdress.district + ', '+ usuarioAdress.city + ', ' + usuarioAdress.cep);


    //window.localStorage.getItem('cadastroPayment');
    let usuarioPayment = JSON.parse(window.localStorage.getItem('cadastroPayment') || '{}');
    this.cardNumber = (usuarioPayment.cardNumber.slice(-4));
    this.cardHolderName = (usuarioPayment.cardHolderName);
    let cardDate =  (usuarioPayment.validity);
    let dateSplit = cardDate.slice(0,2)+ '/'+ cardDate.slice(2);
    this.validity = dateSplit;

  }



  logout(){
    Swal.fire({
      title: 'Do you really want to sign out?',
      showCancelButton: true,
      confirmButtonText: 'Sign out',
      denyButtonText: `Stay here`,
    }).then((result) =>{
      if(result.value){
        //Swal.fire('See ya', '', 'success');
        window.location.href = '/login';

      } else if (result.isDenied) {
        Swal.fire('', '', 'info')
      }
    })
  }
}
