import http from ".";

const baseurl = "/banner";

export function getBanner() {
  return http({
    method: "GET",
    url: baseurl + "/getBanner",
  });
}
