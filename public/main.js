
console.log('老王你好')

/*获取css的函数 */
getcss.onclick=()=>{
    const request=new XMLHttpRequest()
    request.open('GET','/style.css')
    
    request.onload=()=>{
        console.log('请求成功')
        const style=document.createElement('style')
        style.innerHTML=request.response;
        document.body.appendChild(style);
    };
    
    request.onerror=()=>{
        console.log('请求失败')
    }
    
    request.send()
}

getjs.onclick=()=>{
    const request=new XMLHttpRequest();
    request.open('GET','/2.js')

    request.onload=()=>{
        console.log('请求js成功')
        let script=document.createElement('script')
        script.innerHTML=request.response
        document.body.appendChild(script)
    };
    request.onerror=()=>{
        console.log('请求j失败')
    }

    request.send()
}


gethtml.onclick=()=>{
    const request=new XMLHttpRequest();
    request.open('GET','/No2.html');
    request.send();
    request.onreadystatechange=()=>{
        if(request.readyState===4){
            console.log('请求成功')
            if(request.status>=200&&request.status<300){
                const div=document.createElement('div')
                div.innerHTML=request.response;
                document.body.appendChild(div)
            }else{
                alert('加载失败')
            }
        }

    }


    
}
/*onclick会被挂载到getxml上，如果触发点击事件，则会被调用，因为不用传参数，可以忽略小括号。 */
getxml.onclick=()=>{
    const request=new XMLHttpRequest();
    request.open('GET','/3.xml');
    request.send();
    request.onreadystatechange=()=>{     //相当于getxml.onclick,当事件触发时就会触发；
        if(request.readyState===4&&request.status===200){
            console.log(request.responseXML)
        }
        }   
    }


getjson.onclick=()=>{
    const request=new XMLHttpRequest();
    request.open('GET','/4.json');
    request.send();
    request.onreadystatechange=()=>{
        if(request.readyState===4&&request.status===200){
            console.log(request.response)
            let obj=JSON.parse(request.response)
            console.log(obj)
        }
    }
}

let pagelist=document.querySelector('#page')
let n=1
getnextpage.onclick=()=>{
  
    const request=new XMLHttpRequest();
    request.onreadystatechange=()=>{
        if(request.readyState===4&&request.status===200){
            let string=request.response;
            let dom=document.createElement('div')
            dom.innerHTML=string
            pagelist.appendChild(dom)
        }
    }
    request.open('GET',`/page${n+1}.json`);
    request.send();
    n+=1;
}