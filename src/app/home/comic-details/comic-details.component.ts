import { Component, OnInit } from '@angular/core';
import { MarvelService } from 'src/app/services/marvel.service';
import {MatSnackBar, MatSnackBarConfig, MatSnackBarModule} from '@angular/material/snack-bar';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-comic-details',
  templateUrl: './comic-details.component.html',
  styleUrls: ['./comic-details.component.css']
})
export class ComicDetailsComponent implements OnInit {

  constructor(private marvelService: MarvelService, private _snackBar: MatSnackBar) { }

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

  onSubmit(){
    this._snackBar.open('Successful purchase!', 'X',{
      horizontalPosition: 'center',
      panelClass: ['white-snackbar'],
    });
  }





}
