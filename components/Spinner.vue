<script setup lang="ts">
import { getIconUrl } from '~/util';

interface SpinnerItem {
    icon: string;
    label: string;
}

interface Props {
    outerItems: SpinnerItem[];
    innerItems: SpinnerItem[];
    variant?: "full" | "half";
}

const props = defineProps<Props>();

const { outerItems, innerItems } = props;
</script>

<template>
    <div :class="'viewer ' + (props.variant || 'half')">
        <ul>
            <li v-for=" { icon, label } in outerItems">
                <div>
                    <NuxtImg :src="getIconUrl(icon)" v-bind:alt="label" />
                </div>
            </li>
        </ul>
        <ul>
            <li v-for="{ icon, label } in innerItems">
                <div>
                    <NuxtImg :src="getIconUrl(icon)" v-bind:alt="label" />
                </div>
            </li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
@keyframes infiniterotate {
    from {
        transform: rotate(0turn);
    }

    to {
        transform: rotate(1turn);
    }
}

.viewer {
    overflow: hidden;
    height: 40vw;

    position: relative;
    width: 100vw;
    margin-left: -$section-padding-small;

    @media (min-width: $screen-medium) {
        margin-left: -$section-padding-medium;
    }

    & {
        box-shadow: 0 4rem 3rem -5rem $highlight;
    }
}

.viewer.full {
    height: 100vw;
}

.viewer.half {
    border-bottom: 2px solid $highlight;
}

$icon-total: 21;
$icon-inner-count: 7;
$icon-outer-count: $icon-total - $icon-inner-count;

ul:nth-child(1) {
    animation-duration: 30s;
    animation-name: infiniterotate;
    animation-iteration-count: infinite;
    animation-timing-function: linear;

    img {
        animation-duration: 30s;
        animation-name: infiniterotate;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
        animation-direction: reverse;
    }

    @for $i from 1 through $icon-outer-count {
        $angle: calc(1turn / $icon-outer-count) * ($i - 1);

        li:nth-child(#{$i}) {
            transform: translate(1rem, -50%) rotate(#{$angle});

            div {
                transform: rotate(calc(-#{$angle}));
            }
        }
    }
}

ul:nth-child(2) {
    animation-duration: 30s;
    animation-name: infiniterotate;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-direction: reverse;

    height: 65vw;
    width: 65vw;

    top: 18vw;
    left: 18vw;

    img {
        animation-duration: 30s;
        animation-name: infiniterotate;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
    }

    @for $i from 1 through $icon-inner-count {
        $angle: calc(1turn / $icon-inner-count) * ($i - 1);

        li:nth-child(#{$i}) {
            transform: translate(1rem, -50%) rotate(#{$angle});

            div {
                transform: rotate(calc(-#{$angle}));
            }
        }
    }
}

ul {
    padding: 0;
    display: flex;
    gap: 2rem;
    position: absolute;
    height: 100vw;
    width: 100vw;

    @media (min-width: $screen-medium) {
        left: 0;
    }

    li {
        list-style: none;
        width: 95%;
        position: absolute;
        top: 50%;

        div {
            position: relative;
            width: fit-content;

        }
    }
}

img {
    width: 10vw;
    min-width: 3rem;
}
</style>