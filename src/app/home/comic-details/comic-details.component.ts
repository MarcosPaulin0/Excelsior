import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { MarvelService } from 'src/app/services/marvel.service';
import {MatSnackBar, MatSnackBarConfig, MatSnackBarModule} from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comic-details',
  templateUrl: './comic-details.component.html',
  styleUrls: ['./comic-details.component.css']
})
export class ComicDetailsComponent implements OnInit {

  idComic!: any;
  comicDetails: any;
  comicTitle!: string;

  constructor(private marvelService: MarvelService, private _snackBar: MatSnackBar,
    private _activatedRoute: ActivatedRoute,) {
    this._activatedRoute.params.subscribe(params => {
        //debugger
        this.idComic = params['id'];
      });
  }

  ngOnInit(): void {
     // debugger
    this.marvelService.callHqMarvelDetails(this.idComic).subscribe((resultado: any) => {
      //debugger
      if(resultado && resultado.data && resultado.data.results)
        this.idComic =  resultado.data.results;

      //this.comicTitle = this.comicDetails.title;

      console.log(this.idComic);
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

  onSubmit(){
    this._snackBar.open('Successful purchase!', 'x',{
      horizontalPosition: 'center',
      panelClass: ['white-snackbar'],
    });
  }





}
