import DS from 'ember-data';

const {
  Model,
  attr
} = DS;

export default Model.extend({
  word: attr('string'),
  translation: attr('string'),
  rank: attr('number')
});
