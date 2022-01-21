import { isSyntheticPropertyOrListener } from '@angular/compiler/src/render3/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // Speech Synthesis
  private synth = window.speechSynthesis;
  private voices = this.synth.getVoices();

  public speech = new SpeechSynthesisUtterance("test");
  ngOnInit(){
    this.synth.speak(this.speech);
  }


  // Add validation for spelling word input compared to spellingWord
}
