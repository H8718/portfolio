<template>
    <section id="eyecatch" class="container-fluid">
        <b-row id="rowContent">
            <b-col>
                <i class="fa fa-codepen"></i>
                <p class="eyecatch-header">Full-Stack Development</p>
                <p class="eyecatch-text">I understand front-end as well as back-end
                    programming.</p>
            </b-col>
            <b-col>
                <i class="devicon-javascript-plain"></i>
                <p class="eyecatch-header">Everything JavaScript</p>
                <p class="eyecatch-text">Whether I'm developing websites, web apps
                    or mobile apps, my language of choice is JavaScript. Usually VueJS.
                </p>
            </b-col>
            <b-col>
                <i class="fa fa-cubes"></i>
                <p class="eyecatch-header">Smart Layouts</p>
                <p class="eyecatch-text">I'm familiar with Bootstrap, SASS and flexbox
                    which I use to create intuitive and scaling layouts for both mobile
                    and web.</p>
            </b-col>
            <b-col>
                <i class="fa fa-group"></i>
                <p class="eyecatch-header">Teamwork</p>
                <p class="eyecatch-text">I speak fluent English and have experience in
                    working in multinational teams.</p>
            </b-col>
        </b-row>
    </section>
</template>

<script>
export default {
    data() {
        return {};
    }
};
</script>

<style lang="scss">
@import "../styles/variables.scss";

#eyecatch {
    width: 100%;
    background: #fafafa;
    #rowContent {
        padding: 1vw 10vw 1vw 10vw;
        // CHeck mobile
        .col {
            display: flex;
            flex-direction: column;
            i {
                font-size: 800%;
                color: $colorMain;
                align-self: center;
            }
            .eyecatch-header {
                margin-top: 3vh;
                text-align: center;
                color: #444;
                font-size: 105%;
                font-weight: bold;
            }
            .eyecatch-text {
                color: $colorMain;
            }
        }
    }
}
</style>
