
// ============================================================================================================
// RGBのスライダとテキストボックスの値を反映
// ============================================================================================================
function changeRange (type, color, point) {
    
    // elementの取得
    var range_element = document.getElementById('range-' + color + '-' + point);
    var text_element = document.getElementById('text-' + color + '-' + point);

    // typeによって書き込む方向を変える
    if (type === "range"){
        text_element.value = range_element.value;
    }else if (type === "text"){
        range_element.value = text_element.value;
    }else{
    }

    // BackgroundColorを変更
    changeBackgroundColor(point);
}

// ============================================================================================================
// BackgroundColorを変更
// ============================================================================================================
function changeBackgroundColor (point) {

    // rangeの値を取得する
    var r = parseInt(document.getElementById('range-r-' + point).value);
    var g = parseInt(document.getElementById('range-g-' + point).value);
    var b = parseInt(document.getElementById('range-b-' + point).value);

    // RGBを16進数に変換して結合する
    var hex = "#" + changeDecimalToHex(r) + changeDecimalToHex(g) + changeDecimalToHex(b);

    // BackgroundColorを変更とテキストボックスに変換した値を書き込む
    document.getElementById('color-' + point).style.backgroundColor = hex;
    document.getElementById('text-hex-' + point).value = hex;

}

// ============================================================================================================
// 10進数から16進数へ変換する
// ============================================================================================================
function changeDecimalToHex(num) {
    var hex = num.toString(16);
    if (num < 16){
        hex = "0" + hex;
    }
    return hex;
}

// ============================================================================================================
// 16進数から10進数へ変換する
// ============================================================================================================
    function changeHexToDecimal(num) {
    var decimal = parseInt(num, 16).toString(10);
    return decimal;
}

// ============================================================================================================
// HEXのテキストボックスの値を反映
// ============================================================================================================
function reflectHex (point){

    // HEXの値を取得してBackgroundColorを変更
    var hex = document.getElementById('text-hex-' + point).value;
    document.getElementById('color-' + point).style.backgroundColor = hex;

    // HEXの値を分解
    hex = hex.replace("#", "");
    var r = changeHexToDecimal(hex.substring(0, 2))
    var g = changeHexToDecimal(hex.substring(2, 4))
    var b = changeHexToDecimal(hex.substring(4))

    // rangeに値を反映
    document.getElementById('range-r-' + point).value = parseInt(r)
    document.getElementById('range-g-' + point).value = parseInt(g)
    document.getElementById('range-b-' + point).value = parseInt(b)

    // textに値を反映
    document.getElementById('text-r-' + point).value = parseInt(r)
    document.getElementById('text-g-' + point).value = parseInt(g)
    document.getElementById('text-b-' + point).value = parseInt(b)
}