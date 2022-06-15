function launchAll(launchMissile) {
  for (var i = 0; i < 5; i++) {
    setTimeout(function (i) {
      launchMissile(i);
      console.log();
    }, i * 2000, i);
  }
}

function lau(num) {
  console.log(num);
}

launchAll(lau);
