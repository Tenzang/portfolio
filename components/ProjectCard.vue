<script setup lang="ts">
import type { Project } from './Projects.vue';

interface Props {
    reverse?: boolean;
}

const { title, description, img, reverse } = defineProps<Project & Props>();
</script>

<template>
    <div :class="'container' + (reverse ? ' reverse' : '')">
        <div class="img-container">
            <NuxtImg :src="img" alt="placeholder" />
        </div>
        <div class="info">
            <h3>{{ title }}</h3>
            {{ description }}
        </div>
    </div>
</template>

<style scoped lang="scss">
div.container {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    justify-items: center;
    gap: 1rem;

    overflow: hidden;
    transition: all 0.25s;
    max-width: 70rem;
    margin: 0 auto;

    @media (min-width: $screen-small) {
        grid-template-columns: repeat(2, 1fr);

        &.reverse {
            .img-container {
                grid-column: 2 / 3;
            }

            .info {
                grid-column: 1 / 2;
                grid-row: 1;
            }
        }
    }

    .img-container {
        width: 100%;
        overflow: hidden;

        img {
            width: inherit;
            max-width: 50rem;
        }
    }

    .info {
        overflow: hidden;
        height: inherit;
        padding: 1rem;
    }
}
</style>