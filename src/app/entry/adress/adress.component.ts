import { HttpClient } from '@angular/common/http';
import { CepService } from './cepService/cep.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adress',
  templateUrl: './adress.component.html',
  styleUrls: ['./adress.component.css']
})
export class AdressComponent implements OnInit {

  cadastroAdress!: FormGroup;
  retornoAdress: any;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private cepService: CepService,
    private router: Router
    ) { }

  ngOnInit(): void {
       this.cadastroAdress = this.fb.group({
      cep: ['',[Validators.required,]],
      adress: ['', [Validators.required]],
      number: ['',[Validators.required,]],
      complement: [''],
      district:['', [Validators.required]],
      city:['', [Validators.required]],
    })
  }

  consultaCEP(){
    let cep = this.cadastroAdress.get('cep')?.value;

    cep = cep.replace(/\D/g, '');

    //Verifica se campo cep possui valor informado.
    if (cep != "") {

      //Expressão regular para validar o CEP.
      var validacep = /^[0-9]{8}$/;

      //Valida o formato do CEP.
      if(validacep.test(cep)) {

        this.http.get(`//viacep.com.br/ws/${cep}/json`).subscribe(dados => this.populaDadosForm(dados));
      }

    }
  }

  populaDadosForm(dados: any) {
    //Pegamos os dados do viacep e associamos com o do formulario
    this.cadastroAdress.patchValue({
      adress: dados.logradouro,
      district: dados.bairro,
      city: dados.localidade
    })

  }

  cadastrar(){
    //const accountUser = this.cadastroAccount.getRawValue() as NovoUsuario;
    window.localStorage.setItem('cadastroAdress', JSON.stringify('cadastroAdress'));
    window.localStorage.getItem('cadastroAdress');
    let usuario = JSON.parse(window.localStorage.getItem('cadastroAdress') || '{}');

    this.retornoAdress = (localStorage.getItem('cadastroAdress'));

    console.log(this.retornoAdress.value);
    this.router.navigateByUrl('/login');
  }




  enviarDados(){
    console.log(this.cadastroAdress.value);

  }

}
function form(dados: Object, form: any): void {
  throw new Error('Function not implemented.');
}

