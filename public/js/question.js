var qType = document.getElementById("question_type");

document.getElementById("question_img").style.display = "none";
document.getElementById("question_txt").style.display = "none";

qType.addEventListener("change", function () {
  if (qType.value == "txt") {
    document.getElementById("question_img").style.display = "none";
    document.getElementById("question_txt").style.display = "block";
  } else if (qType.value == "img") {
    document.getElementById("question_txt").style.display = "none";
    document.getElementById("question_img").style.display = "block";
  }
});

document.forms("question_txt").addEventListener("submit", function (e) {
  e.preventDefault();
  fetch(e.target.action, {
    method: e.target.method,
    body: new FormData(e.target),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.status == 0) {
        alert("Question added successfully");
        window.location.href = "/question";
      } else {
        alert("Error adding question");
      }
    })
    .catch((err) => {
      alert("Error adding question");
    });
});

document.forms("question_img").addEventListener("submit", function (e) {
  e.preventDefault();
  fetch(e.target.action, {
    method: e.target.method,
    body: new FormData(e.target),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.status == 0) {
        alert("Question added successfully");
        window.location.href = "/question";
      } else {
        alert("Error adding question");
      }
    })
    .catch((err) => {
      alert("Error adding question");
    });
});
