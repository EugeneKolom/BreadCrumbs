export { LinkList }

class LinkList extends EventTarget {
  constructor(labels) {
    super()
    this.labels = labels
    this.render()
    this.assignListeners()
  }

  render() {
    const ul = document.createElement('ul')
    ul.className = 'list'
    ul.innerHTML = this.labels.map(label => `
      <li class="link">
        <a href="">${label}</a>
      </li>
    `).join('')
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
    this.element.innerHTML = labels.map(label => `
      <li class="link">
        <a href="">${label}</a>
      </li>
    `).join('')
  }
}