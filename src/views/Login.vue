<template>
    <div>
        <h1>Login</h1>
        <form @submit.prevent="login">
            <input v-model="personnummer" placeholder="Personnummer" />
            <input v-model="password" type="password" placeholder="Password" />
            <button type="submit">Login</button>
        </form>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import axios from 'axios'

export default defineComponent({
    data() {
        return {
            personnummer: '',
            password: ''
        }
    },
    methods: {
        async login() {
            try {
                const response = await axios.post('/api/login', {
                    personnummer: this.personnummer,
                    password: this.password
                })
                console.log(response.data)
            } catch (error) {
                console.error(error)
            }
        }
    }
})
</script>
