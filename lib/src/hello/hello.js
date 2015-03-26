import './styles/style.css!'
import myDictionary from './translations/english.json!';
// import angular from 'angular';

export class Hello {
  constructor() {}
  world() {
    return myDictionary.world;
  }
}
