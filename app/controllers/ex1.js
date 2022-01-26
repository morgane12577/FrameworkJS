import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class Ex1Controller extends Controller {
  @tracked content = 'Entrez votre texte';
  @tracked info = '';
  MAX = 100;


  get style() {
    if (this.size >50) return 'alert-success' ;
    if (this.size<50 && this.size>25) return 'alert-warning';
    if (this.size<25) return'alert-danger' ;

  }

  get size() {
    return this.MAX - this.content.length;
  }

  @action
  clear() {
    this.content ='';
    this.info ='';
  }

  @action
  save (){
    this.info = 'Note sauvegardée';
  }

  @action
  update(){
    this.info = 'Note modifiée';
  }
}
