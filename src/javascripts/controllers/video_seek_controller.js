import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static values = { seconds: Number, videoId: String }

  seek() {
    const el = document.getElementById(this.videoIdValue)
    if (!el || typeof el.currentTime !== "number") return
    el.currentTime = this.secondsValue
    el.play?.()
  }
}
