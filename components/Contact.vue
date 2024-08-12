<script setup lang="ts">
import { getIconUrl } from '~/util';

interface Social {
    icon: string;
    href: string;
}

const socials = ref<Social[]>(
    [
        {
            icon: "linkedin",
            href: "https://linkedin.com/in/loden-gendun"
        },
        {
            icon: "github",
            href: "https://github.com/Tenzang"
        },
    ]
)
</script>

<template>
    <Section heading="Contact Me" variant="border center">
        <ul>
            <li v-for="{ icon, href } in socials">
                <a :href="href" target="_blank">
                    <NuxtImg :src="getIconUrl(icon)" :alt="`${icon} icon`" class="fill-highlight" />
                </a>
            </li>

        </ul>
    </Section>
</template>

<style scoped lang="scss">
ul {
    display: flex;
    justify-content: center;
    gap: 4rem;
    padding: 0;

    li {
        list-style: none;
    }

    img {
        width: 4rem;
        transition: filter 0.1s;

        &:hover {
            filter: brightness(0) saturate(100%) invert(100%) sepia(51%) saturate(2831%) hue-rotate(311deg) brightness(98%) contrast(92%) drop-shadow(0 0 1rem $highlight);
        }
    }

    a:focus img {
        filter: brightness(0) saturate(100%) invert(100%) sepia(51%) saturate(2831%) hue-rotate(311deg) brightness(98%) contrast(92%) drop-shadow(0 0 1rem $highlight);
    }
}
</style>