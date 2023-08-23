export { Breadcrumbs }

class Breadcrumbs extends EventTarget {
  constructor(labels) {
    super()
    this.labels = labels
    this.render()
    this.assignListeners()
  }

  render() {
    const ul = document.createElement('ul')
    ul.className = 'breadcrumbs'
    ul.innerHTML = `
      <a href="">${this.labels[0]}</a>
      ${this.labels.slice(1).map(label => `
        <li>
          <a href="">${label}</a>
        </li>
      `).join('')}
    `
    this.element = ul
  }

  appendToParent(parent) {
    parent.append(this.element)
  }

  assignListeners() {
    this.element.addEventListener('click', e => {
      e.preventDefault()

      if (e.target.localName != 'a') return

      const event = new CustomEvent('choice', {
        detail: e.target.textContent
      })
      this.dispatchEvent(event)
    })
  }

  update(labels) {
    this.labels = labels
    this.element.innerHTML = `
      <a href="">${labels[0]}</a>
      ${labels.slice(1).map(label => `
        <li>
          <a href="">${label}</a>
        </li>
      `).join('')}
    `
  }
}