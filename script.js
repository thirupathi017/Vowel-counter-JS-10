const text=document.getElementById("text");
const cntBtn=document.getElementById("cnt-btn");
const result=document.getElementById("result");

cntBtn.addEventListener("click",()=>{
    if (text.value===''){
        alert("Please enter some text");
    }
    else{
        const vowels="AEIOUaeiou";
        let count=0;
        for(let i=0;i<text.value.length;i++){
            for(let j=0;j<vowels.length;j++){
                if(text.value[i]===vowels[j]){
                    count++;
                }
            }
        }
        result.textContent=`Total Vowels : ${count}`;
    }
})