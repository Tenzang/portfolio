<script setup lang="ts">
export interface Experience {
    role: string;
    employer: string;
    description: string;
    year: number;
}

const experiences = ref<Experience[]>([
    {
        role: "Software Engineer",
        employer: "33BONDI",
        description: "As a Software Engineer at 33BONDI I've worked with a variety of clients, building responsive web applications tailored to their needs. This role has given me hands-on experience across the entire development lifecycle and deepened my expertise in cloud computing, particularly with Google Cloud Platform, enabling me to design scalable and secure solutions.",
        year: 2024
    },
    {
        role: "Instructional Associate",
        employer: "General Assembly",
        description: "As an Instructional Associate at a coding bootcamp, I've supported students by assisting with problem-solving, debugging, and code reviews while ensuring adherence to coding conventions. I shared & maintained GitBooks with lesson notes, led live coding sessions to demonstrate solutions of varying complexity, and provided guidance & support with development workflows.",
        year: 2022
    },

])
</script>

<template>
    <Section heading="Experience" variant="backdrop">
        <ul>
            <li v-for="{ role, employer, description, year } in experiences">
                <span>{{ year }}</span>
                <ExperienceCard :role :employer :description />
            </li>
        </ul>
    </Section>
</template>

<style scoped lang="scss">
section {
    ul {
        padding-left: 4rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;

        li {
            position: relative;
            list-style: none;
            padding-left: 4rem;

            span {
                position: absolute;
                left: -4rem;
                background: $bg-highlight;
                padding: 0.25rem 0.75rem;
                width: 3.6rem;
            }

            span:after {
                content: "";
                position: absolute;
                top: 0;
                left: 3.6rem;
                border-left: 15px solid $bg-highlight;
                border-top: 16px solid transparent;
                border-bottom: 16px solid transparent;
            }
        }

        li::before {
            content: '';
            height: 1.25rem;
            width: 1.25rem;
            border-radius: 100%;
            position: absolute;
            font-size: 5rem;
            top: 0.25rem;
            left: 1rem;
            background: $highlight;
            box-shadow: 0 0 1rem 0rem $highlight;
            z-index: 1;
            transition: all 0.25s;

        }

        @media (min-width: $screen-large) {
            li::before {
                background: white;
                box-shadow: none;
            }

            li:hover::before {
                background: $highlight;
                box-shadow: 0 0 1rem 0rem $highlight;
            }
        }


        li::after {
            content: '';
            position: absolute;

            top: 2.25rem;
            left: 1.6rem;
            width: 2px;
            height: calc(100% - 2.5rem);
            background: white;
        }
    }
}
</style>