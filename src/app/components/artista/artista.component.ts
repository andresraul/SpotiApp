import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent {

  loading: boolean;

  artista: any = {};

  topTracks: any;

  constructor(private router: ActivatedRoute, private spotify: SpotifyService) { 
    this.loading = true;
    this.router.params.subscribe((params: any) => {
this.getArtista(params.id);
this.getTopTracks(params.id);

  });



  }

  getArtista(id: any) {
    this.spotify.getArtista( id ).subscribe((artista: any) => {
      console.log(artista);
      this.artista = artista;
      this.loading = false;
    });

  }

  getTopTracks(id: any) {
    this.spotify.getTopTracks( id ).subscribe((topTracks: any) => {
      console.log(topTracks);
      this.topTracks = topTracks;
  });
}

}
