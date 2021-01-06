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
              <th scope="row">검색구분</th>
              <td>
                <div class="row">
                  <div class="col col-sm-4">
                    <select
                      class="form-control"
                      v-model="searchParam.typeSearch"
                    >
                      <option value="">선택</option>
                      <option value="id">단체회원ID</option>
                      <option value="name">단체명</option>
                    </select>
                  </div>
                  <div class="col col-sm-4">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="검색어 입력"
                    />
                  </div>
                </div>
              </td>
              <th>담당지역본부</th>
              <td>
                <div class="row">
                  <div class="col-sm-4">
                    <select class="form-control" v-model="searchParam.typeCom">
                      <option value="">선택</option>
                    </select>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">지역구분</th>
              <td>
                <div class="row">
                  <div class="col-sm-4">
                    <select class="form-control" v-model="searchParam.typeArea">
                      <option value="">선택</option>
                      <option value="id">회원ID</option>
                      <option value="name">회원명</option>
                      <option value="name">영문이름</option>
                    </select>
                  </div>
                </div>
              </td>
              <th>상태</th>
              <td>
                <div class="row">
                  <div class="col-sm-4">
                    <select
                      class="form-control"
                      v-model="searchParam.typeStatus"
                    >
                      <option value="">선택</option>
                      <option value="0">승인취소</option>
                      <option value="1">요청승인</option>
                      <option value="2">승인거부</option>
                      <option value="3">회원가입요청</option>
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
              @click="$router.push({ name: 'NoticeInput' })"
            >
              + 신규
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
import { getGroupMember } from "@/api";

export default {
  mixins: [pageHeader({ title: "단체회원", groupName: "회원관리" })],
  components: {
    VueBootstrap4Table
  },
  data: function() {
    return {
      rows: [],
      columns: [
        { label: "No", name: "dgmCode", sort: true },
        { label: "지역구분", name: "daadId", sort: true },
        { label: "지역본부", name: "dmName", sort: true },
        { label: "단체ID", name: "dgmUserid", sort: true },
        { label: "단체명", name: "dgmOfficeNum", sort: true },
        { label: "대표자", name: "dgmUsername", sort: true },
        { label: "단체유형", name: "dgmGroupType", sort: true },
        { label: "단체상태", name: "dmState", sort: true }
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
        typeArea: "",
        typeSearch: "",
        typeStatus: "",
        typeCom: ""
      }
    };
  },
  mounted() {
    this.showLoader = true;
    this.init();
  },
  methods: {
    init() {
      getGroupMember()
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
    // table perpage
    perPageHandler(option) {
      this.config.per_page = option;
    },
    searchBtn() {}
  }
};
</script>

<style></style>
