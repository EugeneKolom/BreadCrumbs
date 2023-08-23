import { Breadcrumbs } from "./breadcrumbs.js"
import { LinkList } from "./link-list.js"

export { PlaceNavigation }

class PlaceNavigation {
  constructor(placeTree) {
    this.placeTree = placeTree
    this.breadcrumbs = new Breadcrumbs([placeTree.name])
    this.linkList = new LinkList(placeTree.places.map(place => place.name))
    this.render()
    this.breadcrumbs.appendToParent(this.element)
    this.linkList.appendToParent(this.element)
    this.placeDict = PlaceNavigation.buildDict(placeTree)
    this.assignListeners()
  }

  render() {
    const nav = document.createElement('nav')
    nav.className = 'place-navigation'
    this.element = nav
  }

  appendToParent(parent) {
    parent.append(this.element)
  }

  assignListeners() {
    this.breadcrumbs.addEventListener('choice', this.handleChoice.bind(this))
    this.linkList.addEventListener('choice', this.handleChoice.bind(this))
  }

  handleChoice(e) {
    const path = e.detail
    const pathLabels = this.getPathLabels(path)
    const subLabels = this.getSubLabels(pathLabels)
    this.breadcrumbs.update(pathLabels)
    this.linkList.update(subLabels)
  }

  getPathLabels(path) {
    const labels = [path]
    while (path in this.placeDict) {
      path = this.placeDict[path]
      labels.unshift(path)
    }
    return labels
  }

  getSubLabels(pathNames) {
    let place = this.placeTree
    for (const name of pathNames.slice(1)) {
      place = place.places.find(place => place.name === name)
    }
    return place.places.map(place => place.name)
  }

  static buildDict(placeTree) {
    const dict = Object.fromEntries(placeTree.places.map(({ name }) => [name, placeTree.name]))

    return Object.assign(dict, ...placeTree.places.map(PlaceNavigation.buildDict))
  }
}