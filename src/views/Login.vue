<template>
    <div>
        <h1>Login</h1>
        <form @submit.prevent="login">
            <input v-model="personnummer" type="text" placeholder="Personnummer" />
            <input v-model="password" type="password" placeholder="Password" />
            <button type="submit">Login</button>
        </form>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import apiClient from '../axios';

export default defineComponent({
    name: 'Login',
    data() {
        return {
            personnummer: '',
            password: ''
        };
    },
    methods: {
        async login() {
            try {
                const response = await apiClient.post('/login', {
                    personnummer: this.personnummer,
                    password: this.password
                });
                const token = response.data.access_token;
                localStorage.setItem('authToken', token); // Spara token för framtida användning
                alert('Login successful');
            } catch (error) {
                console.error(error);
                alert('Error logging in');
            }
        }
    }
});
</script>
