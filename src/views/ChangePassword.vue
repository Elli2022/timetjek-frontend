<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';

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
                const response = await axios.post('/api/change-password', {
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
