/**
 * GLOBAL
 */

const KVA = 2;
const KVB = 2;
const KVC = 0.5;

const DT1 = 2.5;
const DT2 = 1.5;
const DT3 = 1;

function khuVuc1(kva, kvb, kvc) {
    var khuVuc = document.getElementById("khuVuc").value;
    var result;

    if (khuVuc == "A") {
        result = kva;
    } else if (khuVuc == "B") {
        result == kvb;
    } else if (khuVuc == "C") {
        result == kvc;
    } else if (khuVuc == "X") {
        result = 0;
    }
    return result;
}

function doiTuong1(dt1, dt2, dt3) {
    var doiTuong = document.getElementById("doiTuong").value * 1;
    var result;

    if (doiTuong == 1) {
        result = dt1;
    } else if (doiTuong == 2) {
        result = dt2;
    } else if (doiTuong == 3) {
        result = dt3;
    } else if (doiTuong == 0) {
        result = 0;
    }
    return result;
}

document.getElementById("btnResult").onclick = function () {
    var diemChuan = document.getElementById("diemChuan").value * 1;
    var khuVuc = khuVuc1(KVA, KVB, KVC);
    var doiTuong = doiTuong1(DT1, DT2, DT3);
    var number1 = document.getElementById("number1").value * 1;
    var number2 = document.getElementById("number2").value * 1;
    var number3 = document.getElementById("number3").value * 1;
    var sum = khuVuc + doiTuong + number1 + number2 + number3;
    var result = "";

    if (number1 === 0 || number2 === 0 || number3 === 0) {
        result += "Bạn đã rớt. Do có điểm bằng 0";
    } else if (sum >= diemChuan) {
        result += "<p>Bạn đã đậu. Tổng điểm: " + sum + " .</p>";
    } else if (sum < diemChuan) {
        result += "<p>Bạn đã rớt. Tổng điểm: " + sum + " .</p>";
    }

    document.getElementById("infoResult").innerHTML = result;
    document.getElementById("infoResult").classList.add("alert-success");
}

/**
 * GLOBAL
 */

const TIENKW1 = 500;
const TIENKW2 = 650;
const TIENKW3 = 850;
const TIENKW4 = 1100;
const TIENKW5 = 1300;

var resultKW1 = 0;
var resultKW2 = 0;
var resultKW3 = 0;
var resultKW4 = 0;
var resultKW5 = 0;

function tinhKW1(tienKW, soKW) {
    var result = tienKW * soKW;
    return result;
}

function tinhKW2(tienKW, soKW) {
    var result = tienKW * (soKW - 50);
    return result;
}

function tinhKW3(tienKW, soKW) {
    var result = tienKW * (soKW - 100);
    return result;
}

function tinhKW4(tienKW, soKW) {
    var result = tienKW * (soKW - 200);
    return result;
}

function tinhKW5(tienKW, soKW) {
    var result = tienKW * (soKW - 350);
    return result;
}

function tinhTienChiTiet(numKW, giaKW1, giaKW2, giaKW3, giaKW4, giaKW5) {
    var result = 0;
    if (numKW <= 50 && numKW > 0) {
        resultKW1 = tinhKW1(giaKW1, numKW);
        result = resultKW1;
    } else if (numKW <= 100 && numKW > 50) {
        resultKW1 = tinhKW1(giaKW1, 50);
        resultKW2 = tinhKW2(giaKW2, numKW);
        result = resultKW1 + resultKW2;
    } else if (numKW <= 200 && numKW > 100) {
        resultKW1 = tinhKW1(giaKW1, 50);
        resultKW2 = tinhKW2(giaKW2, 100);
        resultKW3 = tinhKW3(giaKW3, numKW);
        result = resultKW1 + resultKW2 + resultKW3;
    } else if (numKW <= 350 && numKW > 200) {
        resultKW1 = tinhKW1(giaKW1, 50);
        resultKW2 = tinhKW2(giaKW2, 100);
        resultKW3 = tinhKW3(giaKW3, 200);
        resultKW4 = tinhKW4(giaKW4, numKW);
        result = resultKW1 + resultKW2 + resultKW3 + resultKW4;
    } else if (numKW > 350) {
        resultKW1 = tinhKW1(giaKW1, 50);
        resultKW2 = tinhKW2(giaKW2, 100);
        resultKW3 = tinhKW3(giaKW3, 200);
        resultKW4 = tinhKW4(giaKW4, 350);
        resultKW5 = tinhKW5(giaKW5, numKW);
        result = resultKW1 + resultKW2 + resultKW3 + resultKW4 + resultKW5;
    } else {
        alert("Vui lòng nhập đúng số KW!")
    }
    return result;
}

document.getElementById("btnResult1").onclick = function () {
    var name = document.getElementById("name").value;
    var numKW = document.getElementById("numKW").value * 1;
    var sum = tinhTienChiTiet(numKW, TIENKW1, TIENKW2, TIENKW3, TIENKW4, TIENKW5);
    var result = "";

    // format VND
    var currentFormat = Intl.NumberFormat("VN-vn");

    result += "<p>Họ và tên: ";
    result += name;
    result += ". Tiền điện: ";
    result += currentFormat.format(sum);
    result += "VND.</p>";
    document.getElementById("infoResult1").innerHTML = result;
    document.getElementById("infoResult1").classList.add("alert-success");
}

/**
 * GLOBAL
 */

const TIENTHUE1 = 5 / 100;
const TIENTHUE2 = 10 / 100;
const TIENTHUE3 = 15 / 100;
const TIENTHUE4 = 20 / 100;
const TIENTHUE5 = 25 / 100;
const TIENTHUE6 = 30 / 100;
const TIENTHUE7 = 35 / 100;

var result1 = 0;
var result2 = 0;
var result3 = 0;
var result4 = 0;
var result5 = 0;
var result6 = 0;
var result7 = 0;

function tienThue(thuNhapChiuThue, giaThue) {
    var result = thuNhapChiuThue * giaThue;
    return result;
}

function tinhTienThueChiTiet(thuNhapChiuThue, giaThue1, giaThue2, giaThue3, giaThue4, giaThue5, giaThue6, giaThue7) {
    var result = 0;
    if (thuNhapChiuThue > 0 && thuNhapChiuThue <= 60000000) {
        result1 = tienThue(thuNhapChiuThue, giaThue1);
        result = result1;
    } else if (thuNhapChiuThue > 60000000 && thuNhapChiuThue <= 120000000) {
        result2 = tienThue(thuNhapChiuThue, giaThue2);
        result = result2;
    } else if (thuNhapChiuThue > 120000000 && thuNhapChiuThue <= 210000000) {
        result3 = tienThue(thuNhapChiuThue, giaThue3);
        result = result3;
    } else if (thuNhapChiuThue > 210000000 && thuNhapChiuThue <= 384000000) {
        result4 = tienThue(thuNhapChiuThue, giaThue4);
        result = result4;
    } else if (thuNhapChiuThue > 384000000 && thuNhapChiuThue <= 624000000) {
        result5 = tienThue(thuNhapChiuThue, giaThue5);
        result = result5;
    } else if (thuNhapChiuThue > 624000000 && thuNhapChiuThue <= 960000000) {
        result6 = tienThue(thuNhapChiuThue, giaThue6);
        result = result6;
    } else if (thuNhapChiuThue > 960000000) {
        result7 = tienThue(thuNhapChiuThue, giaThue7);
        result = result7;
    } else {
        alert("Vui lòng nhập đúng số tiền thu nhập!")
    }
    return result;
}

document.getElementById("btnResult2").onclick = function () {
    var name1 = document.getElementById("name1").value;
    var tongThu = document.getElementById("tongThu").value * 1;
    var soNguoi = document.getElementById("soNguoi").value * 1;
    var thuNhapChiuThue = tongThu - 4000000 - soNguoi * 1600000;
    var sum = 0;
    var result = "";

    sum = tinhTienThueChiTiet(thuNhapChiuThue, TIENTHUE1, TIENTHUE2, TIENTHUE3, TIENTHUE4, TIENTHUE5, TIENTHUE6, TIENTHUE7);

    // format VND
    var currentFormat = Intl.NumberFormat("VN-vn");

    result += "<p>Họ và tên: ";
    result += name1;
    result += ". Tiền thuế thu nhập có nhân: ";
    result += currentFormat.format(sum);
    result += "VND.</p>"

    document.getElementById("infoResult2").innerHTML = result;
    document.getElementById("infoResult2").classList.add("alert-success");
}

/**
 * GLOBAL
 */

const HOADONND = 4.5;
const DICHVUND = 20.5;
const CAOCAPND = 7.5;

const HOADONDN = 15;
const DICHVUDN = 75;
const CAOCAPDN = 50;

function tongTien(hoaDon, dichVu, caoCap, kenhCC) {
    var result = hoaDon + dichVu + caoCap * kenhCC;
    return result;
}

function tongTienDN(hoaDon, dichVu, caoCap, kenhCC, soKN) {
    var result = 0;
    if (soKN > 0 && soKN <= 10) {
        result = hoaDon + dichVu + caoCap * kenhCC;
    } else if (soKN > 10) {
        result = hoaDon + dichVu + 5 * (soKN - 10) + caoCap * kenhCC;
    } else {
        alert("Vui lòng nhập số kết nối!");
    }
    return result;
}

document.getElementById("btnResult3").onclick = function () {
    var customer = document.getElementById("customer").value;
    var maKH = document.getElementById("maKH").value * 1;
    var kenhCC = document.getElementById("kenhCC").value * 1;
    var soKN = document.getElementById("soKN").value * 1;
    var sum = 0;
    var result = "";

    switch (customer) {
        case "ND":
            sum = tongTien(HOADONND, DICHVUND, CAOCAPND, kenhCC);
            break;
        case "DN":
            sum = tongTienDN(HOADONDN, DICHVUDN, CAOCAPDN, kenhCC, soKN);
            break;
        default:
            break;
    }

    result += "<p>Mã khách hàng: ";
    result += maKH;
    result += ". Tiền cáp: ";
    result += sum;

    document.getElementById("infoResult3").innerHTML = result;
    document.getElementById("infoResult3").classList.add("alert-success");

}