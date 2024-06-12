<template>
    <div class="register-form">
        <h2>注册表单</h2>
        <form @submit.prevent="handleSubmit">
            <div class="form-group">
                <label for="username">用户名:</label>
                <input type="text" id="username" v-model="form.username" @input="validateUsername" class="form-control"
                    :class="{ 'is-invalid': usernameError }" />
                <div v-if="usernameError" class="invalid-feedback">{{ usernameError }}</div>
            </div>

            <div class="form-group">
                <label for="email">电子邮件:</label>
                <input type="email" id="email" v-model="form.email" @input="validateEmail" class="form-control"
                    :class="{ 'is-invalid': emailError }" />
                <div v-if="emailError" class="invalid-feedback">{{ emailError }}</div>
            </div>

            <div class="form-group">
                <label for="password">密码:</label>
                <input type="password" id="password" v-model="form.password" @input="validatePassword"
                    class="form-control" :class="{ 'is-invalid': passwordError }" />
                <div v-if="passwordError" class="invalid-feedback">{{ passwordError }}</div>
            </div>

            <button type="submit" :disabled="isFormInvalid">注册</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                username: '',
                email: '',
                password: ''
            },
            usernameError: '',
            emailError: '',
            passwordError: '',
            isFormInvalid: false
        };
    },
    methods: {
        validateUsername() {
            // 验证逻辑，例如：用户名不能为空且长度大于3  
            if (!this.form.username || this.form.username.length < 3) {
                this.usernameError = '用户名不能为空且长度需大于3';
                this.isFormInvalid = true;
            } else {
                this.usernameError = '';
                this.isFormInvalid = this.emailError || this.passwordError;
            }
        },
        validateEmail() {
            // 验证逻辑，例如：邮箱格式验证  
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(this.form.email)) {
                this.emailError = '请输入有效的电子邮件地址';
                this.isFormInvalid = true;
            } else {
                this.emailError = '';
                this.isFormInvalid = this.usernameError || this.passwordError;
            }
        },
        validatePassword() {
            // 验证逻辑，例如：密码不能为空且长度大于6  
            if (!this.form.password || this.form.password.length < 6) {
                this.passwordError = '密码不能为空且长度需大于6';
                this.isFormInvalid = true;
            } else {
                this.passwordError = '';
                this.isFormInvalid = this.usernameError || this.emailError;
            }
        },
        handleSubmit() {
            // 表单提交逻辑，例如：发送数据到服务器  
            console.log('表单数据:', this.form);
        }
    }
};  
</script>

<style scoped>
.register-form {
    max-width: 400px;
    padding: 20px;
    margin: 20px auto;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    font-family: 'Arial', sans-serif;
}

.register-form h2 {
    text-align: center;
    margin-bottom: 20px;
}

.form-group {
    margin-bottom: 15px;
}

.form-group label {
    display: block;
    margin-bottom: 5px;
}

.form-group input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

.form-group input:focus {
    outline: none;
    border-color: #4CAF50;
    /* Green */
    box-shadow: 0 0 8px rgba(76, 175, 80, 0.5);
}

.form-group .invalid-feedback {
    color: #f44336;
    /* Red */
    font-size: 14px;
    margin-top: 5px;
}

.form-group input.is-invalid {
    border-color: #f44336;
    /* Red */
}

.register-form button[type="submit"] {
    padding: 10px 20px;
    background-color: #4CAF50;
    /* Green */
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.register-form button[type="submit"]:hover {
    background-color: #45a049;
    /* Darker green */
}

.register-form button[type="submit"]:disabled {
    background-color: #ccc;
    /* Gray */
    cursor: not-allowed;
}
</style>
