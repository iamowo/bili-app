import http from ".";

// sort:0 点赞   1 时间
// type: 0视频   1 动态   2评论
export function getAllComment(id, uid, sort, type) {
  return http({
    method: "GET",
    url: `/comment/getAllComment/${id}/${uid}/${sort}/${type}`,
  });
}

export function addComment(data) {
  return http({
    method: "POST",
    url: "/comment/addComment",
    data: data,
  });
}

export function deleteComment(id, deletedid, type) {
  return http({
    method: "GET",
    url: `/comment/deleteComment/${id}/${deletedid}/${type}`,
  });
}

export function addLikeinfo(data) {
  return http({
    method: "POST",
    url: "/comment/addLikeinfo",
    data: data,
  });
}

export function deletelikeinfo(cid, uid) {
  return http({
    method: "GET",
    url: `/comment/deletelikeinfo/${cid}/${uid}`,
  });
}

export function getReplayComment(uid) {
  return http({
    method: "GET",
    url: `/comment/getReplayComment/${uid}`,
  });
}
