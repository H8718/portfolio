<template>
    <section 
        id="contact" 
        class="container-fluid"
    >
        <h2>Send me a message</h2>
        <div class="horizontal-center"><div class="underline"></div></div>
        <div class="center-content">
            <p class="description">Send me a message using this form. I'll probably answer back.</p>
        </div>
        <b-form
            id="contact-form"
            method="POST"
            @submit.prevent="submitForm()"
        >
            <b-input
                type="text"
                class="col-lg-3 col-md-5 form-field"
                placeholder="Name"
                required
                v-model="name"
                name="name"
                @input="checkForm()"
            />
            <b-input
                type="text"
                class="col-lg-3 col-md-5 form-field"
                placeholder="Email"
                required
                v-model="email"
                name="email"
                @input="checkForm()"
            />
            <b-textarea
                rows="5"
                class="col-lg-3 col-md-5 form-field"
                placeholder="Message"
                required
                v-model="message"
                name="message"
                @input="checkForm()"
            />
            <b-button
                type="submit"
                class="col-lg-2 col-md-4 form-field"
                id="submit-btn"
                :class="{ 'btn-ready': btnReady }"
            >Send</b-button>
        </b-form>
    </section>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            name: null,
            email: null,
            message: null,
            btnReady: false,
            ready: false
        };
    },
    created() {
        setTimeout(() => {
            this.ready = true;
        },1000);
    },
    methods: {
        checkForm() {
            if (this.email && this.name && this.message) {
                this.btnReady = true;
            } else this.btnReady = false;
        },
        submitForm() {
            axios.post('https://formspree.io/moilamar@protonmail.com', {
                name: this.name,
                email: this.email,
                message: this.message
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }
};
</script>

<style lang="scss">
@import "../styles/variables.scss";

// LAITA VINOON

#contact {
    background: $colorMain;
    /* width: 0%;
    transition: width 1.5s; */
    padding-top: 0;
    margin-top: 0;
    h2 {
        color: $colorLighter;
    }
    .underline {
        border-color: $colorLighter;
    }
    .center-content {
        .description {
            color: $colorLight;
            margin-top: 4vh;
        }
    }
    #contact-form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 2vw;
        .form-field {
            margin-bottom: 2.2vh;
        }
        textarea {
            overflow: hidden;
        }
        #submit-btn {
            border: 2px solid $colorLighter;
            color: $colorLight;
            box-shadow: none;
            background: none;
            transition: border-color 1s, color 1s;
        }
        .btn-ready {
            border-color: $colorSecondary !important;
            color: $colorSecondary !important;
        }
    }
}
#contact:before {
    background: inherit;
        content: '';
        display: inline-block;
        height: 10vh;
        width: 104.9vw;
        position: relative;
        transform: skewY(1.5deg);
        transform-origin: 100%;
        margin-left: -10vw;
}
/* .animate-bg {
    width: 100% !important;
    
} */
</style>
