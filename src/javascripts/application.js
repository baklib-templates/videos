import * as Turbo from "@hotwired/turbo"
import { Application } from "@hotwired/stimulus"
import Alpine from "alpinejs"
import collapse from "@alpinejs/collapse"

import VideoPlayerController from "./controllers/video_player_controller.js"
import TocController from "./controllers/toc_controller.js"
import VideoSeekController from "./controllers/video_seek_controller.js"

window.Turbo = Turbo

const stimulus = Application.start()
window.Stimulus = stimulus
stimulus.register("video-player", VideoPlayerController)
stimulus.register("toc", TocController)
stimulus.register("video-seek", VideoSeekController)

Alpine.store("theme_shell", {
  sidebarOpen: true,
  mobileNavOpen: false,
  mobileCourseOpen: false,
  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen
  },
  toggleMobileNav() {
    this.mobileNavOpen = !this.mobileNavOpen
  },
  toggleMobileCourse() {
    this.mobileCourseOpen = !this.mobileCourseOpen
  },
})

window.Alpine = Alpine
Alpine.plugin(collapse)
Alpine.start()

// Turbo: when navigating within main frame, reset scroll to top.
document.addEventListener("turbo:frame-load", (event) => {
  const frame = event.target
  if (!(frame instanceof HTMLElement)) return
  if (frame.id !== "main-content-frame") return
  requestAnimationFrame(() => {
    // Use auto to avoid slow smooth scroll during navigation.
    window.scrollTo({ top: 0, left: 0, behavior: "auto" })
  })
})
