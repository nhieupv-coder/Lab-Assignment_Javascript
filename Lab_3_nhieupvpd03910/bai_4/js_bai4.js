// JavaScript source code
var a = null,b = null;
var o = null;
function lam_lai() {
    return a = null,b=null,c=null ;
}
function toan_tu(x) {
    o = x;
}
function toan_hang(x) {
    if (a == null) {
        a = x;
    }
    else {
        b = x;
    }
}
var kq = null;
function thuc_hien() {
    switch (o) {
        case '+':
            var kq = a + b;
            alert(a + " + " + b + " = " + kq);
            break;
        case '-':
            var kq = a - b;
            alert(a + "-" + b + "=" + kq);
            break;
        case 'x':
            var kq = a * b;
            alert(a + "x" + b + "=" + kq);
            break;
        case ':':
            var kq = a / b;
            alert(a + ":" + b + "=" + kq);
            break;
        default:
            alert(o + "Không phải là toán tử nhé");
    }
    lam_lai();
}
 

