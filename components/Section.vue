<script setup lang="ts">
interface Props {
    heading: string;
    class?: string;
}

const { heading } = defineProps<Props>()
</script>

<template>
    <section :class>
        <h2 :id="heading">{{ heading }}</h2>
        <slot></slot>
    </section>
</template>

<style scoped lang="scss">
h2 {
    font-size: $font-large;
}

section {
    width: 100%;
    height: fit-content;
    position: relative;
    padding: 0 $section-padding-small 0;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;

    @media (min-width: $screen-medium) {
        padding: 0 $section-padding-medium 0;
    }
}

section.backdrop::before {
    background: $bg-secondary;
    width: 100vw;
    height: 100%;
    content: '';
    display: block;
    position: absolute;
    z-index: -1;
    top: 1.25rem;
    left: 0;
    box-shadow: 0 0 1rem -1rem black;
}
</style>