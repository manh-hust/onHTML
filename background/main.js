function con(callback) {
    setTimeout(function(){
        console.log('Day la ham truoc')
        callback();
    },2000)
}
function chau() {
    setTimeout(function(){
        console.log('Day la ham sau')
    },1000)
}
con(chau)

setTimeout(function() {
    
},0)
console.log('Good!')