<script setup lang="ts">
import type { Experience } from "./Experience.vue"
const { role, employer, description } = defineProps<Omit<Experience, "year">>()
</script>

<template>
    <h3 class="glow-on-parent-hover">{{ role }}</h3>
    <h4 class="glow-on-parent-hover">{{ employer }}</h4>
    {{ description }}
</template>

<style scoped lang="scss">
h4 {
    margin-bottom: 0.25rem;
}

@media (min-width: $screen-large) {
    *:hover>.glow-on-parent-hover {
        color: $highlight;
    }
}
</style>