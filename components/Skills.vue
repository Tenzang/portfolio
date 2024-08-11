<script setup lang="ts">
interface Skill {
    icon: string;
    label: string;
}

const skills = [
    {
        icon: "react",
        label: "React"
    },
    {
        icon: "javascript",
        label: "Javascript"
    },
    {
        icon: "python",
        label: "Python"
    },
    {
        icon: "html",
        label: "HTML"
    },
    {
        icon: "css",
        label: "CSS"
    },
];

const skills1 = ref<Skill[]>([...skills, ...skills]);
const skills2 = ref<Skill[]>(skills);
</script>

<template>
    <Section heading="Skills">
        <Spinner :outerItems="skills1" :innerItems="skills2" />
        <Placeholder />
    </Section>
</template>