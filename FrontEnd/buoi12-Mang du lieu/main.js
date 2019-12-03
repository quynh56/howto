
//in danh sach so chan nguoi dung nhap vao
//1,5,6,12,27,28
function InSoChan(){
    //khai bao
    var mangSo =[];// chua cac so nguoi dung nhap vao
    var mangSoChan =[];
    mangSo = LayDuLieu();

    //B2: chuyen chuoi thanh mang
   /* var chuoiSo = '';
    for(let i =0; i < daySo.length;i++){
        var phanTu = daySo[i];
        //CACH 1
        if(phanTu == ','){//neu khac ky tu dau phay
            mangSo.push(parseInt(chuoiSo));//them vao mang
        }else{
            chuoiSo +=phanTu;
        }
        //CACH 2
        if(phanTu != ','){
            chuoiSo += phanTu;
        }else{
            mangSo.push(parseInt(chuoiSo));
            chuoiSo = '';
        }
    }

    mangSo.push(parseInt(chuoiSo));
*/
//B3:Lay ra danh sach cac so chan
    for(i=0;i<mangSo.length; i++){
        if(mangSo[i] % 2 == 0){
            mangSoChan.push(mangSo[i]);
        }
    }


    //B4:In ket qua
    InKetQua(mangSoChan);
}
function InSoLe(){
var mangSo =[];
var mangSoLe =[];
mangSo = LayDuLieu();
for(let i = 0; i <mangSo.length; i++){
    if(mangSo[i]%2 !==0){
        mangSoLe.push(mangSo[i]);
    }
}
    InKetQua(mangSoLe);
}
function LayDuLieu(){
    var mangSo = [];
    //B1: Lay du lieu nguoi nhap vao
    var dayso = document.getElementById("textDaySo").value;

    //chuyen chuoi thanh mang
    mangSo =dayso.split(',');
    for(let i =0 ; i <mangSo.length; i++){
        mangSo[i] =parseInt(mangSo[i])
    }
    return mangSo;
}

function InKetQua(mangKetQua){
    var divHienThi = document.getElementById("divKetQua");
    divHienThi.innerHTML = mangKetQua;
    divHienThi.classList.remove("d-none");

}