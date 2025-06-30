<script setup lang="ts"></script>

<template>
    <header class="d-flex flex-row px-20">
        <a class="d-flex align-items-center mr-20" href="#">
            <img src="../assets/img/téléchargement.png" alt="" width="50" height="50">
            <span class="logo">Boutique</span>
        </a>
        <ul class="d-flex flex-row flex-fill">
            <li class="mr-10">
                <a href="#">Shop</a>
            </li>
            <li>
                <a href="#">Admin</a>
            </li>
        </ul>
        <ul class="d-flex flex-row">
            <li class="mr-10">
                <a href="#">Inscription</a>
            </li>
            <li>
                <a href="#">Connexion</a>
            </li>
        </ul>
    </header>
</template>

<style lang="scss" scoped>
    header {
        background-color: var(--primary-1);

        a {
            font-weight: bold;
            color: var(--text-primary-color);

            &:hover {
                color: #007bff;
            }
        }
        .logo {
            font-size: 20px;
        }
    }


</style>
