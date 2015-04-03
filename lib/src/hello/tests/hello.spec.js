import angular from 'angular';
import mocks from 'angular-mocks';
import {Hello} from '../hello';
import '../templates/hello.html!text';
import '../styles/style.css!'

describe('Hello', function(){
  it('returns world', function(){
    let hello = new Hello();
    expect(hello.world()).to.equal('world');
  });
});
