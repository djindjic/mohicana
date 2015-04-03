import './styles/style.css!'
import './templates/hello.html!text'
import myDictionary from './translations/english.json!';
import angular from 'angular';

export class Hello {
  constructor() {}
  world() {
    return myDictionary.world;
  }
}
