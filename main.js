document.getElementById('sb').addEventListener('click',fun1)

function fun1(){
    var a = document.getElementById('sname').value
    var b = parseInt(document.getElementById('pm').value)
    var c = parseInt(document.getElementById('cm').value)
    var d = parseInt(document.getElementById('mm').value)
    var e = parseInt(((b+c+d)/300)*100) 
    console.log(e)
    document.getElementById('mydata').innerHTML += `
    <td>${a}</td>
    <td>${b}</td>
    <td>${c}</td>
    <td>${d}</td>
    <td>${parseInt(b+c+d)}</td>
    <td>${e}</td>
    <td>
        ${calgrade(e)}
    </td>`
}

function calgrade(e){
    
    console.log(e)
    if(e>90 && e<100) {
        return `A`
        console.log('A')
    }
    else if(e>80 && e<90){
        return `B`
        console.log('B')
    }
    else if(e>70 && e<80){
        return 'C'
        console.log('C')
    }
    else if(e>60 && e<70){
        return `D`
        console.log('D')
    }
    else if(e>60 && e<50){
        return `E`
        console.log('E')
    }
    else if(e>50 && e<40){
        return `P`
        console.log('P')
    }
    else{
        return `Fail` 
    }
}
