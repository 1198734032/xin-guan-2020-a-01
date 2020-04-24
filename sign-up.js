let submit = document.getElementById('submit');
let up_name = document.getElementById('up-name');
let up_phone = document.getElementById('up-phone')
let up_psw = document.getElementById('up-password');
let sex = document.getElementsByName('gender');
let usersex = "";

submit.addEventListener('click', _ => {
    let result = check();
    if (!result) { alert('Please check you imformation'); return }
    ajax({
        url: 'http://123.57.137.244:8085/register',
        data: {
            "name": up_name.value,
            "password": up_psw.value,
            "sex": usersex,
            "phone": up_phone.value,
        },
        success: function (msg) {
            alert("注册成功，即将跳转至登录页面");
            window.location.href="sign-in.html";
        },
        error: function (err) {
            alert(err)
        }
    })
})

function check() {
    let result = false;
    for (let i = 0; i < sex.length; i++) {
        if (sex[i].checked == true) {
            usersex = sex[i].value;
            break;
        }
    }
    if (up_name && !isNaN(up_phone.value) && up_phone.value.length == 11 && up_psw.value && usersex) result = true;
    return result
}


