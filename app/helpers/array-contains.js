import { helper } from '@ember/component/helper';

export default helper(function arrayContains(params /*, hash*/) {
  //On récupère ce qui a été passé en paramètres
  //items est un tableau
  //value est un objet
  //prop est une propriété
  const [items, value, prop] = params;

  //La propriété est id par défault
  let id = prop || 'id';

  //On retourne si il y a un élément dans le tableau qui a la propriété passée en paramètre
  return items.filterBy(id, value[id]).length > 0;
});
