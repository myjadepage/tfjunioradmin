<template>
  <div class="container-fluid">
    <PageHeader :pageCurrentInfo="pageCurrentInfo" />

    <div class="widget has-shadow">
      <div class="widget-body">
        <table class="table table-bordered" summary="앰배서더 검색하기">
          <colgroup>
            <col width="10%" />
            <col width="30%" />
            <col width="10%" />
            <col width="*" />
          </colgroup>
          <tbody>
            <tr>
              <th scope="row">시험유형</th>
              <td>
                <div class="row">
                  <div class="col-sm-9">
                    <select
                      class="form-control"
                      v-model="searchParam.testType"
                      @change="onCodeChange"
                    >
                      <option value="">선택</option>
                      <option
                        :value="data.testTypeCode"
                        v-for="data in testtypeDtoList"
                        :key="data.testTypeCode"
                      >
                        {{ data.testTypeName }}</option
                      >
                    </select>
                  </div>
                </div>
              </td>
              <th>시험회차</th>
              <td>
                <div class="row">
                  <div class="col-sm-4">
                    <select class="form-control" v-model="searchParam.testSeq">
                      <option value="">선택</option>
                      <option
                        :value="data.testCode"
                        v-for="data in testseqDtoList"
                        :key="data.testCode"
                        >{{ data.testSeq }}</option
                      >
                    </select>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="text-center">
          <button class="btn btn-primary" @click="searchBtn">검색</button>
        </div>
      </div>
    </div>
    <!-- 검색영역 끝-->

    <!-- 리스트영역 시작 -->
    <div class="widget has-shadow">
      <div class="widget-header bordered">
        <div class="row">
          <div
            class="col-sm-6 d-flex align-items-center justify-content-md-start justify-content-center"
          >
            <!--table pageper-->
            <div class="dropdown show vbt-per-page-dropdown col-sm-2">
              <a
                class="btn btn-block dropdown-toggle form-control"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {{ config.per_page }}
              </a>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a
                  v-for="(option, key, index) in config.per_page_options"
                  :key="index"
                  class="dropdown-item"
                  href=""
                  @click.prevent="perPageHandler(option)"
                  v-bind:class="{ active: option == config.per_page }"
                >
                  {{ option }}
                </a>
              </div>
            </div>
            <label class="col-sm-4">조회건수 : {{ rows.length }} 건</label>
          </div>
          <div
            class="col-sm-6 d-flex align-items-center justify-content-md-end justify-content-center"
          >
            <button
              class="btn btn-outline-primary"
              @click="$router.push({ name: '' })"
            >
              + 신규 정기시험
            </button>
            <button
              class="btn btn-outline-warning"
              @click="$router.push({ name: '' })"
            >
              + 신규 기관시험
            </button>
          </div>
        </div>
      </div>
      <div class="widget-body">
        <VueBootstrap4Table
          :rows="rows"
          :columns="columns"
          :config="config"
          :classes="classes"
          :show-loader="showLoader"
        >
          <template slot="empty-results">
            조회된 정보가 없습니다.
          </template>
          <template slot="dmState" slot-scope="props">
            {{ props.cell_value === "CONFIRM" ? "승인" : "거절" }}
          </template>
        </VueBootstrap4Table>
      </div>
      <!-- 리스트영역 끝 -->
    </div>
  </div>
</template>

<script>
import VueBootstrap4Table from "vue-bootstrap4-table";
import pageHeader from "@/mixin/pageHeader";
import { getTestType, getTestMakeList } from "@/api";

export default {
  mixins: [pageHeader({ title: "시험생성", groupName: "시험접수" })],
  components: {
    VueBootstrap4Table
  },
  data: function() {
    return {
      selectRow: {},
      testtypeDtoList: [],
      testseqDtoList: [],
      rows: [],
      columns: [
        { label: "No", name: "dgmCode", sort: true },
        { label: "시험진행상태", name: "daadId", sort: true },
        { label: "시험명", name: "dmName", sort: true },
        { label: "시험유형", name: "dgmUserid", sort: true },
        { label: "시험회차", name: "dgmOfficeNum", sort: true },
        { label: "응시일시", name: "dgmUsername", sort: true },
        { label: "접수기간", name: "dgmGroupType", sort: true },
        { label: "응시료", name: "dmState", sort: true }
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
        testType: "",
        testSeq: ""
      }
    };
  },
  mounted() {
    this.showLoader = true;
    this.selectType();
    this.init();
  },
  methods: {
    init() {
      getTestMakeList()
        .then(res => {
          this.rows = res.data;
          this.showLoader = false;
          console.log(res);
        })
        .catch(err => {
          this.showLoader = false;
          console.log(err);
        });
    },
    selectType() {
      getTestType()
        .then(res => {
          this.selectRow = res.data;
          this.testtypeDtoList = this.selectRow.testtypeDtoList;
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    onCodeChange(e) {
      this.testseqDtoList = this.selectRow.testseqDtoList.filter(el => {
        return el.testCode.split("-")[0] === e.target.value;
      });
      this.searchParam.testSeq = "";
    },
    // table perpage
    perPageHandler(option) {
      this.config.per_page = option;
    },
    searchBtn() {}
  }
};
</script>

<style></style>
