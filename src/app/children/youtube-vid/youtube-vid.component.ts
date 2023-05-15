import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-youtube-vid',
  templateUrl: './youtube-vid.component.html',
  styleUrls: ['./youtube-vid.component.css']
})
export class YoutubeVidComponent {

  constructor(private domSanitizer: DomSanitizer){}

  @Input() key: string =""
  @Input() title: string =""

  saveUrl(key:string){
    return this.domSanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${key}`)
  }



}
