<script setup lang="ts">
import '~/assets/scss/section.scss'

interface Props {
    heading: string;
    class?: string;
}

const { heading } = defineProps<Props>()
</script>

<template>
    <section :class>
        <h2 :id="heading">{{ heading }}</h2>
        <slot />
    </section>
</template>

<style scoped lang="scss">
h2 {
    font-size: $font-large;
}
</style>