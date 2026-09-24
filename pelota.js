function Pelota () {
  this.x = 0;
  this.y = 0;
  this.color = "#ffff00";
  this.scaleX = 1;
  this.scaleY = 1;
  this.rotation = 0; 
  this.pelota = new Image();
  this.pelota.src = "Tie Fighter.png";
  this.radius = 75;
}

Pelota.prototype.draw = function (context) {
  context.save();
  context.translate(this.x, this.y);
  context.rotate(this.rotation);
  context.scale(this.scaleX, this.scaleY);
 
  context.drawImage(this.pelota,-this.radius, -this.radius, this.radius * 2, this.radius * 2);
 
  context.restore();
};