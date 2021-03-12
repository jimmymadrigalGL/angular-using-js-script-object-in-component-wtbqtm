import { Component, OnInit, Renderer2 } from '@angular/core';

declare var ElementAComponent: any;

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isInit = false;

  constructor(private renderer: Renderer2) {
    
  }

  ngOnInit() {
    // const script = this.renderer.createElement('script');
    // script.src = `http://localhost:5008/a-element.js`;
    // script.onLoad = event => { console.log('event', event) }
    // this.renderer.appendChild(document.head, script);
  }

  initLE() {
    const el = this.renderer.createElement('element-a')
    this.renderer.appendChild(document.body, el);
    // console.log(ElementAComponent)
    this.isInit = true;
  }

  log() {
    ElementAComponent.log("Hello, logger!");
  }
}
