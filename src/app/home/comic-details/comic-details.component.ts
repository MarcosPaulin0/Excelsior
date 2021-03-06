
import { Component, OnInit,} from '@angular/core';
import { MarvelService } from 'src/app/services/marvel.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-comic-details',
  templateUrl: './comic-details.component.html',
  styleUrls: ['./comic-details.component.css']
})
export class ComicDetailsComponent implements OnInit {

  id = '';
  hq: any;
  data: any;
  sale = false;


  constructor(private marvelService: MarvelService, private activatedRoute: ActivatedRoute,) {
      this.id = this.activatedRoute.snapshot.paramMap.get("id") as string;
  }

  ngOnInit(): void {
     // debugger
     this.marvelService.getMarvelComicsById(this.id).subscribe(
      data => {
        this.hq = data.data.results[0];
        console.log(data.data.results[0]);
        this.data = this.hq.dates[0].date;


      }
    )
  }

  onSubmit(){

    this.sale = true;
  }

  closeMessage(event: boolean){
    this.sale = event;
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
