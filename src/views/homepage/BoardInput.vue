<template>
  <div class="container-fluid">
    <div class="row">
      <PageHeader
        :pageCurrentInfo="
          $route.params.id
            ? { title: '뉴스레터 보기', groupName: '홈페이지 관리' }
            : pageCurrentInfo
        "
      />
      <div class="col-sm-12">
        <!-- 작성영역 시작-->
        <div class="widget has-shadow">
          <div class="widget-body">
            <table
              class="table table-bordered totla-info"
              summary="뉴스레터 등록"
            >
              <colgroup>
                <col width="10%" />
                <col width="40%" />
                <col width="10%" />
                <col width="40%" />
              </colgroup>
              <tbody>
                <tr>
                  <th scope="row">타이틀</th>
                  <td colspan="3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder=""
                      v-model="notice.title"
                      ref="title"
                    />
                  </td>
                </tr>
                <tr>
                  <th>게시여부</th>
                  <td colspan="3">
                    <div class="row">
                      <div class="col-sm-12 d-flex align-items-center">
                        <div class="styled-radio">
                          <input
                            type="radio"
                            name="radItemStock"
                            id="radItemStock-1"
                            value="정상"
                            v-model="notice.statusCd"
                          />
                          <label for="radItemStock-1">공개</label>
                        </div>
                        <div class="styled-radio">
                          <input
                            type="radio"
                            name="radItemStock"
                            id="radItemStock-2"
                            value="게시중지"
                            v-model="notice.statusCd"
                          />
                          <label for="radItemStock-2">비공개</label>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <th scope="row">
                    <span class="text-primary">첨부파일1</span>
                  </th>
                  <td>
                    <div class="row">
                      <div class="col-sm-7">
                        <file-upload
                          id="file1"
                          @file1="clickFile1"
                        ></file-upload>
                      </div>
                    </div>
                  </td>
                  <th><span class="text-primary">첨부파일2</span></th>
                  <td>
                    <div class="row">
                      <div class="col-sm-7">
                        <file-upload
                          id="file2"
                          @file2="clickFile2"
                        ></file-upload>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row"><span class="text-primary">내용</span></th>
                  <td colspan="7">
                    <editor
                      id="editor"
                      ref="editor"
                      :value="notice.contents"
                      @input="
                        payload => {
                          notice.contents = payload;
                        }
                      "
                    ></editor>
                  </td>
                </tr>
                <tr>
                  <th scope="row"><span class="text-primary">작성자</span></th>
                  <td>홍길동(ID)</td>
                  <th><span class="text-primary">작성일자</span></th>
                  <td>2020-09-05 오후 3:24:19</td>
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
                  @click="$router.push({ name: 'Newsletter' })"
                >
                  목록
                </button>
              </div>
              <div class="col-sm-6 d-flex justify-content-end">
                <button type="button" class="btn btn-primary" @click="save">
                  저장
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- 입력폼 끝-->
      </div>
    </div>
  </div>
</template>

<script>
import pageHeader from "@/mixin/pageHeader";
import FileUpload from "@/components/FileUpload.vue";
import Editor from "@/components/Editor.vue";

export default {
  name: "noticeInput",
  mixins: [pageHeader({ title: "공지사항등록", groupName: "홈페이지관리" })],
  components: {
    FileUpload,
    Editor
  },
  data: function() {
    return {
      notice: {},
      file1: "",
      file2: ""
    };
  },
  methods: {
    clickFile1(e) {
      this.file1 = e;
    },
    clickFile2(e) {
      this.file2 = e;
    },
    save() {
      if (this.notice.title === undefined) {
        alert("제목을 입력하세요");
        this.$refs.title.focus();
        return;
      }
      if (this.notice.contents === undefined) {
        alert("내용을 입력하세요");
        this.$refs.editor.focus();
        return;
      }
      if (this.notice.statusCd === undefined) {
        alert("사용여부를 선택하세요");
        return false;
      }
      alert(this.notice.linkUrl);
      let formData = new FormData();
      formData.append("noticeId", this.notice.noticeId);
      formData.append("title", this.notice.title);
      formData.append("contents", this.notice.contents);
      formData.append("linkTitle", this.notice.linkTitle);
      formData.append("linkUrl", this.notice.linkUrl);
      if (this.state.startdate === "") {
        formData.append("startDate", this.pfromDate);
      } else {
        formData.append("startDate", this.state.startdate);
      }
      if (this.state.enddate === "") {
        formData.append("endDate", this.ptoDate);
      } else {
        formData.append("endDate", this.state.enddate);
      }
      formData.append("StatusCd", this.notice.statusCd);
      formData.append("file1", this.file1);
      formData.append("file2", this.file2);
      for (var item of formData.entries()) {
        console.log(item[0] + "," + item[1]);
      }
    },
    setPfromDate(date) {
      this.pfromDate = date;
    },
    setPtoDate(date) {
      this.ptoDate = date;
    }
  }
};
</script>

<style></style>
