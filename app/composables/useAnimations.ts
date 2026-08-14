import { onMounted, onUnmounted } from 'vue'

export function useScrollObserver() {
  onMounted(() => {
    const observerCallback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          // Once animated, we can keep it visible
          observer.unobserve(entry.target)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    })

    const elements = document.querySelectorAll('.reveal-on-scroll')
    elements.forEach(el => observer.observe(el))
  })
}

export function useCardSpotlight() {
  const onMouseMove = (e: MouseEvent) => {
    const cards = document.querySelectorAll<HTMLElement>('.spotlight-card')
    cards.forEach(card => {
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      card.style.setProperty('--mouse-x', `${x}px`)
      card.style.setProperty('--mouse-y', `${y}px`)
    })
  }

  onMounted(() => {
    window.addEventListener('mousemove', onMouseMove, { passive: true })
  })

  onUnmounted(() => {
    window.removeEventListener('mousemove', onMouseMove)
  })
}
