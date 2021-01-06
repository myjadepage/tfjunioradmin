<template>
  <div class="default-sidebar">
    <nav
      class="side-navbar box-scroll sidebar-scroll"
      :class="{ shrinked: isShrinked }"
    >
      <ul class="list-unstyled" id="pageMove">
        <li>
          <a
            href="#dropdown-adminInfo"
            aria-expanded="false"
            data-toggle="collapse"
            ><i class="la la-leaf"></i><span>계정 관리</span></a
          >
          <SidebarMenu
            id="dropdown-adminInfo"
            :items="items.adminInfo"
          ></SidebarMenu>
        </li>
        <li>
          <a
            href="#dropdown-homepage"
            aria-expanded="false"
            data-toggle="collapse"
            ><i class="la la-shopping-cart"></i><span>홈페이지 관리</span></a
          >
          <SidebarMenu
            id="dropdown-homepage"
            :items="items.homepage"
          ></SidebarMenu>
        </li>
        <li>
          <a
            href="#dropdown-memberInfo"
            aria-expanded="false"
            data-toggle="collapse"
            ><i class="la la-calculator"></i><span>회원 관리</span></a
          >
          <SidebarMenu
            id="dropdown-memberInfo"
            :items="items.memberInfo"
          ></SidebarMenu>
        </li>
        <li>
          <a
            href="#dropdown-testApply"
            aria-expanded="false"
            data-toggle="collapse"
            ><i class="la la-bus"></i><span>시험 접수</span></a
          >
          <SidebarMenu
            id="dropdown-testApply"
            :items="items.testApply"
          ></SidebarMenu>
        </li>
        <li>
          <a
            href="#dropdown-payInfo"
            aria-expanded="false"
            data-toggle="collapse"
            ><i class="la la-cubes"></i><span>결제 관리</span></a
          >
          <SidebarMenu
            id="dropdown-payInfo"
            :items="items.payInfo"
          ></SidebarMenu>
        </li>
        <li>
          <a
            href="#dropdown-testReady"
            aria-expanded="false"
            data-toggle="collapse"
            ><i class="la la-book"></i><span>시험 준비</span></a
          >
          <SidebarMenu
            id="dropdown-testReady"
            :items="items.testReady"
          ></SidebarMenu>
        </li>
        <li>
          <a
            href="#dropdown-scores"
            aria-expanded="false"
            data-toggle="collapse"
            ><i class="la la-edit"></i><span>성적 관리</span></a
          >
          <SidebarMenu id="dropdown-scores" :items="items.scores"></SidebarMenu>
        </li>
        <li>
          <a href="#dropdown-sales" aria-expanded="false" data-toggle="collapse"
            ><i class="la la-file-text"></i><span>영업 관리</span></a
          >
          <SidebarMenu id="dropdown-sales" :items="items.sales"></SidebarMenu>
        </li>
        <li>
          <a
            href="#dropdown-product"
            aria-expanded="false"
            data-toggle="collapse"
            ><i class="la la-users"></i><span>상품 관리</span></a
          >
          <SidebarMenu
            id="dropdown-product"
            :items="items.product"
          ></SidebarMenu>
        </li>
        <li>
          <a
            href="#dropdown-codeInfo"
            aria-expanded="false"
            data-toggle="collapse"
            ><i class="la la-signal"></i><span>코드 관리</span></a
          >
          <SidebarMenu
            id="dropdown-codeInfo"
            :items="items.codeInfo"
          ></SidebarMenu>
        </li>
      </ul>
      <ul class="side-bottom-info">
        <li style="">
          <p>34</p>
          <span>결제확인</span>
        </li>
        <li style="">
          <p>34</p>
          <span>신규접구</span>
        </li>
        <li style="">
          <p>34</p>
          <span>교재주문</span>
        </li>
        <li style="">
          <p>34</p>
          <span>콘텐츠주문</span>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import $ from "jquery";
import SidebarMenu from "./sidebar/SidebarMenu";

export default {
  components: {
    SidebarMenu
  },
  name: "SideBar",
  data: function() {
    return {
      type: "",
      open: false,
      items: {
        adminInfo: [
          { title: "직원 관리", path: "/adminInfo/user" },
          { title: "지역본부 관리", path: "/adminInfo/agency" },
          { title: "그룹별권한 설정", path: "/adminInfo/adminSetup" }
        ],
        homepage: [
          { title: "공지사항 관리", path: "/homepage/notice" },
          { title: "뉴스레터 관리", path: "/homepage/newsletter" },
          { title: "자료실", path: "/homepage/board" },
          { title: "배너 관리", path: "/homepage/banner" },
          { title: "팝업 관리", path: "/homepage/popup" },
          { title: "메일링 신청자 관리", path: "/homepage/mailing" },
          { title: "커뮤니티 앰배서더 관리", path: "/homepage/ambassador" }
        ],
        memberInfo: [
          { title: "개인 회원", path: "/memberInfo/personMember" },
          { title: "단체 회원", path: "/memberInfo/groupMember" }
        ],
        testApply: [
          { title: "시험 생성", path: "/testApply/testMake" },
          { title: "개인 접수", path: "/testApply/personApply" },
          { title: "단체 접수", path: "/testApply/groupApply" },
          { title: "바우처(쿠폰) 발행", path: "/testApply/voucher" },
          { title: "접수 현황", path: "/testApply/applyList" },
          { title: "고사장 관리", path: "/testApply/testPlace" }
        ],
        payInfo: [
          { title: "결제 현황", path: "/payInfo/payList" },
          { title: "환불 관리", path: "/payInfo/refund" }
        ],
        testReady: [
          { title: "응시자 명단(부착용)", path: "/testReady/applicantList" },
          { title: "좌석 배치도(부착용)", path: "/testReady/seatInfo" },
          { title: "출석부(감독관용)", path: "/testReady/rollBook" },
          { title: "수험표 출력", path: "/testReady/ticketPrint" },
          { title: "시험 물품 배정", path: "/testReady/testItemAssign" }
        ],
        scores: [
          { title: "시험결과 등록", path: "/scores/scoresReg" },
          { title: "시험결과 통계", path: "/scores/scoresStatistics" },
          { title: "성적표 인쇄", path: "/scores/scoresPrint" },
          { title: "성적표 재발행 신청", path: "/scores/scoresReApply" }
        ],
        sales: [
          { title: "시험응시내역 조회", path: "/sales/testApplyList" },
          { title: "수수료 정산", path: "/sales/commission" },
          { title: "로열티 정산", path: "/sales/royalty" },
          { title: "재고 관리(시험물품)", path: "/sales/stockInfo" },
          { title: "판매 관리(시험교재/콘텐츠)", path: "/sales/salesInfo" }
        ],
        product: [
          { title: "시험교재 관리", path: "/product/testBook" },
          { title: "콘텐츠 관리", path: "/product/testContents" },
          { title: "시험물품 관리", path: "/product/testItem" }
        ],
        codeInfo: [{ title: "코드상세 관리", path: "/codeInfo/codeDetail" }]
      }
    };
  },
  mounted() {
    this.makeScroll();
    this.makeCollapse();
  },
  computed: {
    isShrinked() {
      return this.$store.state.isSideOpen;
    }
    // currentPage () {
    //   console.log(this.$route.path)
    //   return this.$route.path
    // }
  },
  methods: {
    toggle(id) {
      this.type = id;
    },
    // scroll
    makeScroll() {
      $(".sidebar-scroll").niceScroll({
        cursorcolor: "transparent",
        cursorborder: "transparent",
        cursoropacitymax: 0,
        boxzoom: false,
        autohidemode: "hidden",
        cursorfixedheight: 80
      });
    },
    // collapse
    makeCollapse() {
      $(".side-navbar li a").click(function() {
        $(".collapse").collapse("hide");
      });
    }
  }
};
</script>

<style></style>
