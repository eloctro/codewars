var Ball = function (ballType) {
    this.ballType = ballType || 'regular';
};

ball1 = new Ball();
ball2 = new Ball("super");


console.log(ball1.ballType);

console.log(ball2.ballType);
