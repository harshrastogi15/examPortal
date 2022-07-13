var timer;




var compareDate = new Date('July 16, 2022, 21:30:00');
// compareDate.setDate(compareDate.getDate() + 1); //just for this demo today + 7 days

const getDate =()=>{
    fetch('/time/timing')
    .then((res)=>res.json())
    .then((res)=>{
        compareDate = new Date(res.date);
    })
    .catch()
}
getDate()

timer = setInterval(function() {
    getDate();
  timeBetweenDates(compareDate);
}, 1000);

function timeBetweenDates(toDate) {
  var dateEntered = toDate;
  var now = new Date();
  if(dateEntered < now){
    console.log('FINISH')
  }
  // console.log(dateEntered)
//   getDate();
  var difference = dateEntered.getTime() - now.getTime();

  if (difference <= 0) {

    // Timer done
    clearInterval(timer);
  
  } else {
    
    var seconds = Math.floor(difference / 1000);    
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);
    var days = Math.floor(hours / 24);

    hours %= 3;
    minutes %=60;
    seconds %= 60;

    $("#days").text(days);
    $("#hours").text(hours);
    $("#minutes").text(minutes);
    $("#seconds").text(seconds);
    // if(#days)
  }
}