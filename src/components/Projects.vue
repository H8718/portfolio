<template>
    <section id="projects" class="container-fluid">
        <h2>Projects</h2>
        <div class="center-content">
            <div
                v-for="(project, index) in projects"
                class="project-item"
                :key="index"
            >
                <div class="project-name">{{project.name}}</div>
                <div class="project-summary">{{project.summary}}</div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            projects: [
                {
                    name: "Test",
                    summary:
                        "Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum.",
                    projectFolder: "test"
                },
                {
                    name: "Test 2",
                    summary:
                        "Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum."
                },
                {
                    name: "Test 3",
                    summary:
                        "Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum."
                }
            ]
        };
    }
};
</script>

<style lang="scss">
#projects {
}
.project-item {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 40vh;
    height: 30vh;
    background: lightskyblue;
}
</style>
