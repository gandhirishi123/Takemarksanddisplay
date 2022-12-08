document.getElementById('sb').addEventListener('click',fun1)

function fun1(){
    var a = document.getElementById('sname').value
    var b = parseINT(document.getElementById('pm').value)
    var c = parseINT(document.getElementById('cm').value)
    var d = parseINT(document.getElementById('mm').value)
    var e =`${b+c+d}` 
    console.log(e);
    document.getElementById('mydata').innerHTML += `
    <td>${a}</td>
    <td>${b}</td>
    <td>${c}</td>
    <td>${d}</td>
    <td>${parseINT(b+c+d)}</td>
    <td>${parseINT(((b+c+d)/300)*100)}</td>`
}
