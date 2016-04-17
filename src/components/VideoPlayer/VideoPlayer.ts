import { Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';

@Component({
  selector: 'videoplayer',
  directives: [ CORE_DIRECTIVES ],
  templateUrl: './components/VideoPlayer/VideoPlayer.html'
})

export class VideoPlayer {
    
    construct(){
        console.log("videoplayer");
    }
}