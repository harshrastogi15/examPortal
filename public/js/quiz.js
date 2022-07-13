var tempanswer = "";

function logout() {
    localStorage.removeItem('token')
    window.location.href = '/'
}

function fetchUser() {
    fetch(`/user/access`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'auth_token': `${localStorage.getItem('token')}`
        }
    })
        .then((res) => res.json())
        .then((body) => {
            console.log(body);
            if (body.status === 0) {
                if(body.data.stream.length===0){
                    window.location.href = '/data'
                }
                console.log(body.data)
            } else {
                localStorage.removeItem('token')
                window.location.href = '/'
            }
        })
        .catch((error) => {
            localStorage.removeItem('token')
            window.location.href = '/'
        });
}

if (localStorage.getItem('token')) {
    fetchUser();
} else {
    window.location.href = '/'
}

const getquestion = () => {
    fetch(`/question/sendquestion`)
        .then((res) => res.json())
        .then((res) => {
            // console.log(res);
            if (res.status === 0) {
                displayquestion(res.data);
            }
        })
        .catch()
}
getquestion();

const displayquestion = (data) => {
    console.log(data);
    var html = ``;
    for (i in data) {
        var idxnew = (Number)(i) + 1;
        html += `
        <div class="mcq" id="${i}">
                <h3>${idxnew}</h3>
                <h1>${data[i].question}</h1>
                <ul>`

        for (j in data[i].choice) {
            // console.log(i);
            var idxoption = (Number)(j) + 1;
            html += `<li id="${data[i].id}_option${j}" onclick="setAnswer('${data[i].id}','${j}','${data[i].choice[j]}')"><span> ${idxoption} </span> ${data[i].choice[j]}</li>`
        }
        html += `</ul>
                <div class="answer"></div>
                <div class="submitbutton">
                    <button type="submit" onclick="sendanswer(${data[i].id})"> Submit </button>
                </div>
                <div class="differentquestion">`

        if (i > 0) {
            var idx = (Number)(i) - 1;
            html += `<button type="submit" onclick="previous(${idx},${data.length})"> Previous </button>`
        } else {
            html += `<button type="submit" disabled> Previous </button>`
        }

        if (i < data.length - 1) {
            var idx = (Number)(i) + 1;
            html += `<button type="submit" onclick="next(${idx},${data.length})" > Next </button>`
        } else {
            html += `<button type="submit" disabled> Next </button>`
        }
        html += `</div></div>`
    }
    document.getElementById('quizdisplay').innerHTML = html;
    previous(0, data.length);
}


function setAnswer(id, i, answer) {
    // console.log(i);
    // console.log(answer)
    tempanswer = answer;

    for (let index = 0; index < 4; index++) {
        var value = document.getElementById(`${id}_option${index}`);
        value.style.background = 'white';
    }
    var value = document.getElementById(`${id}_option${i}`);
    value.style.background = 'rgb(144, 188, 133)';
}

function previous(i, sz) {
    tempanswer = "";
    console.log(i);
    for (let index = 0; index < sz; index++) {
        var value = document.getElementById(`${index}`);
        value.style.display = 'none'
    }
    var value = document.getElementById(`${i}`);
    value.style.display = 'block'
}

function next(i, sz) {
    tempanswer = "";
    console.log(i);
    for (let index = 0; index < sz; index++) {
        var value = document.getElementById(`${index}`);
        value.style.display = 'none'
    }
    var value = document.getElementById(`${i}`);
    value.style.display = 'block'
}
