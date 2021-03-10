let browser = prompt("x: ")
switch (browser)
{
    case "edge" :
        alert("bạn đang dùng  trình duyệt Edge");
        break;
    case "chrome":
    case "fire fox":
    case "safari":
    case "opera":
        alert("chúng tôi hỗ trợ trình duyệt này");
        break;
    default:
        alert("chúng tôi hi vọng trang này trông cũng ổn");
}

let a = prompt("a?", "");

    switch (a){
        case "0":
            alert(0);
            break;
        case "1":
            alert(1);
            break;
        case "2":
        case "3":
            alert("2,3");
            break;
        default:
            console.log(1)
            break;
    }

