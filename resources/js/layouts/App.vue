<template>
    <div class="flex flex-row w-screen h-full">
        <nav>
            <NavBar />
        </nav>
        <div class="w-screen">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import NavBar from "../components/NavBar";

export default {
    components: {
        NavBar
    }
};
</script>
