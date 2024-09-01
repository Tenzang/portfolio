<script setup lang="ts">
const { data: { value: globalSkillsRes } } = await useFetch('/api/skills/global')
const { data: { value: skills } } = await useFetch('/api/skills');

const skills1 = ref([...(skills || []), ...(skills || [])]);
const skills2 = ref(skills || []);

const skillList = ref(globalSkillsRes?.map((skill, i) => ({
    id: i,
    label: skill,
    isChecked: false,
    matchesFilter: () => {
        const { value: filterString } = inputValue;

        const filterChars = filterString.toLowerCase().split('');

        let slidingIndex = 0;
        for (const filterChar of filterChars) {
            if (new Set([' ', '-']).has(filterChar)) continue;
            let charFound = false;

            for (const [i, char] of [...skill.toLowerCase().substring(slidingIndex)].entries()) {
                if (filterChar !== ' ' && char !== filterChar) continue;

                charFound = true;
                slidingIndex = i
                break;
            }

            if (!charFound) return false;
        }

        return true;
    }
})));

const inputValue = ref('');

const mySkillSet = new Set(skills?.map(s => s.label.toLowerCase()))
const filteredSkills = computed(() => skillList.value?.filter(item => item.matchesFilter()));
const selectedSkills = computed(() => skillList.value?.filter(item => item.isChecked));
const matchingSkills = computed(() => selectedSkills.value?.filter(({ label }) => mySkillSet.has(label.toLowerCase())));
</script>

<template>
    <Section heading="Skills">
        <Spinner :outerItems="skills1" :innerItems="skills2" />
        <div class="head">
            <span class="emphasize">Select your TECH</span>
            <input v-model="inputValue" placeholder="What are you after?">
        </div>
        <div class="scroller">
            <div class="button-container">
                <ul>
                    <li v-for="skill in filteredSkills" :key="skill.label"
                        :data-is-known="mySkillSet.has(skill.label.toLowerCase())">
                        <button @click="skill.isChecked = !skill.isChecked"
                            :class="skill.isChecked ? ['selected'] : []">
                            {{ skill.label }}
                        </button>
                    </li>
                </ul>
            </div>
            <div class="floater">
                <Meter :max="selectedSkills?.length || 0" :value="matchingSkills?.length || 0" />
            </div>
        </div>

    </Section>
</template>

<style scoped lang="scss">
.head {
    display: flex;
    justify-content: center;
    width: 100%;
    align-items: center;
    gap: 1rem;

    @media (min-width: $screen-small) {
        gap: 2rem;
    }

    input {
        border: 1px solid $highlight;
        border-radius: 0.25rem;
        background: $bg-secondary;
        color: white;
        padding: 0 0.5rem;
        height: 2rem;
        transition: 0.25s box-shadow;

        @media (min-width: $screen-small) {
            width: 10.5rem;
        }

        &:focus {
            box-shadow: 0 0 2rem -0.5rem $highlight;
        }
    }
}

.emphasize {
    text-align: center;
    font-size: $font-medium;
}

.scroller {
    $height: 30vh;
    height: $height;
    overflow-y: scroll;
    padding: 0 2rem;
    position: relative;
    border-top: 1px solid $highlight;
    border-bottom: 1px solid $highlight;

    .button-container {
        min-height: 100%;
        height: fit-content;
    }

    .floater {
        position: sticky;
        bottom: 0;
        height: 4rem;
        align-content: center;

        &::before {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: inherit;
            backdrop-filter: blur(6px);
            -webkit-mask-image: linear-gradient(to top, black 0, transparent 100%, black 0);
            mask-image: linear-gradient(to top, black 0, transparent 100%, black 0);
            z-index: -1;
        }
    }
}


ul {
    display: flex;
    gap: 0.5rem;
    padding: 1rem 0;
    flex-wrap: wrap;
    list-style: none;
    align-items: center;
    justify-content: center;

    li[data-is-known="true"]>button.selected {
        border: 1px solid $highlight;
        box-shadow: 0 0 2rem -0.5rem $highlight;
    }

    button {
        width: 100%;
        min-width: 5rem;
        background: $bg-secondary;
        border: 1px solid transparent;
        box-sizing: border-box;

        $padding: 1rem;
        padding: calc($padding / 10) $padding;

        color: $font-primary;

        border-radius: 1rem;

        transition: all 1s;

        &:hover {
            background: $bg-secondary;
            color: $highlight;
        }

        &.selected {
            border: 1px solid gray;
            color: $highlight;
        }

    }
}
</style>