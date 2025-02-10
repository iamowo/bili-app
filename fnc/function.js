export function tothisvideo(vid, uid) {
  uni.navigateTo({
    url: `/pages/video/video?vid=${vid}&uid=${uid}`,
  });
}

export function goback(e) {
  uni.navigateBack({ delta: 1 });
}

export function tothispage(path, type) {
  if (type === 0) {
    uni.navigateTo({
      url: "/pages" + path,
    });
  } else if (type === 1) {
    uni.redirectTo({
      url: "/pages" + path,
    });
  }
}
