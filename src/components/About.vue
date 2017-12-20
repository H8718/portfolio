<template>
  <section class="container-fluid smoothScroll" id="about">
        <h2>Who am I?</h2>
        <div class="horizontal-center"><div class="underline"></div></div>
        <b-row>
            <div id="left">
                <img
                    id="portrait"
                    src="../assets/portrait.png"
                />
            </div>
            <div id="right">

            </div>
        </b-row>

        <!-- <div class="center-content">
            <div class="col-md-4 col-md-offset-2">
                <img
                    id="portrait"
                    class="img-circle"
                    src="../assets/croppedportrait.png"
                />
            </div>
            <div class="col-md-5">
                <div class="row">
                    <div class="transparent-white col-md-11">
                        <p></p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-5 col-md-offset-0 transparent-white infobox">

                    </div>
                    <div class="col-md-5 transparent-white infobox">

                    </div>
                    <div class="col-md-5 col-md-offset-0 transparent-white infobox">

                    </div>
                    <div class="col-md-5 col-md-offset-0 transparent-white infobox">

                    </div>
                </div>
            </div>
        </div> -->
    </section>
</template>

<style lang="scss">
@import "../styles/variables.scss";

#about {
    background: #3949ab;
    color: $colorLight;
    height: 80vh;
    padding-top: 10vh;
    .underline {
        border-color: $colorLighter;
    }
    .row {
        #left {
            width: 50vw;
            text-align: center;
            #portrait {
                width: 35vh;
                border-radius: 20vh;
            }
        }
        #right {
            width: 50vw;
        }
    }
}
</style>
