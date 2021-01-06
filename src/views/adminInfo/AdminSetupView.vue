<template>
  <div class="container-fluid">
    <div class="row">
      <PageHeader :pageCurrentInfo="pageCurrentInfo" />

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
              <th></th>
              <td></td>
              <th></th>
              <td></td>
            </thead>
          </table>
        </div>
      </div>

      <div class="widget">
        <div class="widget-body">
          <table class="table table-bordered" summary="권한별">
            <colgroup>
              <col width="25%" />
              <col width="25%" />
              <col width="10%" />
              <col width="10%" />
              <col width="10%" />
              <col width="10%" />
              <col width="10%" />
            </colgroup>
            <thead>
              <tr>
                <th rowspan="2">1Depth</th>
                <th rowspan="2">2Depth</th>
                <th colspan="5">메뉴권한</th>
              </tr>
              <tr>
                <th>조회</th>
                <th>저장</th>
                <th>삭제</th>
                <th>인쇄</th>
                <th>파일</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>구매관리</td>
                <td>구매발주서</td>
                <td>
                  <div class="styled-checkbox">
                    <input type="checkbox" name="checkbox" id="check-1" />
                    <label for="check-1"></label>
                  </div>
                </td>
                <td>
                  <div class="styled-checkbox">
                    <input type="checkbox" name="checkbox" id="check-1" />
                    <label for="check-1"></label>
                  </div>
                </td>
                <td>
                  <div class="styled-checkbox">
                    <input type="checkbox" name="checkbox" id="check-1" />
                    <label for="check-1"></label>
                  </div>
                </td>
                <td>
                  <div class="styled-checkbox">
                    <input type="checkbox" name="checkbox" id="check-1" />
                    <label for="check-1"></label>
                  </div>
                </td>
                <td>
                  <div class="styled-checkbox">
                    <input type="checkbox" name="checkbox" id="check-1" />
                    <label for="check-1"></label>
                  </div>
                </td>
              </tr>
              <tr>
                <td>구매관리</td>
                <td>매입확정</td>
                <td>
                  <div class="styled-checkbox">
                    <input type="checkbox" name="checkbox" id="check-1" />
                    <label for="check-1"></label>
                  </div>
                </td>
                <td>
                  <div class="styled-checkbox">
                    <input type="checkbox" name="checkbox" id="check-1" />
                    <label for="check-1"></label>
                  </div>
                </td>
                <td>
                  <div class="styled-checkbox">
                    <input type="checkbox" name="checkbox" id="check-1" />
                    <label for="check-1"></label>
                  </div>
                </td>
                <td>
                  <div class="styled-checkbox">
                    <input type="checkbox" name="checkbox" id="check-1" />
                    <label for="check-1"></label>
                  </div>
                </td>
                <td>
                  <div class="styled-checkbox">
                    <input type="checkbox" name="checkbox" id="check-1" />
                    <label for="check-1"></label>
                  </div>
                </td>
              </tr>
              <tr>
                <td>구매관리</td>
                <td>매입명세서</td>
                <td>
                  <div class="styled-checkbox">
                    <input type="checkbox" name="checkbox" id="check-1" />
                    <label for="check-1"></label>
                  </div>
                </td>
                <td>
                  <div class="styled-checkbox">
                    <input type="checkbox" name="checkbox" id="check-1" />
                    <label for="check-1"></label>
                  </div>
                </td>
                <td>
                  <div class="styled-checkbox">
                    <input type="checkbox" name="checkbox" id="check-1" />
                    <label for="check-1"></label>
                  </div>
                </td>
                <td>
                  <div class="styled-checkbox">
                    <input type="checkbox" name="checkbox" id="check-1" />
                    <label for="check-1"></label>
                  </div>
                </td>
                <td>
                  <div class="styled-checkbox">
                    <input type="checkbox" name="checkbox" id="check-1" />
                    <label for="check-1"></label>
                  </div>
                </td>
              </tr>
              <tr>
                <td>구매관리</td>
                <td>매입조회</td>
                <td>
                  <div class="styled-checkbox">
                    <input type="checkbox" name="checkbox" id="check-1" />
                    <label for="check-1"></label>
                  </div>
                </td>
                <td>
                  <div class="styled-checkbox">
                    <input type="checkbox" name="checkbox" id="check-1" />
                    <label for="check-1"></label>
                  </div>
                </td>
                <td>
                  <div class="styled-checkbox">
                    <input type="checkbox" name="checkbox" id="check-1" />
                    <label for="check-1"></label>
                  </div>
                </td>
                <td>
                  <div class="styled-checkbox">
                    <input type="checkbox" name="checkbox" id="check-1" />
                    <label for="check-1"></label>
                  </div>
                </td>
                <td>
                  <div class="styled-checkbox">
                    <input type="checkbox" name="checkbox" id="check-1" />
                    <label for="check-1"></label>
                  </div>
                </td>
              </tr>
              <tr>
                <td>구매관리</td>
                <td>매입처원장</td>
                <td>
                  <div class="styled-checkbox">
                    <input type="checkbox" name="checkbox" id="check-1" />
                    <label for="check-1"></label>
                  </div>
                </td>
                <td>
                  <div class="styled-checkbox">
                    <input type="checkbox" name="checkbox" id="check-1" />
                    <label for="check-1"></label>
                  </div>
                </td>
                <td>
                  <div class="styled-checkbox">
                    <input type="checkbox" name="checkbox" id="check-1" />
                    <label for="check-1"></label>
                  </div>
                </td>
                <td>
                  <div class="styled-checkbox">
                    <input type="checkbox" name="checkbox" id="check-1" />
                    <label for="check-1"></label>
                  </div>
                </td>
                <td>
                  <div class="styled-checkbox">
                    <input type="checkbox" name="checkbox" id="check-1" />
                    <label for="check-1"></label>
                  </div>
                </td>
              </tr>
              <tr>
                <td>구매관리</td>
                <td>미입고현황</td>
                <td>
                  <div class="styled-checkbox">
                    <input type="checkbox" name="checkbox" id="check-1" />
                    <label for="check-1"></label>
                  </div>
                </td>
                <td>
                  <div class="styled-checkbox">
                    <input type="checkbox" name="checkbox" id="check-1" />
                    <label for="check-1"></label>
                  </div>
                </td>
                <td>
                  <div class="styled-checkbox">
                    <input type="checkbox" name="checkbox" id="check-1" />
                    <label for="check-1"></label>
                  </div>
                </td>
                <td>
                  <div class="styled-checkbox">
                    <input type="checkbox" name="checkbox" id="check-1" />
                    <label for="check-1"></label>
                  </div>
                </td>
                <td>
                  <div class="styled-checkbox">
                    <input type="checkbox" name="checkbox" id="check-1" />
                    <label for="check-1"></label>
                  </div>
                </td>
              </tr>
              <tr>
                <td>구매관리</td>
                <td>주문조회</td>
                <td>
                  <div class="styled-checkbox">
                    <input type="checkbox" name="checkbox" id="check-1" />
                    <label for="check-1"></label>
                  </div>
                </td>
                <td>
                  <div class="styled-checkbox">
                    <input type="checkbox" name="checkbox" id="check-1" />
                    <label for="check-1"></label>
                  </div>
                </td>
                <td>
                  <div class="styled-checkbox">
                    <input type="checkbox" name="checkbox" id="check-1" />
                    <label for="check-1"></label>
                  </div>
                </td>
                <td>
                  <div class="styled-checkbox">
                    <input type="checkbox" name="checkbox" id="check-1" />
                    <label for="check-1"></label>
                  </div>
                </td>
                <td>
                  <div class="styled-checkbox">
                    <input type="checkbox" name="checkbox" id="check-1" />
                    <label for="check-1"></label>
                  </div>
                </td>
              </tr>
              <tr>
                <td>주문/배송관리</td>
                <td>주문조회</td>
                <td>
                  <div class="styled-checkbox">
                    <input type="checkbox" name="checkbox" id="check-1" />
                    <label for="check-1"></label>
                  </div>
                </td>
                <td>
                  <div class="styled-checkbox">
                    <input type="checkbox" name="checkbox" id="check-1" />
                    <label for="check-1"></label>
                  </div>
                </td>
                <td>
                  <div class="styled-checkbox">
                    <input type="checkbox" name="checkbox" id="check-1" />
                    <label for="check-1"></label>
                  </div>
                </td>
                <td>
                  <div class="styled-checkbox">
                    <input type="checkbox" name="checkbox" id="check-1" />
                    <label for="check-1"></label>
                  </div>
                </td>
                <td>
                  <div class="styled-checkbox">
                    <input type="checkbox" name="checkbox" id="check-1" />
                    <label for="check-1"></label>
                  </div>
                </td>
              </tr>
              <tr>
                <td>구매관리</td>
                <td>주문조회</td>
                <td>
                  <div class="styled-checkbox">
                    <input type="checkbox" name="checkbox" id="check-1" />
                    <label for="check-1"></label>
                  </div>
                </td>
                <td>
                  <div class="styled-checkbox">
                    <input type="checkbox" name="checkbox" id="check-1" />
                    <label for="check-1"></label>
                  </div>
                </td>
                <td>
                  <div class="styled-checkbox">
                    <input type="checkbox" name="checkbox" id="check-1" />
                    <label for="check-1"></label>
                  </div>
                </td>
                <td>
                  <div class="styled-checkbox">
                    <input type="checkbox" name="checkbox" id="check-1" />
                    <label for="check-1"></label>
                  </div>
                </td>
                <td>
                  <div class="styled-checkbox">
                    <input type="checkbox" name="checkbox" id="check-1" />
                    <label for="check-1"></label>
                  </div>
                </td>
              </tr>
              <tr>
                <td>구매관리</td>
                <td>주문조회</td>
                <td>
                  <div class="styled-checkbox">
                    <input type="checkbox" name="checkbox" id="check-1" />
                    <label for="check-1"></label>
                  </div>
                </td>
                <td>
                  <div class="styled-checkbox">
                    <input type="checkbox" name="checkbox" id="check-1" />
                    <label for="check-1"></label>
                  </div>
                </td>
                <td>
                  <div class="styled-checkbox">
                    <input type="checkbox" name="checkbox" id="check-1" />
                    <label for="check-1"></label>
                  </div>
                </td>
                <td>
                  <div class="styled-checkbox">
                    <input type="checkbox" name="checkbox" id="check-1" />
                    <label for="check-1"></label>
                  </div>
                </td>
                <td>
                  <div class="styled-checkbox">
                    <input type="checkbox" name="checkbox" id="check-1" />
                    <label for="check-1"></label>
                  </div>
                </td>
              </tr>
              <tr>
                <td>구매관리</td>
                <td>주문조회</td>
                <td>
                  <div class="styled-checkbox">
                    <input type="checkbox" name="checkbox" id="check-1" />
                    <label for="check-1"></label>
                  </div>
                </td>
                <td>
                  <div class="styled-checkbox">
                    <input type="checkbox" name="checkbox" id="check-1" />
                    <label for="check-1"></label>
                  </div>
                </td>
                <td>
                  <div class="styled-checkbox">
                    <input type="checkbox" name="checkbox" id="check-1" />
                    <label for="check-1"></label>
                  </div>
                </td>
                <td>
                  <div class="styled-checkbox">
                    <input type="checkbox" name="checkbox" id="check-1" />
                    <label for="check-1"></label>
                  </div>
                </td>
                <td>
                  <div class="styled-checkbox">
                    <input type="checkbox" name="checkbox" id="check-1" />
                    <label for="check-1"></label>
                  </div>
                </td>
              </tr>
              <tr>
                <td>구매관리</td>
                <td>주문조회</td>
                <td>
                  <div class="styled-checkbox">
                    <input type="checkbox" name="checkbox" id="check-1" />
                    <label for="check-1"></label>
                  </div>
                </td>
                <td>
                  <div class="styled-checkbox">
                    <input type="checkbox" name="checkbox" id="check-1" />
                    <label for="check-1"></label>
                  </div>
                </td>
                <td>
                  <div class="styled-checkbox">
                    <input type="checkbox" name="checkbox" id="check-1" />
                    <label for="check-1"></label>
                  </div>
                </td>
                <td>
                  <div class="styled-checkbox">
                    <input type="checkbox" name="checkbox" id="check-1" />
                    <label for="check-1"></label>
                  </div>
                </td>
                <td>
                  <div class="styled-checkbox">
                    <input type="checkbox" name="checkbox" id="check-1" />
                    <label for="check-1"></label>
                  </div>
                </td>
              </tr>
              <tr>
                <td>구매관리</td>
                <td>주문조회</td>
                <td>
                  <div class="styled-checkbox">
                    <input type="checkbox" name="checkbox" id="check-1" />
                    <label for="check-1"></label>
                  </div>
                </td>
                <td>
                  <div class="styled-checkbox">
                    <input type="checkbox" name="checkbox" id="check-1" />
                    <label for="check-1"></label>
                  </div>
                </td>
                <td>
                  <div class="styled-checkbox">
                    <input type="checkbox" name="checkbox" id="check-1" />
                    <label for="check-1"></label>
                  </div>
                </td>
                <td>
                  <div class="styled-checkbox">
                    <input type="checkbox" name="checkbox" id="check-1" />
                    <label for="check-1"></label>
                  </div>
                </td>
                <td>
                  <div class="styled-checkbox">
                    <input type="checkbox" name="checkbox" id="check-1" />
                    <label for="check-1"></label>
                  </div>
                </td>
              </tr>
              <tr>
                <td>구매관리</td>
                <td>주문조회</td>
                <td>
                  <div class="styled-checkbox">
                    <input type="checkbox" name="checkbox" id="check-1" />
                    <label for="check-1"></label>
                  </div>
                </td>
                <td>
                  <div class="styled-checkbox">
                    <input type="checkbox" name="checkbox" id="check-1" />
                    <label for="check-1"></label>
                  </div>
                </td>
                <td>
                  <div class="styled-checkbox">
                    <input type="checkbox" name="checkbox" id="check-1" />
                    <label for="check-1"></label>
                  </div>
                </td>
                <td>
                  <div class="styled-checkbox">
                    <input type="checkbox" name="checkbox" id="check-1" />
                    <label for="check-1"></label>
                  </div>
                </td>
                <td>
                  <div class="styled-checkbox">
                    <input type="checkbox" name="checkbox" id="check-1" />
                    <label for="check-1"></label>
                  </div>
                </td>
              </tr>
              <tr>
                <td>구매관리</td>
                <td>주문조회</td>
                <td>
                  <div class="styled-checkbox">
                    <input type="checkbox" name="checkbox" id="check-1" />
                    <label for="check-1"></label>
                  </div>
                </td>
                <td>
                  <div class="styled-checkbox">
                    <input type="checkbox" name="checkbox" id="check-1" />
                    <label for="check-1"></label>
                  </div>
                </td>
                <td>
                  <div class="styled-checkbox">
                    <input type="checkbox" name="checkbox" id="check-1" />
                    <label for="check-1"></label>
                  </div>
                </td>
                <td>
                  <div class="styled-checkbox">
                    <input type="checkbox" name="checkbox" id="check-1" />
                    <label for="check-1"></label>
                  </div>
                </td>
                <td>
                  <div class="styled-checkbox">
                    <input type="checkbox" name="checkbox" id="check-1" />
                    <label for="check-1"></label>
                  </div>
                </td>
              </tr>
              <tr>
                <td>구매관리</td>
                <td>주문조회</td>
                <td>
                  <div class="styled-checkbox">
                    <input type="checkbox" name="checkbox" id="check-1" />
                    <label for="check-1"></label>
                  </div>
                </td>
                <td>
                  <div class="styled-checkbox">
                    <input type="checkbox" name="checkbox" id="check-1" />
                    <label for="check-1"></label>
                  </div>
                </td>
                <td>
                  <div class="styled-checkbox">
                    <input type="checkbox" name="checkbox" id="check-1" />
                    <label for="check-1"></label>
                  </div>
                </td>
                <td>
                  <div class="styled-checkbox">
                    <input type="checkbox" name="checkbox" id="check-1" />
                    <label for="check-1"></label>
                  </div>
                </td>
                <td>
                  <div class="styled-checkbox">
                    <input type="checkbox" name="checkbox" id="check-1" />
                    <label for="check-1"></label>
                  </div>
                </td>
              </tr>
              <tr>
                <td>구매관리</td>
                <td>주문조회</td>
                <td>
                  <div class="styled-checkbox">
                    <input type="checkbox" name="checkbox" id="check-1" />
                    <label for="check-1"></label>
                  </div>
                </td>
                <td>
                  <div class="styled-checkbox">
                    <input type="checkbox" name="checkbox" id="check-1" />
                    <label for="check-1"></label>
                  </div>
                </td>
                <td>
                  <div class="styled-checkbox">
                    <input type="checkbox" name="checkbox" id="check-1" />
                    <label for="check-1"></label>
                  </div>
                </td>
                <td>
                  <div class="styled-checkbox">
                    <input type="checkbox" name="checkbox" id="check-1" />
                    <label for="check-1"></label>
                  </div>
                </td>
                <td>
                  <div class="styled-checkbox">
                    <input type="checkbox" name="checkbox" id="check-1" />
                    <label for="check-1"></label>
                  </div>
                </td>
              </tr>
              <tr>
                <td>구매관리</td>
                <td>주문조회</td>
                <td>
                  <div class="styled-checkbox">
                    <input type="checkbox" name="checkbox" id="check-1" />
                    <label for="check-1"></label>
                  </div>
                </td>
                <td>
                  <div class="styled-checkbox">
                    <input type="checkbox" name="checkbox" id="check-1" />
                    <label for="check-1"></label>
                  </div>
                </td>
                <td>
                  <div class="styled-checkbox">
                    <input type="checkbox" name="checkbox" id="check-1" />
                    <label for="check-1"></label>
                  </div>
                </td>
                <td>
                  <div class="styled-checkbox">
                    <input type="checkbox" name="checkbox" id="check-1" />
                    <label for="check-1"></label>
                  </div>
                </td>
                <td>
                  <div class="styled-checkbox">
                    <input type="checkbox" name="checkbox" id="check-1" />
                    <label for="check-1"></label>
                  </div>
                </td>
              </tr>
              <tr>
                <td>구매관리</td>
                <td>주문조회</td>
                <td>
                  <div class="styled-checkbox">
                    <input type="checkbox" name="checkbox" id="check-1" />
                    <label for="check-1"></label>
                  </div>
                </td>
                <td>
                  <div class="styled-checkbox">
                    <input type="checkbox" name="checkbox" id="check-1" />
                    <label for="check-1"></label>
                  </div>
                </td>
                <td>
                  <div class="styled-checkbox">
                    <input type="checkbox" name="checkbox" id="check-1" />
                    <label for="check-1"></label>
                  </div>
                </td>
                <td>
                  <div class="styled-checkbox">
                    <input type="checkbox" name="checkbox" id="check-1" />
                    <label for="check-1"></label>
                  </div>
                </td>
                <td>
                  <div class="styled-checkbox">
                    <input type="checkbox" name="checkbox" id="check-1" />
                    <label for="check-1"></label>
                  </div>
                </td>
              </tr>
              <tr>
                <td>구매관리</td>
                <td>주문조회</td>
                <td>
                  <div class="styled-checkbox">
                    <input type="checkbox" name="checkbox" id="check-1" />
                    <label for="check-1"></label>
                  </div>
                </td>
                <td>
                  <div class="styled-checkbox">
                    <input type="checkbox" name="checkbox" id="check-1" />
                    <label for="check-1"></label>
                  </div>
                </td>
                <td>
                  <div class="styled-checkbox">
                    <input type="checkbox" name="checkbox" id="check-1" />
                    <label for="check-1"></label>
                  </div>
                </td>
                <td>
                  <div class="styled-checkbox">
                    <input type="checkbox" name="checkbox" id="check-1" />
                    <label for="check-1"></label>
                  </div>
                </td>
                <td>
                  <div class="styled-checkbox">
                    <input type="checkbox" name="checkbox" id="check-1" />
                    <label for="check-1"></label>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pageHeader from "@/mixin/pageHeader";

export default {
  mixins: [pageHeader({ title: "그룹권한별 설정", groupName: "계정관리" })]
};
</script>

<style></style>
