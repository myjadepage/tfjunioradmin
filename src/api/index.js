import axios from "axios";

axios.defaults.baseURL = "http://192.168.232.51:8080/toefladmin";

export function getAdminUser() {
  return axios.get("/api/admuser/find");
}

export function findAdminUser(params) {
  console.log(params);
  return axios.get("/api/admuser/find/search", {
    params
  });
}

export function getAgency() {
  return axios.get("/api/agentList/find/search");
}

export function getGroupAuth() {
  return axios.get("/api/groupauthList/find");
}

export function findGroupAuth(params) {
  return axios.get("/api/groupauthList/find/search", {
    params
  });
}

// 홈페이지 관리
// 1.공지사항
export function getNotice() {
  return axios.get("/api/find");
}

//2. 배너관리
export function getBanner() {
  return axios.get("/api/bannerList/find/search");
}
// 3. 앰배서더 관리
export function getEm() {
  return axios.get("/api/CommunityEmList/find/search");
}

// 회원관리
// 1. 개인회원
export function getMember() {
  return axios.get("/api/MemberList/find/search");
}

export function getGroupMember() {
  return axios.get("/api/GmemberList/find");
}

// 시험접수
//1. 시험생성
export function getTestMakeList() {
  return axios.get("/api/testmakeList/find");
}

//2. 시험유형, 회차 조회
export function getTestType() {
  return axios.get("/api/testmakeList/find/search");
}
