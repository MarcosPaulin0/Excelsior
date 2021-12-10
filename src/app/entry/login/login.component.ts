import  Swal  from 'sweetalert2';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  nickname!: string;
  password!: string
  hide = true;
  login !: FormGroup;

  constructor( private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.login = new FormGroup({
      nickname: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),

    })

  }

  onSubmit() {
    window.localStorage.getItem('cadastroAccount');
    let usuario = JSON.parse(window.localStorage.getItem('cadastroAccount') || '{}');
    this.nickname = (usuario.nickname);
    this.password = (usuario.password);


    if( this.nickname === this.login.value.nickname && this.password === this.login.value.password){
      this.login.reset();
      this.router.navigateByUrl('/home')
    }else{
      Swal.fire({
        title: 'Usuário não encontrado'
      })
    }
  }
}



