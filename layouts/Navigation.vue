<template>
    <nav class="nav">
        <a href="#" class="nav-link"><img src="/box.svg" alt="logo" class="logo"></a>
        <a href="#" class="nav-link">Productos</a>
        <a href="#" class="nav-link">Precios</a>
        <a href="#" class="nav-link">Información</a>
    </nav>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
.logo{
    width: 40px;
    height: 40px;
}
.nav{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1.6rem;
    padding: 2.4rem 3.2rem;
}
.nav-link{
    color: black;
    font-size: 1.6rem;
    text-decoration: none;
}
</style>