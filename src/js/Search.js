class Search {
  privat = { catalogFilter: [] }
  constructor(search, inCatalog) {
    this.search = document.querySelector(search)
    this.field = this.search.querySelector('input')
    this.button = this.search.querySelector('button')
    this.catalog = inCatalog
    this.#init()
  }
  #init() {
    this.#filt()
    this.#handler()
  }

  get catalogFilter() {
    return this.privat.catalogFilter
  }

  set catalogFilter(catalog) {
    let body = document.querySelector('body')
    this.privat.catalogFilter = catalog
    let event = new Event("search");
    body.dispatchEvent(event);
    return true
  }

  #handler() {
    this.search.addEventListener('click', (e) => {
      e.preventDefault()
      if (e.target.tagName === 'BUTTON') {
        this.#filt()
      }
    })
  }
  #filt() {
     
    if (this.field.value !== '') {
      let regEXP = new RegExp(this.field.value, 'gi')
      this.catalogFilter = this.catalog.filter((g) => regEXP.test(g.title))
    } else {
      this.catalogFilter = this.catalog
    }
  }
}

export default Search
