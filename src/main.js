import './style.css'
import Phaser from 'phaser'

const sizes = {
  width:500,
  height:500
}
const config = {
  type: Phaser.WEBGL,
  width:sizes.width,
  height:sizes.height,
  canvas:gamecanvas
}
const game = new Phaser.Game(config)