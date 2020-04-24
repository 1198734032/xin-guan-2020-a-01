let in_name=document.getElementById("in-name");
let in_psw=document.getElementById("in-password");
let submit=document.getElementById("submit");

submit.addEventListener("click",_=> {
    if(!in_psw.value||!in_name.value) alert("请完善信息");
    ajax({
        url:"http://123.57.137.244:8085/login",
        method:"post",
        data:{
            name:in_name.value,
            password:in_psw.value,
        },
        success:function(data){
            let users = JSON.parse(data).code;
            if(users===200) alert("登陆成功");
            else alert("密码错误或未注册")
        },
        error:function(err){
            console.log(err)
        }
    })
})