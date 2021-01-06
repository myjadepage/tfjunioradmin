<template>
  <div>
    <!-- 검색영역 시작-->
    <div class="widget">
      <div class="widget-body no-padding">
        <table class="table table-bordered item-select" summary="직원 검색하기">
          <colgroup>
            <col width="20%" />
            <col width="*" />
            <col width="15%" />
          </colgroup>
          <tbody>
            <tr>
              <th scope="row"><span class="text-primary">지역본부</span></th>
              <td>
                <div class="row">
                  <div class="col col-sm-5">
                    <select
                      class="form-control"
                      v-model="searchParam.psearchType"
                    >
                      <option value="name">지역본부명</option>
                      <option value="id">지역본부ID</option>
                    </select>
                  </div>
                  <div class="col col-sm-7">
                    <input
                      type="text"
                      class="form-control"
                      value=""
                      v-model="searchParam.psearchKeyword"
                    />
                  </div>
                </div>
              </td>
              <td rowspan="3">
                <button class="btn btn-primary btn-item" @click="searchBtn">
                  조회
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row"><span class="text-primary">사용여부</span></th>
              <td>
                <div class="row">
                  <div class="col-sm-12 d-flex align-items-center">
                    <div class="styled-radio">
                      <input
                        type="radio"
                        id="pworkStatus-1"
                        v-model="searchParam.pworkStatus"
                        value=""
                      />
                      <label for="pworkStatus-1">전체</label>
                    </div>
                    <div class="styled-radio">
                      <input
                        type="radio"
                        id="pworkStatus-2"
                        v-model="searchParam.pworkStatus"
                        value="정상"
                      />
                      <label for="pworkStatus-2">사용</label>
                    </div>
                    <div class="styled-radio">
                      <input
                        type="radio"
                        id="pworkStatus-3"
                        v-model="searchParam.pworkStatus"
                        value="삭제"
                      />
                      <label for="pworkStatus-3">미사용</label>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!-- 검색영역 끝-->
    <div class="widget">
      <div class="widget-body no-padding">
        <vue-bootstrap4-table
          :rows="rows"
          :columns="columns"
          :config="config"
          :classes="classes"
          :show-loader="showLoader"
        >
          <template slot="empty-results">조회된 정보가 없습니다.</template>
        </vue-bootstrap4-table>
      </div>
    </div>
  </div>
</template>

<script>
import VueBootstrap4Table from "vue-bootstrap4-table";
import { getAgency } from "@/api";

export default {
  components: { VueBootstrap4Table },
  data() {
    return {
      rows: [],
      columns: [
        { label: "No", name: "dacCode", sort: true, row_classes: "w80" },
        { label: "지역본부명", name: "dacArea", sort: true },
        { label: "ID", name: "dacName", sort: true },
        { label: "상태", name: "dacCondition", sort: true }
      ],
      config: {
        pagination: true,
        pagination_info: false,
        num_of_visibile_pagination_buttons: 10,
        checkbox_rows: false,
        highlight_row_hover: false,
        rows_selectable: false,
        multi_column_sort: false,
        card_mode: false,
        selected_rows_info: false,
        per_page: 20,
        per_page_options: [20, 50, 100],
        show_reset_button: false,
        show_refresh_button: false,
        global_search: {
          placeholder: "",
          visibility: false,
          case_sensitive: false
        }
      },
      classes: {
        table: "table table-bordered"
      },
      showLoader: false,
      searchParam: {
        pkeyword: "",
        psearchType: "name",
        PStatus: "",
        pcode: ""
      }
    };
  },
  mounted() {
    this.showLoader = true;
    this.init();
  },
  methods: {
    init() {
      getAgency()
        .then(res => {
          console.log(res);
          this.rows = res.data;
          this.showLoader = false;
        })
        .catch(err => {
          this.showLoader = false;
          console.log(err);
        });
    },
    // 조회버튼
    searchBtn() {},
    noSort(list) {
      return list.slice().sort((a, b) => (a.userNo < b.userNo ? 1 : -1));
    }
  }
};
</script>

<style></style>
