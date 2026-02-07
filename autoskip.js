export default {
  name: "Auto Skip Intro/Outro",
  version: "1.0.0",
  description: "Automatically skips intro and outro when available.",
  author: "sicken",

  onLoad() {
    this.interval = setInterval(() => {
      try {
        const buttons = document.querySelectorAll("button");

        buttons.forEach(btn => {
          const text = btn.innerText?.toLowerCase() || "";

          if (
            text.includes("skip intro") ||
            text.includes("skip outro") ||
            text.includes("skip opening") ||
            text.includes("skip ending")
          ) {
            btn.click();
          }
        });
      } catch {}
    }, 500);
  },

  onUnload() {
    if (this.interval) clearInterval(this.interval);
  }
};
