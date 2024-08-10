<script setup lang="ts">
import type { Experience } from "./Experience.vue"
const { role, employer, description } = defineProps<Omit<Experience, "year">>()
</script>
<template>
    <h3>{{ role }}</h3>
    <h4>{{ employer }}</h4>
    {{ description }}
</template>

<style scoped>
h4 {
    margin-bottom: 0.25rem;
}
</style>