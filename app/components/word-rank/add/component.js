import Ember from 'ember';


const {
  inject: {service},
  computed
} = Ember;

export default Ember.Component.extend({
  store: service(),
  words: computed(function () {
    return this.get('store').findAll('word-rank')
  }),
  init() {
    this._super(...arguments);

    this._setWordRank();
  },

  actions: {
    addWord() {
      this._setWordRank();
    },
    editWord(word) {
      this.set('wordRank', word)
    }
  },

  _setWordRank() {
    this.set('wordRank', this.get('store').createRecord('word-rank'))
  }
});
