import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  nickname = '';
  password = '';
  hide = true;

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    let dados = `
    Nickname: ${form.value.nickname}
    Senha: ${form.value.password}`;
    console.log(form);

    console.log(dados);


  }



}
