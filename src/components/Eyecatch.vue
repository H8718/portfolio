<template>
    <section id="eyecatch" class="container-fluid">
        <b-row id="rowContent">
            <b-col>
                <i class="fa fa-codepen"></i>
                <p class="eyecatch-text">Full-Stack development. I understand
                    front-end as well as back-end development.</p>
            </b-col>
            <b-col>
                <i class="devicon-javascript-plain"></i>
                <p class="eyecatch-text">Everything JavaScript. Whether I'm developing
                    websites, web apps or mobile apps, I prefer to use JavaScript.
                </p>
            </b-col>
            <b-col>
                <i class="fa fa-cubes"></i>
                <p class="eyecatch-text">I'm familiar with Bootstrap, SASS and flexbox,
                    which I use to create intuitive and scaling layouts for both mobile
                    and web.</p>
            </b-col>
            <b-col>
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
$colorMain: #01579b;
$colorLight: #fff;
$colorDark: #212121;

#eyecatch {
    width: 100%;
    background: #fafafa;
    padding-top: 15vh;
    padding-bottom: 15vh;
    #rowContent {
        padding: 0 10vw 0 10vw;
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
