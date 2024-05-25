<template>
    <div>
        <h1>Register</h1>
        <form @submit.prevent="register">
            <input v-model="name" type="text" placeholder="Name" />
            <input v-model="email" type="email" placeholder="Email" />
            <input v-model="password" type="password" placeholder="Password" />
            <input v-model="password_confirmation" type="password" placeholder="Confirm Password" />
            <input v-model="personnummer" type="text" placeholder="Personnummer" />
            <button type="submit">Register</button>
        </form>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import apiClient from '../axios';

export default defineComponent({
    name: 'Register',
    data() {
        return {
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
            personnummer: ''
        };
    },
    methods: {
        async register() {
            try {
                const response = await apiClient.post('/register', {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    password_confirmation: this.password_confirmation,
                    personnummer: this.personnummer
                });
                alert('Registration successful');
            } catch (error) {
                console.error(error);
                alert('Error registering');
            }
        }
    }
});
</script>
