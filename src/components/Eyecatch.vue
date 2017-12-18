<template>
    <section id="eyecatch" class="container-fluid">
        <b-row id="rowContent">
            <b-col col md="2" offset="2">
                <i class="fa fa-car"></i><br>
                <p class="eyecatch-text">asd</p>
            </b-col>
            <b-col col md="2">
                <i class="fa fa-car"></i>
                <p class="eyecatch-text">asd</p>
            </b-col>
            <b-col col md="2">
                <i class="fa fa-car"></i>
                <p class="eyecatch-text">asd</p>
            </b-col>
            <b-col col md="2">
                <i class="fa fa-car"></i>
                <p class="eyecatch-text">asd</p>
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
    background: #fafafa;
    #rowContent {
        margin-top: 15vh;
        margin-bottom: 15vh;
        .col {
            display: flex;
            flex-direction: column;
            .eyecatch-text {
            }
        }
    }
}
.fa {
    font-size: 800%;
    color: $colorMain;
}
</style>
