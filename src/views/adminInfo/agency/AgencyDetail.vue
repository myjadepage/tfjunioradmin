<template>
  <div class="widget">
    <div class="widget-header no-padding">
      <ul class="nav nav-tabs nav-fill">
        <li
          class="nav-item"
          v-for="(item, index) in [
            '지역본부정보',
            '메뉴권한설정',
            '관리지역설정'
          ]"
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
    </div>
    <div class="widget-body no-padding tab-content">
      <div class="widget mb-0">
        <div class="widget-header">
          <table class="table table-bordered" summary="직원정보">
            <colgroup>
              <col width="25%" />
              <col width="25%" />
              <col width="25%" />
              <col width="25%" />
            </colgroup>
            <thead>
              <th>{{ selectMember.userName }}( {{ selectMember.loginId }} )</th>
              <th>{{ selectMember.userDept }}</th>
              <th>{{ selectMember.dateCreated }}</th>
              <th>{{ selectMember.statusCd }}</th>
            </thead>
          </table>
        </div>
      </div>

      <div class="tab-pane active">
        <tab-info v-show="type === 0"></tab-info>
        <tab-admin v-show="type === 1"></tab-admin>
        <tab-area v-show="type === 2"></tab-area>
      </div>
    </div>

    <div class="widget-footer">
      <div class="row">
        <div class="col-sm-6 d-flex align-items-center justify-content-start">
          <button type="button" class="btn btn-info" @click="newMemberBtn">
            신규
          </button>
        </div>
        <div class="col-sm-6 d-flex align-items-center justify-content-end">
          <button type="button" class="btn btn-primary" @click="memberSaveBtn">
            저장
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TabAdmin from "./TabAdmin.vue";
import TabArea from "./TabArea.vue";
import TabInfo from "./TabInfo.vue";
export default {
  components: { TabInfo, TabArea, TabAdmin },
  data() {
    return {
      type: 0,
      selectMember: {}
    };
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
        case 2:
          this.type = 2;
          break;
      }
    },
    newMemberBtn() {},
    memberSaveBtn() {}
  }
};
</script>

<style></style>
