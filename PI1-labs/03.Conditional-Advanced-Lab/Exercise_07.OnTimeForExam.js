/* 7. On Time for the Exam Monica has an upcoming exam. According to the rules, she will be on time for the exam if she is there exactly when it starts or up to half an hour before/after the start time. If she arrives 30 minutes before/after the start, she will be too early/late respectively. Write a program, which reads the time the exam starts and the time Monica arrived. Print whether she arrived on time, too early, or late and also print how many hours:minutes before or after the start time she arrived 

Input The input consists of 4 lines: 
●  The hour the exam starts – an integer in the range [0 ...23] 
●  The minute the exam starts – an integer in the range [0 …59] 
●  The hour Monica arrived – an integer in the range [0 ...23] 
●  The minute Monica arrived – an integer in the range [0 …59] 

Output On the first line print:
 ●  “Late”, if Monica arrived more than 30 minutes after the exam started 
 ●  “On time”, if Monica arrived exactly on time or up to 30 minutes before/after the start time.
  ●  “Early”, if Monica arrived more than 30 minutes before the exam start. If she arrived with at least a minute of difference of from the start time, print the following on the next line: 
  ●  “mm minutes before the start” if she is less than an hour early.
   ●  “hh:mm hours before the start” if she arrived more than an hour early.  
   ●   “mm minutes after the start” if she is less than an hour late.
    ●  “hh:mm hours after the start” if she is more than an hour late.  
    The minutes should always be printed with a leading zero. 

    in: 9 30 9 50 
    out: On time 
         20 minutes after the start
*/

function main(examHour, examMin, monHour, monMin) {
	let totalMinExam = examHour * 60 + examMin;
	let totalMinMon = monHour * 60 + monMin;
	let timeDifference = totalMinExam - totalMinMon;
	// if totalMinExam == totalMinMon; dif = 0 on itme
	// if totalMinExam > totalMinMon; dif >0 early
	// if totalMinExam < totalMinMon; dif <0 late
	if (timeDifference > 0) {
		//early
		if (timeDifference > 30) {
			//super early
			console.log("Early");
			if (Math.floor(timeDifference / 60) > 0) {
				let hours = Math.floor(timeDifference / 60);
				let minutes = timeDifference % 60;
				if (minutes < 10) {
					console.log(`${hours}:0${minutes} hours before the start`);
				} else {
					console.log(`${hours}:${minutes} hours before the start`);
				}
			} else {
				if (timeDifference < 10) {
					console.log(`0${timeDifference} minutes before the start`);
				} else {
					console.log(`${timeDifference} minutes before the start`);
				}
			}
		} else {
			console.log("On time");
			if (timeDifference < 10) {
				console.log(`0${timeDifference} minutes before the start`);
			} else {
				console.log(`${timeDifference} minutes before the start`);
			}
		}
	} else if (timeDifference < 0) {
		//late
		timeDifference = Math.abs(timeDifference);
		if (timeDifference > 30) {
			//super early
			console.log("Late");
			if (Math.floor(timeDifference / 60) > 0) {
				let hours = Math.floor(timeDifference / 60);
				let minutes = timeDifference % 60;
				if (minutes < 10) {
					console.log(`${hours}:0${minutes} hours after the start`);
				} else {
					console.log(`${hours}:${minutes} hours after the start`);
				}
			} else {
				if (timeDifference < 10) {
					console.log(`0${timeDifference} minutes after the start`);
				} else {
					console.log(`${timeDifference} minutes after the start`);
				}
			}
		} else {
			console.log("On time");
			if (timeDifference < 10) {
				console.log(`0${timeDifference} minutes after the start`);
			} else {
				console.log(`${timeDifference} minutes after the start`);
			}
		}
	} else {
		console.log("On time");
	}
}

//main(9, 30, 9, 50);
main(9, 0, 10, 30);
