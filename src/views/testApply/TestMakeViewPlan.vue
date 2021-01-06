<template>
  <div class="container-fluid">
    <div class="row">
      <PageHeader :pageCurrentInfo="pageCurrentInfo" />
      <div class="col-sm-12">
        <ul class="nav nav-tabs nav-fill">
          <li
            class="nav-item"
            v-for="(item, index) in ['정기시험정보', '고사장배정']"
            :key="index"
          >
            <a
              href="#"
              class="nav-link"
              @click="tabCon(index)"
              :class="type === index ? 'active' : ''"
              >{{ item }}</a
            >
          </li>
        </ul>

        <div class="tab-content">
          <plan-tab-info :objInfo="obj" v-show="type === 0"></plan-tab-info>
          <plan-tab-place v-show="type === 1"></plan-tab-place>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pageHeader from "@/mixin/pageHeader";
import PlanTabInfo from "./testMakeView/PlanTabInfo.vue";
import PlanTabPlace from "./testMakeView/PlanTabPlace.vue";
export default {
  components: { PlanTabInfo, PlanTabPlace },
  mixins: [pageHeader({ title: "시험생성", groupName: "시험접수" })],
  data() {
    return {
      type: 0,
      obj: {}
    };
  },
  mounted() {
    this.obj = this.$route.params.obj;
    console.log(this.obj);
  },
  methods: {
    tabCon(index) {
      switch (index) {
        case 0:
          this.type = 0;
          break;
        case 1:
          this.type = 1;
          break;
      }
    }
  }
};
</script>

<style></style>
