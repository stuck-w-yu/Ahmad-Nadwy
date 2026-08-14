<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import Navbar from '~/components/Navbar.vue'
import HeroSection from '~/components/HeroSection.vue'
import BentoAbout from '~/components/BentoAbout.vue'
import ProjectsSection from '~/components/ProjectsSection.vue'
import ExperienceSection from '~/components/ExperienceSection.vue'
import ContactSection from '~/components/ContactSection.vue'
import Footer from '~/components/Footer.vue'
import CommandPalette from '~/components/CommandPalette.vue'
import ProjectModal from '~/components/ProjectModal.vue'
import { useScrollObserver, useCardSpotlight } from '~/composables/useAnimations'
import type { Project } from '~/data/portfolio'

const isSpotlightOpen = ref(false)
const selectedProject = ref<Project | null>(null)
const isProjectModalOpen = ref(false)

const openSpotlight = () => {
  isSpotlightOpen.value = true
}

const closeSpotlight = () => {
  isSpotlightOpen.value = false
}

const handleSelectProjectFromSpotlight = (project: Project) => {
  selectedProject.value = project
  isProjectModalOpen.value = true
}

const closeProjectModal = () => {
  isProjectModalOpen.value = false
}

// Global shortcut for Cmd/Ctrl+K
const handleGlobalKeydown = (e: KeyboardEvent) => {
  if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
    e.preventDefault()
    isSpotlightOpen.value = !isSpotlightOpen.value
  }
}

// Initialize scroll observer and interactive mouse card spotlight
useScrollObserver()
useCardSpotlight()

onMounted(() => {
  window.addEventListener('keydown', handleGlobalKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleGlobalKeydown)
})
</script>

<template>
  <div class="min-h-screen bg-space-950 text-zinc-100 selection:bg-indigo-500/30 selection:text-white relative bg-ambient-grid antialiased">
    <!-- Ambient Animated Static Gradient Backdrops -->
    <div class="fixed inset-0 pointer-events-none -z-20 overflow-hidden">
      <div class="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[1000px] h-[700px] bg-gradient-to-b from-indigo-950/40 via-sky-950/20 to-transparent rounded-full blur-[140px] animate-float-slow"></div>
      <div class="absolute top-[45%] -left-[15%] w-[600px] h-[600px] bg-purple-950/30 rounded-full blur-[130px] animate-float-reverse"></div>
      <div class="absolute top-[70%] -right-[15%] w-[700px] h-[700px] bg-cyan-950/20 rounded-full blur-[140px] animate-float-slow"></div>
    </div>

    <!-- Navigation Bar -->
    <Navbar @open-spotlight="openSpotlight" />

    <!-- Main Content Container -->
    <main class="relative z-10">
      <HeroSection />
      <BentoAbout />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </main>

    <!-- Global Footer -->
    <Footer />

    <!-- Global Command Palette (Apple Spotlight) -->
    <CommandPalette
      :is-open="isSpotlightOpen"
      @close="closeSpotlight"
      @select-project="handleSelectProjectFromSpotlight"
    />

    <!-- Global Project Modal -->
    <ProjectModal
      :is-open="isProjectModalOpen"
      :project="selectedProject"
      @close="closeProjectModal"
    />
  </div>
</template>
