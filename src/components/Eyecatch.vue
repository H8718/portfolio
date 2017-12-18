<template>
    <section id="eyecatch" class="container-fluid">
        <b-row id="rowContent">
            <b-col col md="2" offset="2">
                <i class="fa fa-codepen"></i>
                <p class="eyecatch-text">Full-Stack development. I understand
                    front-end as well as back-end development.</p>
            </b-col>
            <b-col col md="2">
                <i class="devicon-javascript-plain"></i>
                <p class="eyecatch-text">Everything JavaScript. Whether I'm developing
                    websites, web apps or mobile apps, I prefer to use JavaScript.
                </p>
            </b-col>
            <b-col col md="2">
                <i class="fa fa-cubes"></i>
                <p class="eyecatch-text">I'm familiar with Bootstrap, SASS and flexbox
                    layouts and use them to create intuitive and scaling layouts.</p>
            </b-col>
            <b-col col md="2">
                <i class="fa fa-group"></i>
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
$colorMain: #f9aa39;
$colorLight: #fff;
$colorDark: #222;

#eyecatch {
    width: 100%;
    background: $colorLight;
    padding-top: 15vh;
    padding-bottom: 15vh;
    #rowContent {
        .col {
            display: flex;
            flex-direction: column;
            i {
                font-size: 800%;
                color: $colorMain;
                align-self: center;
            }
            .eyecatch-text {
                color: $colorMain;
                margin-top: 2vh;
                align-self: center;
            }
        }
    }
}
</style>
