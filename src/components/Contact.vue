<template>
    <section id="contact">
        <h2>Contact me</h2>
        <div class="underline"></div>
        <div class="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
            <p class="description">Send me a message using the form. I'll try and get back to you.</p>
        </div>
        <div
            class="alert-message col-md-10 offset-1"
            v-if="alert"
        >
            <p>{{ alert }}</p>
        </div>
        <b-form
            id="contact-form"
            method="POST"
            @submit.prevent="submitForm()"
            :class="{ 'hide': success }"
            class="col-lg-4 col-md-6 col-sm-12 offset-lg-4 offset-md-3 offset-sm-0"
        >
            <b-input
                type="text"
                class="form-field"
                placeholder="Name"
                required
                v-model="name"
                name="name"
                @input="checkForm()"
            />
            <b-input
                type="text"
                class="form-field"
                :class="{ 'highlight': success === false }"
                placeholder="Email"
                required
                v-model="email"
                name="email"
                @input="checkForm()"
            />
            <b-textarea
                rows="5"
                class="form-field"
                placeholder="Message"
                required
                v-model="message"
                name="message"
                @input="checkForm()"
            />
            <b-button
                type="submit"
                class="form-field"
                id="submit-btn"
                :class="{ 'btn-ready': btnReady }"
            >Send</b-button>
        </b-form>

    </section>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            name: null,
            email: null,
            message: null,
            btnReady: false,
            success: null,
            alert: null
        };
    },
    methods: {
        checkForm() {
            if (this.email && this.name && this.message) {
                this.btnReady = true;
            } else this.btnReady = false;
        },
        submitForm() {
            axios
                .post("https://formspree.io/moilamar@protonmail.com", {
                    name: this.name,
                    email: this.email,
                    message: this.message
                })
                .then(
                    function() {
                        this.success = true;
                        this.showMessage("Thank you. I will be in touch!");
                    }.bind(this)
                )
                .catch(
                    function() {
                        this.success = false;
                        this.showMessage(`Something went wrong.
                Please make sure the email is correct, or
                contact me directly at Moilamar@protonmail.com.`);
                    }.bind(this)
                );
        },
        showMessage(msg) {
            this.alert = msg;
        }
    }
};
</script>

<style lang="scss">
@import "../styles/variables.scss";
@import "../styles/mixins.scss";

#contact {
    background: $colorPrimary;
    padding-top: 4em;
    padding-bottom: 3em; //30px;
    h2 {
        color: $colorLighter;
    }
    .underline {
        border-color: $colorLighter;
    }
    .description {
        color: $colorLight;
    }
    #contact-form {
        @include flexbox(column, center, center);
        @include transition(height, 2.7s, none);
        .form-field {
            margin-bottom: 1.2em;
            align-self: center;
            width: 80%;
            @media screen and (max-width: $sizeSm) {
                width: 90%;
                font-size: 90%;
            }
            @include transition(border-bottom, 0.5s, ease);
            @include border-radius(3px);
        }
        .form-field:focus {
            border-bottom: 7px solid $colorSecondary;
        }
        textarea {
            overflow: hidden;
        }
        #submit-btn {
            width: initial;
            border: 3px solid $colorLighter;
            border-bottom: 9px solid $colorLighter;
            color: $colorLight;
            background: none;
            @include transition(all, 1s, ease);
            @include border-radius(6px);
            padding-left: 20px;
            padding-right: 20px;
            font-size: 105%;
        }
        .btn-ready {
            border-color: $colorSecondary !important;
            color: $colorSecondary !important;
            border-bottom: 9px solid $colorSecondary !important;
            cursor: pointer;
        }
        .highlight {
            border-bottom: 7px solid #ff4949;
        }
    }
    .hide {
        opacity: 0;
        height: 0;
    }
    .alert-message {
        text-align: center;
        font-size: 150%;
        color: white;
        @include transition(opacity, 2s, ease);
        margin-top: 1.5vh;
    }
}
</style>
