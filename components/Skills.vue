<script setup lang="ts">
import { getIconUrl } from '~/util';

interface Skill {
    icon: string;
    label: string;
}

const skills = ref<Skill[]>([
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
])
</script>

<template>
    <Section heading="Skills">
        <div class="viewer">
            <ul>
                <li v-for="{ icon, label } in skills">
                    <div>
                        <img :src="getIconUrl(icon)" v-bind:alt="label" />
                    </div>
                </li>
            </ul>
            <ul>
                <li v-for="{ icon, label } in skills">
                    <div>
                        <img :src="getIconUrl(icon)" v-bind:alt="label" />
                    </div>
                </li>
            </ul>
        </div>
    </Section>
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
    height: 20rem;

    position: relative;
    width: 100vw;
    left: -6rem;
}

ul:nth-child(1) {
    animation-duration: 30s;
    animation-name: infiniterotate;
    animation-iteration-count: infinite;
    animation-timing-function: linear;

    left: -25vw;

    img {
        animation-duration: 30s;
        animation-name: infiniterotate;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
        animation-direction: reverse;
    }
}

ul:nth-child(2) {
    animation-duration: 30s;
    animation-name: infiniterotate;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-direction: reverse;

    right: -25vw;

    img {
        animation-duration: 30s;
        animation-name: infiniterotate;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
    }
}

ul {
    padding: 0;
    display: flex;
    gap: 2rem;
    position: absolute;
    height: 100vw;
    width: 100vw;

    overflow: hidden;

    border-radius: 100%;

    li {
        list-style: none;
        width: 95%;
        position: absolute;
        top: 50%;
        // transform: translate(1rem, -50%);

        div {
            position: relative;
            width: fit-content;

        }
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

img {
    height: 6rem;
}
</style>