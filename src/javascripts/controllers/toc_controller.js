import { Controller } from "@hotwired/stimulus"

/** Build "On this page" from #content headings; assign missing ids */
export default class extends Controller {
  static values = { rootId: String }

  connect() {
    this._root = document.getElementById(this.rootIdValue)
    this._list = this.element.querySelector("[data-toc-list]")
    if (!this._root || !this._list) return

    let n = 0
    this._root.querySelectorAll("h2, h3").forEach((h) => {
      if (!h.id) {
        n += 1
        h.id = `section-${n}`
      }
    })

    const headings = [...this._root.querySelectorAll("h2, h3")]
    this._list.innerHTML = headings
      .map((h) => {
        const indent = h.tagName === "H3" ? "pl-4" : ""
        const t = (h.textContent || "").trim()
        const safe = t.replace(/</g, "&lt;").replace(/>/g, "&gt;")
        return `<li class="-ml-px border-l border-transparent pl-4 hover:border-base-300 hover:text-base-content has-[a[aria-current=location]]:border-base-content">
          <a href="#${h.id}" class="block text-sm/6 text-base-content/70 ${indent}" aria-current="false" data-toc-anchor>${safe}</a>
        </li>`
      })
      .join("")

    this._onClick = (e) => {
      const a = e.target.closest("a[data-toc-anchor]")
      if (!a) return
      const id = (a.getAttribute("href") || "").replace(/^#/, "")
      if (!id) return
      const target = document.getElementById(id)
      if (!target) return
      e.preventDefault()
      target.scrollIntoView({ behavior: "smooth", block: "start" })
      try {
        history.replaceState(history.state, "", `#${id}`)
      } catch {
        // ignore
      }
      this._highlight()
    }
    this._list.addEventListener("click", this._onClick)

    this._onScroll = () => this._highlight()
    window.addEventListener("scroll", this._onScroll, { passive: true })
    this._highlight()
  }

  disconnect() {
    window.removeEventListener("scroll", this._onScroll)
    this._list?.removeEventListener("click", this._onClick)
  }

  _highlight() {
    if (!this._root || !this._list) return
    const heads = [...this._root.querySelectorAll("h2, h3")]
    if (!heads.length) return
    const top = window.scrollY + this._scrollPad() + 8
    let current = heads[0].id
    for (const h of heads) {
      const rect = h.getBoundingClientRect()
      const y = rect.top + window.scrollY
      if (y <= top + 40) current = h.id
    }
    this._list.querySelectorAll("a[data-toc-anchor]").forEach((a) => {
      const on = a.getAttribute("href") === `#${current}`
      a.setAttribute("aria-current", on ? "location" : "false")
      if (on) {
        a.classList.add("font-medium", "text-base-content")
      } else {
        a.classList.remove("font-medium", "text-base-content")
      }
    })
  }

  _scrollPad() {
    const sp = getComputedStyle(document.documentElement).scrollPaddingTop
    const n = parseFloat(sp)
    return Number.isFinite(n) ? n : 64
  }
}
