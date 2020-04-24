function ajax({ url, method = "post", data, success, error }) {
    let xhr = null
    try {
        xhr = new XMLHttpRequest()
    } catch (error) {
        xhr = new ActiveXObject('Microsoft.XMLHTTP')
    }

    xhr.open(method, url, true)
    xhr.setRequestHeader("content-type", "application/json")
    xhr.send(JSON.stringify(data))
   
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                if (success) {
                    success(xhr.responseText);
                }
            } else {
                error("ERROE")
            }
        }
    }
}