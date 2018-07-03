var recipes = new Object({sugar: '1 cup'});

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  recipes.flour = '2 cups';
  return recipes;
}

function deleteFromObjectByKey(object, key) {

}

function destructivelyDeleteFromObjectByKey(object, key) {

}
