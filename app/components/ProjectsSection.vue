<script setup lang="ts">
import { ref } from 'vue'
import {
  FolderGit2,
  ExternalLink,
  ArrowUpRight,
  Sparkles,
  Layers,
  Code2,
  Terminal
} from '@lucide/vue'
import { GithubIcon } from '~/components/BrandIcons.vue'
import { PROJECTS, type Project } from '~/data/portfolio'
import ProjectModal from '~/components/ProjectModal.vue'

const selectedProject = ref<Project | null>(null)
const modalOpen = ref(false)

const openProjectDetail = (project: Project) => {
  selectedProject.value = project
  modalOpen.value = true
}

const closeModal = () => {
  modalOpen.value = false
}
</script>

<template>
  <section id="projects" class="py-16 px-4 sm:px-6 max-w-4xl mx-auto reveal-on-scroll">
    <!-- Section Header -->
    <div class="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
      <div>
        <div class="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 mb-1">
          <FolderGit2 class="w-3.5 h-3.5 text-sky-400" />
          <span>02 // KARYA & PROYEK</span>
        </div>
        <h2 class="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Featured Projects & Experiments
        </h2>
      </div>
      <p class="text-xs sm:text-sm text-zinc-400 max-w-xs sm:text-right">
        Beberapa proyek personal, tools, dan eksperimen yang pernah saya bangun.
      </p>
    </div>

    <!-- Projects List / Cards with Dynamic Spotlight -->
    <div class="space-y-4">
      <div
        v-for="project in PROJECTS"
        :key="project.id"
        class="glass-card spotlight-card rounded-3xl p-6 sm:p-7 group relative overflow-hidden transition-all duration-300 hover:border-white/20 hover:-translate-y-1 cursor-pointer"
        @click="openProjectDetail(project)"
      >
        <!-- Subtle Dynamic Glow Highlight -->
        <div
          class="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"
          :style="{ background: project.accentColor }"
        ></div>

        <div class="flex flex-col md:flex-row md:items-start justify-between gap-4 relative z-10">
          <div class="flex-1">
            <!-- Top Tagline & Year -->
            <div class="flex items-center gap-2.5 mb-2">
              <span class="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-white/5 border border-white/10 text-zinc-300">
                {{ project.category }}
              </span>
              <span class="text-xs font-mono text-zinc-500">{{ project.year }}</span>
            </div>

            <!-- Project Title -->
            <h3 class="text-lg sm:text-xl font-bold text-white group-hover:text-sky-300 transition-colors tracking-tight flex items-center gap-2">
              <span>{{ project.title }}</span>
              <ArrowUpRight class="w-4 h-4 text-zinc-500 group-hover:text-sky-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </h3>

            <!-- Tagline & Description -->
            <p class="mt-1.5 text-xs sm:text-sm text-zinc-300 font-medium">
              {{ project.tagline }}
            </p>

            <p class="mt-2 text-xs sm:text-sm text-zinc-400 leading-relaxed">
              {{ project.description }}
            </p>

            <!-- Personal Insight Note -->
            <div class="mt-3 p-3 rounded-2xl bg-zinc-900/60 border border-white/5 text-xs text-zinc-400 group-hover:border-white/10 transition-colors">
              <span class="text-zinc-300 font-medium font-mono">💡 Catatan: </span>
              {{ project.whyIBuiltIt }}
            </div>
          </div>
        </div>

        <!-- Tech Stack & Actions -->
        <div class="mt-5 pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-3 relative z-10">
          <div class="flex flex-wrap gap-1.5">
            <span
              v-for="tech in project.techStack"
              :key="tech"
              class="px-2.5 py-0.5 rounded-lg bg-zinc-900 text-[11px] font-mono text-zinc-400 border border-white/5 group-hover:border-white/10 transition-colors"
            >
              {{ tech }}
            </span>
          </div>

          <div class="flex items-center gap-2" @click.stop>
            <a
              v-if="project.githubUrl"
              :href="project.githubUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-white/10 text-zinc-400 hover:text-white transition-all btn-press text-xs flex items-center gap-1.5 hover:scale-105"
              title="Lihat Source di GitHub"
            >
              <GithubIcon class="w-3.5 h-3.5" />
              <span>Source</span>
            </a>

            <button
              @click="openProjectDetail(project)"
              class="px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-medium transition-all btn-press hover:scale-105"
            >
              Detail Proyek
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Project Modal Dialog -->
    <ProjectModal
      :is-open="modalOpen"
      :project="selectedProject"
      @close="closeModal"
    />
  </section>
</template>
