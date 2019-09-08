import { ExchangedataService } from './../exchangedata.service';
import { GetPlaylistFromApiService } from '../get-playlist-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {

  playListItems: any;

  playerUrlItem: string;

  constructor(private playlistItemsService: GetPlaylistFromApiService,
              private exchangedataService: ExchangedataService) { }

  ngOnInit() {
    this.getPlayListItems();
  }

  getPlayListItems() {
    this.playlistItemsService.getTrailerListFromApi()
      .subscribe((data) => {
        this.playListItems = data;
        this.playerUrlItem = data[0].trailer;this.exchangedataService.sendUrl(this.playerUrlItem);
      });

  }

  setUrlForPlayer(playitems){
    this.exchangedataService.sendUrl(playitems.trailer);
  }

}
