import { Controller } from "@hotwired/stimulus"

/** Mirrors reference player: mark container offscreen + mini player while playing */
export default class extends Controller {
  static targets = ["container", "video"]

  connect() {
    this._observer = new IntersectionObserver(
      ([entry]) => {
        if (!this.hasContainerTarget) return
        if (!entry.isIntersecting) {
          this.containerTarget.setAttribute("data-offscreen", "")
        } else {
          this.containerTarget.removeAttribute("data-offscreen")
        }
      },
      { threshold: 0.5 },
    )
    if (this.hasContainerTarget) this._observer.observe(this.containerTarget)
    if (this.hasVideoTarget) {
      this.videoTarget.addEventListener("play", () => {
        this.videoTarget.setAttribute("data-playing", "")
      })
      this.videoTarget.addEventListener("pause", () => {
        if (!this.containerTarget?.hasAttribute("data-offscreen")) {
          this.videoTarget.removeAttribute("data-playing")
        }
      })
    }
  }

  disconnect() {
    this._observer?.disconnect()
  }
}
