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
                    <img :src="getIconUrl(icon)" v-bind:alt="label" />
                </div>
            </li>
        </ul>
        <ul>
            <li v-for="{ icon, label } in innerItems">
                <div>
                    <img :src="getIconUrl(icon)" v-bind:alt="label" />
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

    box-shadow: 0 4rem 3rem -5rem $highlight;
}

.viewer.full {
    height: 100vw;
}

.viewer.half {
    border-bottom: 2px solid $highlight;
}

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

    $icon-count: 10;

    li:nth-child(1) {
        transform: translate(1rem, -50%) rotate(1turn / $icon-count * 0);

        div {
            transform: rotate(1turn / $icon-count * (-1 * 0));
        }
    }

    li:nth-child(2) {
        transform: translate(1rem, -50%) rotate(1turn / $icon-count * 1);

        div {
            transform: rotate(1turn / $icon-count * (-1 * 1));
        }
    }

    li:nth-child(3) {
        transform: translate(1rem, -50%) rotate(1turn / $icon-count * 2);

        div {
            transform: rotate(1turn / $icon-count * (-1 * 2));
        }
    }

    li:nth-child(4) {
        transform: translate(1rem, -50%) rotate(1turn / $icon-count * 3);

        div {
            transform: rotate(1turn / $icon-count * (-1 * 3));
        }
    }

    li:nth-child(5) {
        transform: translate(1rem, -50%) rotate(1turn / $icon-count * 4);

        div {
            transform: rotate(1turn / $icon-count * (-1 * 4));
        }
    }

    li:nth-child(6) {
        transform: translate(1rem, -50%) rotate(1turn / $icon-count * 5);

        div {
            transform: rotate(1turn / $icon-count * (-1 * 5));
        }
    }

    li:nth-child(7) {
        transform: translate(1rem, -50%) rotate(1turn / $icon-count * 6);

        div {
            transform: rotate(1turn / $icon-count * (-1 * 6));
        }
    }

    li:nth-child(8) {
        transform: translate(1rem, -50%) rotate(1turn / $icon-count * 7);

        div {
            transform: rotate(1turn / $icon-count * (-1 * 7));
        }
    }

    li:nth-child(9) {
        transform: translate(1rem, -50%) rotate(1turn / $icon-count * 8);

        div {
            transform: rotate(1turn / $icon-count * (-1 * 8));
        }
    }

    li:nth-child(10) {
        transform: translate(1rem, -50%) rotate(1turn / $icon-count * 9);

        div {
            transform: rotate(1turn / $icon-count * (-1 * 9));
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

    $icon-count: 5;

    li:nth-child(1) {
        transform: translate(1rem, -50%) rotate(1turn / $icon-count * 0);

        div {
            transform: rotate(1turn / $icon-count * (-1 * 0));
        }
    }

    li:nth-child(2) {
        transform: translate(1rem, -50%) rotate(1turn / $icon-count * 1);

        div {
            transform: rotate(1turn / $icon-count * (-1 * 1));
        }
    }

    li:nth-child(3) {
        transform: translate(1rem, -50%) rotate(1turn / $icon-count * 2);

        div {
            transform: rotate(1turn / $icon-count * (-1 * 2));
        }
    }

    li:nth-child(4) {
        transform: translate(1rem, -50%) rotate(1turn / $icon-count * 3);

        div {
            transform: rotate(1turn / $icon-count * (-1 * 3));
        }
    }

    li:nth-child(5) {
        transform: translate(1rem, -50%) rotate(1turn / $icon-count * 4);

        div {
            transform: rotate(1turn / $icon-count * (-1 * 4));
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