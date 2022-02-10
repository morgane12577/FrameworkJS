import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class MultiSelectComponent extends Component {
  //Tableau des élément dans le composent
  @tracked elements = [];

  //Tableau des éléments séléctionnés du composant
  selected = [];

  id = 'id';

  constructor() {
    super(...arguments);
    this.elements = this.args.elements;
    this.selected = this.args.selected;

    //Id par défaut
    this.id = this.args.identifier || 'id';
  }

  //Lance cette méthode quand l'événement correspondant est réalisé
  @action
  change(event) {
    //récupère l'élément sur lequel l'utilisateur a cliqué
    let select = event.target;

    //met dans un tableau les value des éléments sélectionnés
    var selectedIds = [...select.selectedOptions].map((option) => option.value);

    //S
    if (this.args.onChange) {
      this.args.onChange(
        this.elements.filter(
          (elm) => selectedIds.filter((e) => e == elm[this.id]).length > 0
        )
      );
    }
  }
}
