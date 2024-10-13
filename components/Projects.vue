<script setup lang="ts">
export interface Project {
    title: string;
    description: string;
    img: string;
}

const projects = ref<Project[]>([
    {
        title: "Retro Arcade",
        description: 'Retro Arcade is a web game application created by Loden Gendun and Kristabel Wong for our fourth and final project at General Assembly. We chose a fun final project that could show off our skills with React.',
        img: "retro-arcade.png"
    },
    {
        title: "Auto Novel",
        description: 'A CRUD app with a twist! This project was my first foray into backend web development using Ruby on Rails. Developing Auto-Novel was a fun exercise in backend data-handling, as the "create novel" functionality is based on a crude random novel construction algorithm I designed.',
        img: "auto-novel.png"
    },
    {
        title: "Tic Tac Toe",
        description: "The classic game of Tic-Tac-Toe built just using good old HTML, CSS & Javascript. This is where things started for me.",
        img: "tic-tac-toe.png"
    }
])
</script>

<template>
    <Section heading="Projects">
        <ProjectCard v-for="({ title, description, img }, i) in projects" :title :description :img
            :reverse="i % 2 === 0" />
    </Section>
</template>