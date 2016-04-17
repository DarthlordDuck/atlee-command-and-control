import { Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {VideoPlayer} from '../VideoPlayer/VideoPlayer';


@Component({
  selector: 'atleecommandandcontrol',
  directives: [ CORE_DIRECTIVES , VideoPlayer],
  templateUrl: './components/CommandAndControl/CommandAndControl.html'
})

export class CommandAndControl {}