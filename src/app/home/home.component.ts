import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  router: any;


  constructor() { }

  ngOnInit(): void {
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
