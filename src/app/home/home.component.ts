import { MarvelService } from './../services/marvel.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  router: any;
  public hqMarvel: any = [];





  constructor(private marvelService: MarvelService) { }

  ngOnInit(): void {

   this.marvelService.callHqMarvel().subscribe((resultado: any) => {
      if(resultado && resultado.data && resultado.data.results)
      this.hqMarvel =  resultado.data.results;
      console.log(this.hqMarvel);
    });

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
