<script setup lang="ts">
import type { Project } from './Projects.vue';
const { title } = defineProps<Project>();
</script>

<template>
    <div class="container">
        <NuxtImg src="https://placehold.co/400x400" alt="placeholder" />
        <h3>{{ title }}</h3>
        <span>
            {{ description }}
        </span>
    </div>
</template>

<style scoped lang="scss">
div.container {
    display: grid;
    grid-template-rows: auto 1fr;
    grid-template-columns: 1fr 1fr;
    column-gap: 2rem;
    background: $bg-secondary;

    img {
        grid-row-start: 1;
        grid-row-end: 3;
        justify-self: end;
    }

    h3,
    span {
        grid-column: 2;
    }
}
</style>