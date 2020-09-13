const request = new XMLHttpRequest();
request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
        const reponse = request.responseText;
        const json = JSON.parse(reponse); // 把一個JSON字串轉換成 JavaScript的數值或是物件
        const users = json.data;
        const body = document.querySelector('body');
        for (var i = 0; i < users.length; i++) {
            const div = document.createElement('div');
            div.className = "box";
            div.innerHTML = `<p>${users[i].first_name} ${users[i].last_name}</p>
            <img src="${users[i].avatar}" alt="${users[i].first_name} ${users[i].last_name}">`;
            body.appendChild(div);
        }
    } else {
        console.log('err');
    }
}
request.onerror = function () {
    console.log('error');
};
request.open('GET', 'https://reqres.in/api/users', true);
request.send();