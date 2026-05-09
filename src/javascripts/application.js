import * as Turbo from "@hotwired/turbo"
import { Application } from "@hotwired/stimulus"
import Alpine from "alpinejs"
import collapse from "@alpinejs/collapse"

window.Turbo = Turbo

const stimulus = Application.start()
window.Stimulus = stimulus

window.Alpine = Alpine
Alpine.plugin(collapse)

Alpine.store("jobs", {
  mobileFiltersOpen: false,
  toggleMobileFilters() {
    this.mobileFiltersOpen = !this.mobileFiltersOpen
  },
})

Alpine.start()

