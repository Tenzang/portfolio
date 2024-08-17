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


    &.backdrop::before {
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

    &.border {
        &::before {
            width: 100vw;
            content: '';
            display: block;
            position: absolute;
            z-index: -1;
            top: 1.5rem;
            left: 0;
            border-top: 2px solid $highlight;
        }

        h2::before {
            content: '';
            width: 100%;
            height: 2px;
            background: $bg-primary;
            display: block;

            position: absolute;
            z-index: -1;
            top: 1.5rem;

            left: -10%;
            width: 120%;
        }
    }

    &.center {
        align-items: center;
    }
}
</style>