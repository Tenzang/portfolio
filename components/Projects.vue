<script setup lang="ts">
export interface Project {
    title: string;
    description: string;
    img: string;
}

const projects = ref<Project[]>([
    {
        title: "example project 1",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque sequi nobis praesentium saepe rerum nemo sunt dolore tempora a corrupti deserunt, animi alias minus iste tempore esse accusamus ad asperiores! Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        img: "https://placehold.co/400x400"
    },
    {
        title: "example project 2",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque sequi nobis praesentium saepe rerum nemo sunt dolore tempora a corrupti deserunt, animi alias minus iste tempore esse accusamus ad asperiores!",
        img: "https://placehold.co/400x400"
    },
    {
        title: "example project 3",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque sequi nobis praesentium saepe rerum nemo sunt dolore tempora a corrupti deserunt, animi alias minus iste tempore esse accusamus ad asperiores!",
        img: "https://placehold.co/400x400"
    }
])
</script>

<template>
    <Section heading="Projects">
        <ProjectCard v-for="({ title, description, img }, i) in projects" :title :description :img
            :reverse="i % 2 === 0" />
    </Section>
</template>