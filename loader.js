exports.default = function (source) {
  const path = this.resourcePath
  let name = path.substring(path.lastIndexOf("/") + 1)
  name = name.substring(0, name.indexOf("."))
  return `window.customElements.define(${JSON.stringify(name)},
    class extends HTMLElement {
      connectedCallback () {
        this.innerHTML = ${JSON.stringify(source)}
      }
    })`
}
