export const toggleFullscreen = async (element) => {
  if (!element || typeof document === "undefined") return;

  if (document.fullscreenElement === element) {
    if (document.exitFullscreen) {
      await document.exitFullscreen();
    }
    return;
  }

  if (element.requestFullscreen) {
    await element.requestFullscreen();
  }
};
