<template>
  <nav>
    <ul>
      <li v-for="(navbar,key,index) in navbars" :key="key" v-if="navbar.parentId == null" :class="navbar.path === activeFor ? 'active' :''" @click="setActiveFor(navbar.path)">
        <router-link :to="{path: navbar.path}">{{navbar.displayName}}
          <i class="fa fa-angle-down" v-if="countNavbarByParentId(navbar.id)" aria-hidden="true"></i>
        </router-link>
        <ul v-if="countNavbarByParentId(navbar.id)">
          <li v-for="(childrenNavbar,skey,index) in getNavbarByParentId(navbar.id)" :key="skey"  :class="navbar.path === activeFor ? 'active' :''" @click="setActiveFor(navbar.path)"> 
           <router-link :to="{path: childrenNavbar.path}">{{childrenNavbar.displayName}}</router-link>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { INavbar } from "../models";
@Component
export default class HeaderNavbarComponent extends Vue {
  navbars: INavbar[] | null;
  activeFor: string | null;
  /**
   *
   */
  constructor() {
    super();
    this.navbars = require("../api/header-navbar.vi-VN.json");
    if (localStorage.getItem("lang") === "en-US") this.activeFor = "/home";
    else this.activeFor = "/trang-chu";
  }
  /* eslint-disable */
  getNavbarByParentId(parentId: number) {
    let childrenNavbars: INavbar[] = [];
    return this.navbars.filter(item => item.parentId === parentId);
  }
  /* eslint-disable */
  countNavbarByParentId(parentId: number) {
    let childrenNavbars: INavbar[] = [];
    return this.navbars.filter(item => item.parentId === parentId).length > 0;
  }
  setActiveFor(path: string) {
    this.activeFor = path;
  }
}
</script>

