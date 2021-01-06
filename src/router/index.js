import Vue from "vue";
import VueRouter from "vue-router";
import Container from "@/components/container/Container";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "adminInfo/User",
    name: "Home",
    component: Container,
    children: [
      {
        path: "adminInfo/user",
        name: "User",
        component: () => import("@/views/adminInfo/User"),
        meta: {
          title: "직원관리"
        }
      },
      {
        path: "/adminInfo/agency",
        name: "Agency",
        component: () => import("@/views/adminInfo/Agency"),
        meta: {
          title: "지역본부관리"
        }
      },
      {
        path: "/adminInfo/agencyView",
        name: "AgencyView",
        component: () => import("@/views/adminInfo/AgencyView"),
        meta: {
          title: "지역본부정보"
        }
      },
      {
        path: "/adminInfo/adminSetup",
        name: "AdminSetup",
        component: () => import("@/views/adminInfo/AdminSetup"),
        meta: {
          title: "그룹별권한설정"
        }
      },
      {
        path: "/adminInfo/adminSetupView",
        name: "AdminSetupView",
        component: () => import("@/views/adminInfo/AdminSetupView"),
        meta: {
          title: "그룹별권한설정정보"
        }
      },
      // ********************************************************
      // #region 홈페이지
      // ********************************************************
      {
        path: "/homepage/notice",
        name: "Notice",
        component: () => import("@/views/homepage/Notice"),
        meta: {
          title: "공지사항관리"
        }
      },
      {
        path: "/homepage/noticeInput",
        name: "NoticeInput",
        component: () => import("@/views/homepage/NoticeInput"),
        meta: {
          title: "공지사항등록"
        }
      },
      {
        path: "/homepage/newsletter",
        name: "Newsletter",
        component: () => import("@/views/homepage/Newsletter"),
        meta: {
          title: "뉴스레터관리"
        }
      },
      {
        path: "/homepage/newsletterInput",
        name: "NewsletterInput",
        component: () => import("@/views/homepage/NewsletterInput"),
        meta: {
          title: "뉴스레터등록"
        }
      },
      {
        path: "/homepage/board",
        name: "Board",
        component: () => import("@/views/homepage/Board"),
        meta: {
          title: "자료실"
        }
      },
      {
        path: "/homepage/boardInput",
        name: "BoardInput",
        component: () => import("@/views/homepage/BoardInput"),
        meta: {
          title: "자료실등록"
        }
      },
      {
        path: "/homepage/banner",
        name: "Banner",
        component: () => import("@/views/homepage/Banner"),
        meta: {
          title: "배너관리"
        }
      },
      {
        path: "/homepage/popup",
        name: "Popup",
        component: () => import("@/views/homepage/Popup"),
        meta: {
          title: "팝업관리"
        }
      },
      {
        path: "/homepage/mailing",
        name: "Mailing",
        component: () => import("@/views/homepage/Mailing"),
        meta: {
          title: "메일링신청자관리"
        }
      },
      {
        path: "/homepage/ambassador",
        name: "Ambassador",
        component: () => import("@/views/homepage/Ambassador"),
        meta: {
          title: "커뮤니티앰배서더관리"
        }
      },
      // ********************************************************
      // #region 회원관리
      // ********************************************************
      {
        path: "/memberInfo/personMember",
        name: "PersonMember",
        component: () => import("@/views/memberInfo/PersonMember"),
        meta: {
          title: "개인회원"
        }
      },
      {
        path: "/memberInfo/groupMember",
        name: "GroupMember",
        component: () => import("@/views/memberInfo/GroupMember"),
        meta: {
          title: "단체회원"
        }
      },
      // ********************************************************
      // #region 시험접수
      // ********************************************************
      {
        path: "/testApply/testMake",
        name: "TestMake",
        component: () => import("@/views/testApply/TestMake"),
        meta: {
          title: "시험생성"
        }
      },
      {
        path: "/testApply/testMakeViewPlan/:testCode",
        name: "TestMakeViewPlan",
        component: () => import("@/views/testApply/TestMakeViewPlan"),
        meta: {
          title: "정기시험보기"
        }
      },
      {
        path: "/testApply/personApply",
        name: "PersonApply",
        component: () => import("@/views/testApply/PersonApply"),
        meta: {
          title: "개인접수"
        }
      },
      {
        path: "/testApply/groupApply",
        name: "GroupApply",
        component: () => import("@/views/testApply/GroupApply"),
        meta: {
          title: "단체접수"
        }
      },
      {
        path: "/testApply/voucher",
        name: "Voucher",
        component: () => import("@/views/testApply/Voucher"),
        meta: {
          title: "바우처발행"
        }
      },
      {
        path: "/testApply/applyList",
        name: "ApplyList",
        component: () => import("@/views/testApply/ApplyList"),
        meta: {
          title: "접수현황"
        }
      },
      {
        path: "/testApply/testPlace",
        name: "TestPlace",
        component: () => import("@/views/testApply/TestPlace"),
        meta: {
          title: "고사장관리"
        }
      },
      // ********************************************************
      // #region 결제관리
      // ********************************************************
      {
        path: "/payInfo/payList",
        name: "PayList",
        component: () => import("@/views/payInfo/PayList"),
        meta: {
          title: "결제현황"
        }
      },
      {
        path: "/payInfo/refund",
        name: "Refund",
        component: () => import("@/views/payInfo/Refund"),
        meta: {
          title: "환불관리"
        }
      },
      // ********************************************************
      // #region 시험준비
      // ********************************************************
      {
        path: "/testReady/applicantList",
        name: "ApplicantList",
        component: () => import("@/views/testReady/ApplicantList"),
        meta: {
          title: "응시자명단"
        }
      },
      {
        path: "/testReady/seatInfo",
        name: "SeatInfo",
        component: () => import("@/views/testReady/SeatInfo"),
        meta: {
          title: "좌석배치도"
        }
      },
      {
        path: "/testReady/rollBook",
        name: "RollBook",
        component: () => import("@/views/testReady/RollBook"),
        meta: {
          title: "출석부"
        }
      },
      {
        path: "/testReady/ticketPrint",
        name: "TicketPrint",
        component: () => import("@/views/testReady/TicketPrint"),
        meta: {
          title: "수험표출력"
        }
      },
      {
        path: "/testReady/testItemAssign",
        name: "TestItemAssign",
        component: () => import("@/views/testReady/TestItemAssign"),
        meta: {
          title: "시험물품배정"
        }
      },
      // ********************************************************
      // #region 성적관리
      // ********************************************************
      {
        path: "/scores/scoresReg",
        name: "ScoresReg",
        component: () => import("@/views/scores/ScoresReg"),
        meta: {
          title: "시험결과등록"
        }
      },
      {
        path: "/scores/scoresStatistics",
        name: "ScoresStatistics",
        component: () => import("@/views/scores/ScoresStatistics"),
        meta: {
          title: "시험결과통계"
        }
      },
      {
        path: "/scores/scoresPrint",
        name: "ScoresPrint",
        component: () => import("@/views/scores/ScoresPrint"),
        meta: {
          title: "성적표인쇄"
        }
      },
      {
        path: "/scores/scoresReApply",
        name: "ScoresReApply",
        component: () => import("@/views/scores/ScoresReApply"),
        meta: {
          title: "성적표재발행신청"
        }
      },
      // ********************************************************
      // #region 영업관리
      // ********************************************************
      {
        path: "/sales/testApplyList",
        name: "TestApplyList",
        component: () => import("@/views/sales/TestApplyList"),
        meta: {
          title: "시험응시내역조회"
        }
      },
      {
        path: "/sales/commission",
        name: "Commission",
        component: () => import("@/views/sales/Commission"),
        meta: {
          title: "수수료정산"
        }
      },
      {
        path: "/sales/royalty",
        name: "Royalty",
        component: () => import("@/views/sales/Royalty"),
        meta: {
          title: "로열티정산"
        }
      },
      {
        path: "/sales/stockInfo",
        name: "StockInfo",
        component: () => import("@/views/sales/StockInfo"),
        meta: {
          title: "재고관리"
        }
      },
      {
        path: "/sales/salesInfo",
        name: "SalesInfo",
        component: () => import("@/views/sales/SalesInfo"),
        meta: {
          title: "판매관리"
        }
      },
      // ********************************************************
      // #region 상품관리
      // ********************************************************
      {
        path: "/product/testBook",
        name: "TestBook",
        component: () => import("@/views/product/TestBook"),
        meta: {
          title: "시험교재관리"
        }
      },
      {
        path: "/product/testContents",
        name: "TestContents",
        component: () => import("@/views/product/TestContents"),
        meta: {
          title: "콘텐츠관리"
        }
      },
      {
        path: "/product/testItem",
        name: "TestItem",
        component: () => import("@/views/product/TestItem"),
        meta: {
          title: "시험물품관리"
        }
      },
      // ********************************************************
      // #region  코드관리
      // ********************************************************
      {
        path: "/codeInfo/codeDetail",
        name: "CodeDetail",
        component: () => import("@/views/codeInfo/CodeDetail"),
        meta: {
          title: "코드상세관리"
        }
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
