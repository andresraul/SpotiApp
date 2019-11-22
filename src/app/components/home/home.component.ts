import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
pais: any[] = [];

nuevasCanciones: any[] = [];

loadin: boolean;
  constructor(/* private http: HttpClient, */
    private spotifyService: SpotifyService) {
    /* this.http.get('https://restcountries.eu/rest/v2/lang/es')
    .subscribe((paises: any) => {
      this.pais = paises;
      console.log(paises);
    }); */

    this.loadin = true;


    this.spotifyService.getNewReleases()
      .subscribe((data: any) => {
      console.log(data);
      this.nuevasCanciones = data;
      this.loadin = false;
    });



  }

  ngOnInit() {
    
  }

}
