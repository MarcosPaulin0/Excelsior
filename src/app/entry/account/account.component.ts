import { HttpClient } from '@angular/common/http';

import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';



@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  hide = true;
  cadastroAccount!: FormGroup;


  constructor( private fb: FormBuilder,private router: Router ,
     private userService: UserService, private http: HttpClient) { }

  ngOnInit(): void {
   this.cadastroAccount = this.fb.group({
      nickname: [
        null,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(15),
          Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[.-_])[A-Za-z\d.-_].{3,15}')
          //3 a 15 caracteres entre maiusculo, minusculo, numero e aplicando os caracteres especiais
        ]
    ],
      firstName: [
        null,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(10),
          Validators.pattern('(?=.*[a-z])(?=.*[A-Z])[A-Za-z].{3,10}')
          //3 a 10 caracteres entre maiusculo e minusculo

        ]
    ],
      lastName: [
        null,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(10),
          Validators.pattern('(?=.*[a-z])(?=.*[A-Z])[A-Za-z].{3,10}')
          //3 a 10 caracteres entre maiusculo e minusculo
        ]
      ],
      email: ['', [Validators.required ,Validators.email]],
      contact: [null, [Validators.required]],

      password:[
        null,
        [
          Validators.required,
          Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])||(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8}')
          // 8 caracteres sendo letras maiusculas e minusculas, numeros e caracteres especiais
        ]],
    })
  }


  onSubmit() {

    if(this.cadastroAccount.valid){
      window.localStorage.setItem('cadastroAccount', JSON.stringify(this.cadastroAccount.value));

      this.router.navigateByUrl('/payment');

    }
  }

}








