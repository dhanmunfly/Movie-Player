import { ExchangedataService } from './../exchangedata.service';
import { PlaylistComponent } from './../playlist/playlist.component';
import { Component, OnInit, ViewChild,  AfterViewInit} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit , AfterViewInit {


  constructor(private exchangedataService:ExchangedataService,public sanitizer: DomSanitizer) { }

  playerUrlItem: string;

  ngOnInit() {
    this.exchangedataService.url.subscribe(url =>{
      this.playerUrlItem = url;
    } );
  }


  ngAfterViewInit() {
  }
}

