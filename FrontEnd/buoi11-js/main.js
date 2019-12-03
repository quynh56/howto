
function XepLoaiHocLuc(){
    var xepLoai ;
    var Ly =document.getElementById("diemLy").value;
    var Toan = document.getElementById("diemToan").value;
    var Hoa =document.getElementById("diemHoa").value;
    Ly =parseInt(Ly);
    Toan =parseInt(Toan);
    Hoa =parseInt(Hoa);
    diemTB =(Toan*2 +Ly+Hoa) / 4;
    console.log(diemTB);
    if(diemTB < 4){
        xepLoai = " khong xep loai";
    }else if(diemTB >=4 && diemTB <= 4.9){
        xepLoai ="yeu";
    }
    else if(diemTB >=5 && diemTB <= 5.4){
        xepLoai ="Trung binh yeu";
    }
    else if(diemTB >=5.5 && diemTB <= 6.4){
        xepLoai ="Trung binh";
    }
    else if(diemTB >=6.5 && diemTB <= 6.9){
        xepLoai ="Trung binh kha";
    }
    else if(diemTB >=7 && diemTB <= 7.9){
        xepLoai ="kha";
    }
    else if(diemTB >=8 && diemTB <= 4.4){
        xepLoai ="kha gioi";
    }
    else if(diemTB >=8.4){
        xepLoai =" gioi";
    }
    document.getElementById("XepLoai").innerText =xepLoai;
}