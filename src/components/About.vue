<template>
  <section class="container-fluid smoothScroll" id="about">
      <h2 class="row col-md-11">About Me</h2>
        <div class="center-content">
            <div class="col-md-4 col-md-offset-2">
                <!-- <img id="portrait" className="img-circle" src="../assets/portrait.jpg"/> -->
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
        </div>
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

#about {
    background: $colorDark;
    color: $colorLight;
}
</style>
