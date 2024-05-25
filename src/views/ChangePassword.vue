<template>
    <div>
        <h1>Change Password</h1>
        <form @submit.prevent="changePassword">
            <input v-model="current_password" type="password" placeholder="Current Password" />
            <input v-model="new_password" type="password" placeholder="New Password" />
            <input v-model="new_password_confirmation" type="password" placeholder="Confirm New Password" />
            <button type="submit">Change Password</button>
        </form>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import apiClient from '../axios';

export default defineComponent({
    name: 'ChangePassword',
    data() {
        return {
            current_password: '',
            new_password: '',
            new_password_confirmation: ''
        };
    },
    methods: {
        async changePassword() {
            try {
                const token = localStorage.getItem('authToken'); // Hämta token från localStorage eller annan metod
                const response = await apiClient.post('/change-password', {
                    current_password: this.current_password,
                    new_password: this.new_password,
                    new_password_confirmation: this.new_password_confirmation
                }, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                console.log(response.data);
                alert('Password changed successfully');
            } catch (error) {
                console.error(error);
                alert('Error changing password');
            }
        }
    }
});
</script>
