// class Valid {
//     isValid = false;
//     password = document.querySelector('.password-error')
//     constructor(e, p) {
//         this.email = e
//         this.password = p
//         this.isValid = this.validate();
//     }
//     validate() {
//         if (this.password.length <= 6) {
//             return false
//         } else {
//             return true;
//         }
//     }
// }

// let v = new Valid(this.email, this.password);
// document.querySelector('.password-error').innerHTML = v.isValid;


document.querySelector('button').onclick = function () {
    let e = document.querySelector('input[type="password"]');
    console.log(e)
    if (e.length <= 6) {
        return console.log(false)
    } else {
        return console.log(true);
    }
}