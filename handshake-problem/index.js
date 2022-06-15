function getParticipants(handshakes) {
  let count = 1;
  while (handshakes > 0) {
    handshakes -= count++;
  }
  return count;
}

let arr = [];

arr.push(getParticipants(0));
arr.push(getParticipants(1));
arr.push(getParticipants(3));
arr.push(getParticipants(6));
arr.push(getParticipants(7));
arr.push(getParticipants(11));
arr.push(getParticipants(16));

console.log(arr);
