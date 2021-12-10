import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  cadastroPayment!: FormGroup;


  constructor(private fb: FormBuilder, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.cadastroPayment = this.fb.group({
      cardNumber: [ null,[Validators.required,]],
      validity: [ '',[Validators.required]],
      cvv: [ null,[Validators.required,]],
      cardHolderName: ['',Validators.required,],
      cpf:['', [Validators.required]],
    })
  }


  onSubmit(){
    if(this.cadastroPayment.valid){

      window.localStorage.setItem('cadastroPayment', JSON.stringify(this.cadastroPayment.value));
      this.router.navigateByUrl('/adress');
    }
  }

}
