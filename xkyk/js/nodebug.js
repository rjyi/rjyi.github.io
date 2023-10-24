document.oncontextmenu = function () {
    // alert('右键被禁用');
    return false;
}
document.onkeydown = function () {
    var e = window.event || arguments[0];
    if (e.keyCode === 123) {
        //alert("F12被禁用");
        return false;
    } else if ((e.ctrlKey) && (e.keyCode === 83)) {
        //alert("ctrl+s被禁用");
        return false;
    } else if ((e.ctrlKey) && (e.keyCode === 85)) {
        //alert("ctrl+u被禁用");
        return false;
    } else if ((e.ctrlKey) && (e.shiftKey) && (e.keyCode === 73)) {
        //alert('禁止Ctrl+Shift+I');
        return false;
    }
}