fetch('https://cataas.com/cat')
.then((respone) => {
    if(!respone.ok){
        throw new Error('Your response was not ok');
    }
    return respone.blob();
})
.then((myBlob) =>{
    let myImage = document.createElement('img');
    myImage.src= URL.createObjectURL(myBlob);
    document.querySelector('body').appendChild(myImage);
    console.log('success');
})
.catch((error)=>{
    console.error('there has been a problem whith your fetch operation',error);
})


//zd2 nieskonczoosc kotow
document.getElementById('btn2').onclick=function(){
    fetch('https://cataas.com/cat')
    .then((respone) => {
        if(!respone.ok){
            throw new Error('Your response was not ok');
        }
        return respone.blob();
    })
    .then((myBlob) =>{
        let myImage = document.createElement('img');
        myImage.src= URL.createObjectURL(myBlob);
        document.querySelector('body').appendChild(myImage);
        console.log('success');
    })
    .catch((error)=>{
        console.error('there has been a problem whith your fetch operation',error);
    })
}
//zd3 zamiast inner html div

function zadanie3(){
    fetch('https://cataas.com/cat')
    .then((respone) => {
        if(!respone.ok){
            throw new Error('Your response was not ok');
        }
        return respone.blob();
    })
    .then((myBlob) =>{
        let image = document.querySelector('img#zdj');
        image.src='https://cataas.com/cat'.src=URL.createObjectURL(myBlob);
    })
    .catch((error)=>{
        console.error('there has been a problem whith your fetch operation', error);
    })
    
}


//zd4 kot przycisk
document.getElementById('btn4').onclick = function(){
    fetch('https://cataas.com/cat')
    .then((respone) => {
        if(!respone.ok){
            throw new Error('Your response was not ok');
        }
        return respone.blob();
    })
    .then((myBlob) =>{
        let image = document.querySelector('img#zdj');
        image.src='https://cataas.com/cat'.src=URL.createObjectURL(myBlob);
    })
    .catch((error)=>{
        console.error('there has been a problem whith your fetch operation', error);
    })
    
}


//zd5 
