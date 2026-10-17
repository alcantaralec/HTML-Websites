
var shipImage = new Image();
shipImage.src = "Nave.png";

function Ship() {
  this.x = 0;
  this.y = 0;
  this.width = 50;
  this.height = 40;
  this.rotation = 0;
  this.showFlame = false;
}

Ship.prototype.draw = function (context) {
  context.save();

  // Move to the spaceship's position
  context.translate(this.x, this.y);

  // Rotate the spaceship and flame
  context.rotate(this.rotation);

  // Draw the flame behind the spaceship
  if (this.showFlame) {
    context.beginPath();
    context.moveTo(-7.5, -5);
    context.lineTo(-15, 0);
    context.lineTo(-7.5, 5);

    context.lineWidth = 1;
    context.strokeStyle = "#ff4141";
    context.stroke();
  }

  // Draw the spaceship image centered on its position
  if (shipImage.complete && shipImage.naturalWidth > 0) {
    context.drawImage(
      shipImage,
      -this.width / 2,
      -this.height / 2,
      this.width,
      this.height
    );
  }

  context.restore();
};
