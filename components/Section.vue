<script setup lang="ts">
import type { Permutations } from '~/util/types'

type Variant = Permutations<"backdrop" | "border" | "center">;

interface Props {
    heading: string;
    variant?: Variant;
}

const { heading } = defineProps<Props>()
</script>

<template>
    <section :class="variant">
        <h2 :id="heading">{{ heading }}</h2>
        <slot></slot>
    </section>
</template>

<style scoped lang="scss">
h2 {
    font-size: $font-large;
    width: fit-content;
    position: relative;
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

section.center {
    align-items: center;
}

section.border h2::before,
section.border h2::after {
    content: '';
    width: 100%;
    height: 2px;
    background: $highlight;
    display: block;

    position: absolute;
    top: 1.5rem;
}

section.border h2::before {
    transform: translate(calc(-100% - 1rem));
}


section.border h2::after {
    right: calc(-100% - 1rem);
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