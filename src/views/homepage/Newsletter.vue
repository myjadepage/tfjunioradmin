<template>
  <div class="container-fluid">
    <div class="row">
      <PageHeader :pageCurrentInfo="pageCurrentInfo" />
      <div class="col-sm-12">
        <div class="widget has-shadow">
          <div class="widget-body">
            <table class="table table-bordered" summary="공지사항관리 검색하기">
              <colgroup>
                <col width="10%" />
                <col width="30%" />
                <col width="10%" />
                <col width="*" />
              </colgroup>
              <tbody>
                <tr>
                  <th scope="row">검색어</th>
                  <td>
                    <div class="row">
                      <div class="col col-sm-3">
                        <select class="form-control" v-model="selected">
                          <option value="">검색구분</option>
                          <option value="title">제목</option>
                          <option value="contents">내용</option>
                        </select>
                      </div>
                      <div class="col col-sm-89">
                        <input
                          type="text"
                          class="form-control"
                          placeholder=""
                          v-model="searchKeyword"
                        />
                      </div>
                    </div>
                  </td>
                  <th>게시일자</th>
                  <td>
                    <div class="row">
                      <div class="col">
                        <!-- date select component -->
                        <DateSelect
                          @state-start-date="searchParam.startDate"
                          @state-end-date="searchParam.endDate"
                        ></DateSelect>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">등록자</th>
                  <td>
                    <div class="row">
                      <div class="col col-sm-3">
                        <select class="form-control" v-model="selected">
                          <option value="">검색구분</option>
                          <option value="title">제목</option>
                          <option value="contents">내용</option>
                        </select>
                      </div>
                      <div class="col col-sm-89">
                        <input
                          type="text"
                          class="form-control"
                          placeholder=""
                          v-model="searchKeyword"
                        />
                      </div>
                    </div>
                  </td>
                  <th>상태</th>
                  <td>
                    <div class="row">
                      <div class="col-sm-12 d-flex align-items-center">
                        <div class="styled-radio">
                          <input
                            type="radio"
                            id="radio1"
                            name="rdoHandling"
                            value=""
                            v-model="searchParam.pitemHandling"
                          />
                          <label for="radio1">전체</label>
                        </div>
                        <div class="styled-radio">
                          <input
                            type="radio"
                            id="radio2"
                            name="rdoHandling"
                            value="1"
                            v-model="searchParam.pitemHandling"
                          />
                          <label for="radio2">공개</label>
                        </div>
                        <div class="styled-radio">
                          <input
                            type="radio"
                            id="radio3"
                            name="rdoHandling"
                            value="0"
                            v-model="searchParam.pitemHandling"
                          />
                          <label for="radio3">비공개</label>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="text-center">
              <button class="btn btn-primary" @click="searchBtn()">검색</button>
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
                  @click="$router.push({ name: 'NewsletterInput' })"
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
                조회된 공지사항이 없습니다.
              </template>
            </VueBootstrap4Table>
          </div>
          <!-- 리스트영역 끝 -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueBootstrap4Table from "vue-bootstrap4-table";
import pageHeader from "@/mixin/pageHeader";
import DateSelect from "./../../components/datepicker/DateSelect";

export default {
  mixins: [pageHeader({ title: "뉴스레터 관리", groupName: "홈페이지관리" })],
  components: {
    VueBootstrap4Table,
    DateSelect
  },
  data: function() {
    return {
      noticeListInfo: [],
      selected: "",
      searchParam: {},
      // table 정의
      rows: [],
      columns: [
        { label: "No", name: "noticeId", sort: true },
        {
          label: "제목",
          name: "title",
          sort: true,
          row_classes: "table-text-left notice-ellipsis"
        },
        { label: "등록자", name: "userNameCreatedBy", sort: true },
        { label: "조회수", name: "viewCount", sort: true },
        { label: "공개여부", name: "viewCount", sort: true },
        { label: "등록일자", name: "dateCreated", sort: true }
      ],
      config: {
        pagination: true,
        pagination_info: false,
        num_of_visibile_pagination_buttons: 10,
        checkbox_rows: false,
        highlight_row_hover: true,
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
      showLoader: false
    };
  },
  mounted() {
    this.showLoader = true;
  },
  methods: {
    // api

    // table perpage
    perPageHandler(option) {
      this.config.per_page = option;
    },
    searchBtn() {
      let param = {
        searchStartDate: this.state.startdate,
        searchEndDate: this.state.enddate,
        searchType: this.selected,
        searchKeyword: this.searchKeyword
      };
      if (param.searchType === "title" && param.searchKeyword === "") {
        alert("내용을 입력하세요");
        return;
      }
      if (param.searchType === "contents" && param.searchKeyword === "") {
        alert("제목을 입력하세요");
        return;
      }
      if (param.searchStartDate === "") {
        param.searchStartDate = this.pfromDate;
      } else {
        param.searchStartDate = this.state.startdate;
      }
      if (param.searchEndDate === "") {
        param.searchEndDate = this.ptoDate;
      } else {
        param.searchEndDate = this.state.enddate;
      }
    }
  }
};
</script>

<style></style>
