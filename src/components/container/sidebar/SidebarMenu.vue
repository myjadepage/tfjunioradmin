<template>
  <ul class="collapse">
    <li v-for="(item, index) in menuItem" :key="index">
      <router-link :to="item.path">{{ item.title }}</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "sidebarMenu",
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  data: function() {
    return {
      active: false
    };
  },
  computed: {
    menuItem() {
      return this.items;
    }
  }
};
</script>

<style scoped></style>
