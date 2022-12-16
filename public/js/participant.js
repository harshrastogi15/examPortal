

function getParticipantsDetail() {
    fetch(`/user/sendDatatoAdmin`, {
        method: 'POST',
        headers: {
            'auth_token': `${localStorage.getItem('admintoken')}`
        }
    })
        .then((res) => res.json())
        .then((data) => {
            // console.log(data);
            if (data.status == 0) {
                // console.log(data);
                // alert("Question added successfully");
                displayparticpants(data.data)
            } else {
                alert("Error adding question");
                localStorage.removeItem('admintoken')
                window.location.href = '/admin'
            }
        })
        .catch((err) => {
            alert("Error adding question");
        });
}

getParticipantsDetail();


function displayparticpants(data){
    console.log(data)
    let html = `<table>
                <tr>
                    <th>S.No.</th>
                    <th>Application No.</th>
                    <th>Name</th>
                    <th>Category of Post</th>
                    <th>Post Applied for</th>
                    <th>Marks Obtained</th>
                    <th>Submission</th>
                </tr>`;
    for (let index = 0; index < data.length; index++) {

        html += `
                <tr>
                    <td>${index+1}</td>
                    <td>${data[index].applicationNo}</td>
                    <td>${data[index].name}</td>
                    <td>${data[index].program}</td>
                    <td>${data[index].stream}</td>
                    <td>${data[index].marks}</td>
                    <td><button onclick='window.location.href="/submitform?user=${data[index]._id}"'>show</button></td>
                </tr>
        `
    }

    html += `</table>`

    document.getElementById('participantsDatadesign').innerHTML = html
}