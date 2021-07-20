var a = document.getElementById('getting')

function calc(num) {
        a.value += num

}
function result() {
    a.value=eval(a.value)
    
}
function  reset() {
    a.value=""
    
}