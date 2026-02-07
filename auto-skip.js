export default new class AutoSkip {
  name = "AutoSkip"

  onVideoLoad(player) {
    this.player = player
  }

  onVideoTime(time) {
    if (!this.player) return

    try {
      const skips = this.player?.skips
      if (!skips) return

      if (skips.intro && time >= skips.intro.start && time <= skips.intro.end) {
        this.player.seek(skips.intro.end + 0.1)
      }

      if (skips.outro && time >= skips.outro.start && time <= skips.outro.end) {
        this.player.seek(skips.outro.end + 0.1)
      }
    } catch {}
  }

  test() {
    return true
  }
}()
