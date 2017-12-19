<template>
  <section class="container-fluid smoothScroll" id="about">
      <h2>About Me</h2>
        <img
            id="portrait"
            src="../assets/croppedportrait.png"
        />

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

<script>
export default {
    data() {
        return {};
    }
};
</script>

<style lang="scss">
$colorMain: #f57c00;
$colorLight: #fff;
$colorDark: #212121;

#about {
    background: #ffb74d;
    color: $colorLight;
    height: 70vh;
    #portrait {
        width: 10vw;
        border-radius: 5vw;
    }
}
</style>
