<template>
    <div class="relative min-h-screen flex ">
        <div class="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 bg-white">
            <div class="sm:w-1/2 xl:w-3/5 h-full hidden md:flex flex-auto items-center justify-center p-10 overflow-hidden bg-purple-900 text-white bg-no-repeat bg-cover relative"
                 style="background-image: url(https://images.unsplash.com/photo-1579451861283-a2239070aaa9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80);">
                <div class="absolute bg-gradient-to-b from-indigo-600 to-blue-500 opacity-75 inset-0 z-0"></div>
                <div class="w-full  max-w-md z-10">
                    <div class="sm:text-4xl xl:text-5xl font-bold leading-tight mb-6">Reference site about Lorem Ipsum..</div>
                    <div class="sm:text-sm xl:text-md text-gray-200 font-normal"> What is Lorem Ipsum Lorem Ipsum is simply dummy
                        text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever
                        since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it
                        has?</div>
                </div>
                <!---remove custom style-->
                <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div class="md:flex md:items-center md:justify-center w-full sm:w-auto md:h-full w-2/5 xl:w-2/5 p-8  md:p-10 lg:p-14 sm:rounded-lg md:rounded-none bg-white">
                <div class="max-w-md w-full space-y-8">
                    <div class="text-center">
                        <h2 class="mt-6 text-3xl font-bold text-gray-900">
                           Bienvenue !
                        </h2>
                    </div>
                    <form class="mt-8 space-y-6">
                        <div class="relative">
                            <label class="ml-3 text-sm font-bold text-gray-700 tracking-wide">Name</label>
                            <input
                                class=" w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
                                type="text" placeholder="Votre nom..." v-model="form.name">
                        </div>
                        <div class="relative">
                            <label class="ml-3 text-sm font-bold text-gray-700 tracking-wide">Email</label>
                            <input
                                class=" w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
                                type="email" placeholder="mail@gmail.com" v-model="form.email">
                        </div>
                        <div class="mt-8 content-center">
                            <label class="ml-3 text-sm font-bold text-gray-700 tracking-wide">
                                Password
                            </label>
                            <input
                                class="w-full content-center text-base px-4 py-2 border-b rounded-2xl border-gray-300 focus:outline-none focus:border-indigo-500"
                                type="" placeholder="Enter your password" v-model="form.password">
                        </div>
                        <div class="mt-8 content-center">
                            <label class="ml-3 text-sm font-bold text-gray-700 tracking-wide">
                                Confirm Password
                            </label>
                            <input
                                class="w-full content-center text-base px-4 py-2 border-b rounded-2xl border-gray-300 focus:outline-none focus:border-indigo-500"
                                type="" placeholder="Enter your password" v-model="form.password_confirmation">
                        </div>
                        <div>
                            <button type="button"
                                    class="w-full flex justify-center bg-gradient-to-r from-indigo-500 to-blue-600  hover:bg-gradient-to-l hover:from-blue-500 hover:to-indigo-600 text-gray-100 p-4  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                                    @click="inscription()">
                               S'inscrire
                            </button>
                        </div>
                        <p class="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
                            <a class="text-indigo-400 hover:text-blue-500 no-underline hover:underline cursor-pointer transition ease-in duration-300">
                                <router-link
                                    class="nav-link"
                                    data-toggle="collapse"
                                    :to="{ name: 'connexion' }">
                                    Déjà un compte ?
                                </router-link>
                            </a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            form: {
                name: '',
                email: '',
                password: '',
                password_confirmation: ''
            }
        }
    },
    methods: {
        inscription () {
            axios.get('/sanctum/csrf-cookie').then(response => {
                axios
                    .post('/api/inscription', {
                        header: {
                            'Content-Type': 'application/json',
                            xsrfHeaderName: 'X-XSRF-TOKEN'
                        },
                        name: this.form.name,
                        email: this.form.email,
                        password: this.form.password,
                        password_confirmation: this.form.password_confirmation
                    })
                    .then(response => {
                        console.log(response.data)
                    })
                    .catch(error => {
                        console.log(error)
                    })
            })
        }
    }
}
</script>
