// Task 1
// let block = document.querySelector('.block');
// let area = document.querySelector('.area');

// window.onkeydown = function (e) {
//     console.log(e.keyCode);
//     console.log(e.code);
//     console.log(e.key);

//     if ((e.keyCode == 69 || e.keyCode == 107) && (e.ctrlKey)) {
//         e.preventDefault();
//         if ((e.keyCode == 69)) {
//             if (area.style.display != 'block') {
//                 area.style.display = "block";
//                 block.style.display = 'none';
//                 area.value = block.textContent;
//             }
//         } else if (area.style.display == 'block') {
//             area.style.display = "none";
//             block.style.display = 'block';
//             block.innerText = area.value;
//         }
//     }
// }

// Task 3

let move = 0;
document.querySelector('.block3').onmousemove = function () {
    console.log(move);
    let div = document.querySelector('.block2');
    div.style.width = 300 + move + 'px';
    move++;
}

