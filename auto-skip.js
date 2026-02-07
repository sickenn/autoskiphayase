export function onVideoUpdate() {
  try {
    const buttons = document.querySelectorAll("button");

    for (const btn of buttons) {
      const text = (btn.innerText || "").toLowerCase();

      if (
        text.includes("skip intro") ||
        text.includes("skip outro") ||
        text.includes("skip opening") ||
        text.includes("skip ending")
      ) {
        btn.click();
      }
    }
  } catch {}
}
