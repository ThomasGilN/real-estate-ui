<template>
    <div v-for="(view, index) in views" :key="index">
        <router-link :to="view.path">{{view.name}}</router-link>
    </div>
</template>

<script src="./sidebar-impl.ts"/>

