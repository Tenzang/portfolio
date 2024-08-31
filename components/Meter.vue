<script setup lang="ts">
interface Props {
    max: number;
    value: number;
}

const props = defineProps<Props>()
const percent = computed(() => {
    const { value, max } = props;
    return Math.floor(value / max * 100);
});
// console.log(roundedPercent.value);
</script>

<template>
    <div class="container">
        <span class="ratio">{{ props.value }}/{{ props.max }}</span>
        <div :class="'bar percent-' + percent"></div>
    </div>
</template>

<style scoped lang="scss">
.container {
    display: flex;
    align-items: center;
    gap: 1rem;

    .ratio {
        word-break: keep-all;
        min-width: 2rem;
    }

    .bar {
        height: 0.4rem;
        border-radius: 10rem;
        background: $highlight;
        box-shadow: 0 0 2rem 0.2rem $highlight;
        transition: 0.5s all;
        width: 100%;

        @for $i from 0 through 100 {
            &.percent-#{$i} {
                width: calc($i * 1%);

                box-shadow: 0 0 2rem calc($i / 100 * 0.2rem) $highlight;
            }
        }
    }
}
</style>