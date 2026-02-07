export function onVideoUpdate(player) {
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
}
