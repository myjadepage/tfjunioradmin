<template>
  <div class="widget has-shadow">
    <div class="widget-header bordered">
      <div class="row">
        <div class="col-sm-12 d-flex align-items-center justify-content-start">
          <div class="input-group">
            <span class="input-group-addon mr-2"><b>지역구분</b></span>
            <select class="form-control col-sm-2">
              <option value="">선택</option>
              <option
                :value="data.daadId"
                v-for="data in rowSelect"
                :key="data.daadCode"
                >{{ data.daadName }}</option
              >
            </select>
          </div>
        </div>
      </div>
    </div>
    <div class="widget-body">
      <table
        id="sales-spec-table"
        class="table table-bordered"
        summary="고사장배정 리스트"
      >
        <colgroup>
          <col width="7%" />
          <col width="10%" />
          <col width="20%" />
          <col width="10%" />
          <col width="10%" />
          <col width="*" />
        </colgroup>
        <thead>
          <tr>
            <th>
              <div class="styled-checkbox">
                <input type="checkbox" id="resign-1" v-model="resignChecked" />
                <label for="resign-1"></label>
              </div>
            </th>
            <th>지역</th>
            <th>고사장</th>
            <th>고사실 수</th>
            <th>인원</th>
            <th>담당총판</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div class="styled-checkbox">
                <input type="checkbox" id="resign-1" v-model="resignChecked" />
                <label for="resign-1"></label>
              </div>
            </td>
            <td>서울특별시</td>
            <td class="text-left">신원중학교</td>
            <td>20</td>
            <td>700</td>
            <td class="text-left">[DST011] 서울 강서본부(이동원)</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="widget-footer">
      <div class="row col">
        <div class="col-sm-6">
          <button
            type="button"
            class="btn btn-outline-primary"
            @click="$router.push({ name: 'TestMake' })"
          >
            목록
          </button>
        </div>
        <div class="col-sm-6 d-flex justify-content-end">
          <button type="button" class="btn btn-primary">
            저장
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getAreacode } from "@/api";
export default {
  data() {
    return {
      rowSelect: [],
      resignChecked: ""
    };
  },
  mounted() {
    this.initSelect();
  },
  methods: {
    initSelect() {
      getAreacode()
        .then(res => {
          this.rowSelect = res.data;
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style></style>
