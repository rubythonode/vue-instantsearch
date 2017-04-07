export default {
  inject: ['_searchStore'],
  props: {
    searchStore: {
      type: Object,
      default () {
        return this._searchStore
      },
      validator (value) {
        if (typeof value !== 'object') {
          throw 'It looks like you forgot to wrap your Algolia search component inside of an <search-store> component. You can also pass the store as a prop to your component.'
        }

        return true
      }
    },
    classNames: {
      type: Object,
      default () {
        return {}
      }
    },
  },
  methods: {
    bem (element, modifier) {
      const blockClassName = 'ais-pagination'
      if(!element) {
        return this.customClassName(blockClassName)
      }
      const elementClassName = blockClassName + '__' + element
      if (!modifier) {
        return this.customClassName(elementClassName)
      }

      const modifierClassName = elementClassName + '--' + modifier

      return this.customClassName(elementClassName) + ' ' + this.customClassName(modifierClassName)
    },
    customClassName (className) {
      return !this.classNames[className] ? className : this.classNames[className]
    }
  }
}
