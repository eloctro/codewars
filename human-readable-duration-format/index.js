function formatDuration(sec) {
  let time = "";
  let seconds = sec % 60;
  let minutes = Math.floor((sec / 60) % 60);
  let hours = Math.floor((sec / 60 / 60) % 24);
  let days = Math.floor((sec / 60 / 60 / 24) % 365);
  let years = Math.floor(sec / 60 / 60 / 24 / 365);

  if (sec === 0) {
    return "now";
  }

  if (years === 1) {
    time += `${years} year`;
  } else if (years > 1) {
    time += `${years} years`;
  }

  if ((years > 0) & (days > 0)) {
    if (!hours & !minutes & !seconds) {
      time += " and ";
    } else {
      time += ", ";
    }
  }

  if (days === 1) {
    time += `${days} day`;
  } else if (days > 1) {
    time += `${days} days`;
  }

  if ((days > 0) & (hours > 0) || (hours > 0) & (years > 0)) {
    if (!minutes & !seconds) {
      time += " and ";
    } else {
      time += ", ";
    }
  }

  if (hours === 1) {
    time += `${hours} hour`;
  } else if (hours > 1) {
    time += `${hours} hours`;
  }
  console.log(hours, minutes);
  if (
    (minutes > 0) & (hours > 0) ||
    (minutes > 0) & (days > 0) ||
    (minutes > 0) & (years > 0)
  ) {
    console.log(hours, minutes);
    if (!seconds) {
      time += " and ";
    } else {
      time += ", ";
    }
  }

  if (minutes === 1) {
    time += `${minutes} minute`;
  } else if (minutes > 1) {
    time += `${minutes} minutes`;
  }

  if (seconds && (years || days || hours || minutes)) {
    time += " and ";
  }

  if (seconds === 0) {
  } else if (seconds === 1) {
    time += `${seconds} second`;
  } else if (seconds > 1) {
    time += `${seconds} seconds`;
  }
  return time;
}

console.log(formatDuration(36060));
