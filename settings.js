// Keep tuning separate from game behaviour so features can be developed independently.
window.COIN_DASH = {
  width: 800,
  height: 500,
  roundSeconds: 45,
  playerSpeed: 240,
  droneSpeed: 105,
  droneCount: 3,
  colors: { background: 0x101c31, grid: 0x24334b, gridAlpha: 0.45, panel: 0x0a1120, text: '#ffffff',
    player: 0x71e8ce, coin: 0xffd166, drone: 0xff657a },
  // Dark theme, toggled with T.
  darkColors: { background: 0x050506, grid: 0x1c1c1f, gridAlpha: 0.3, panel: 0x1a1a1d, text: '#d9d9de',
    player: 0x5fd4bb, coin: 0xf2c14e, drone: 0xf0566b }
};
