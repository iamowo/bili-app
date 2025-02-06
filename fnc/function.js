export function tothisvideo(e) {
  const vid = parseInt(e.target.dataset.vid || e.target.parentNode.dataset.vid)
  uni.navigateTo({
    url: `/pages/video/video?vid=${vid}`
  })
}

export function goback(e) {
  uni.navigateBack({ delta: 1 })
}

