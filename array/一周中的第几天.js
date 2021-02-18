function getWeek(y, m, d) {
    const startWeek = 1;
    if (m < 3) {
      m += 12;
      --y;
    }
    return (d + startWeek + 2 * m + Math.floor(3 * (m + 1) / 5) + y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400)) % 7;
  }
  var dayOfTheWeek = function(day, month, year) {
    const aWeekTxt = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    return aWeekTxt[getWeek(year, month, day)];
  };
  var dayOfTheWeek = function(day = 31 , month = 8, year = 2019) {
      // 1971年1月1日为星期五
	let res = ["Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"]
    // 后续算时间需要减掉1天，故置为-1
	let days = -1
	for (let i = 1971; i < year; i++) {
		if (isLeapYear(i)) {
			days += 366
		} else {
			days += 365
		}
	}

	for( let  i = 1; i < month; i++ ){
		switch (i) {
            case 2:
                if (isLeapYear(year)) {
                    days += 29
                } else {
                    days += 28
                }
            break;    
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                days += 31
            break;  
            default:
                days += 30
            break;  
		}
	}

	days += day


	return res[days % 7]
}

function isLeapYear(year )  {
	if (year % 400 == 0) {
		return true
	}
	if (year % 4 == 0 && year % 100 != 0) {
		return true
	}
	return false
}
dayOfTheWeek()
  