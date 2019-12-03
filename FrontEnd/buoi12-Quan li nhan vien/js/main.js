//B1:Lay du lieu
//B2:Kiem tra thong tin nhap
//B3:Tao doi tuong thong tin
//B4:Luu vao mang
//B5:Tao table in danh sach nhan vien


//khai bao bien
var array=[];
var errorObj = {
    emptyLastName: 'Vui long nhap ho!',
    emptyFirstName: 'Vui long nhap ten!',
    emptyId: 'Vui long nhap ma nhan vien!',
    positionErr: 'Vui long chon chuc vu'
};
function getElm(elm){
    return document.getElementById(elm);
}

//Gan su kien cho button them moi
getElm('btnThemNhanVien').addEventListener('click', function () {
    var isValid =false //Bien kiem tra neu co gia tri khong nhap thi se tra ve true
    var lastName =getElm('ho').value;
    if(validateEmpty(lastName, 'tb-ho', errorObj.emptyLastName)){
        isValid =true;
    }
    var firstName =getElm('ten').value;
    if(validateEmpty(firstName, 'tb-ten', errorObj.emptyFirstName)){isValid =true;}
    var id =getElm('msnv').value;
    if(validateEmpty(id, 'tb-msnv', errorObj.emptyId)){isValid =true;}
    var date =getElm('datepicker').value;
    var positionInput =getElm('chucvu'); //ve xem lai phan nay
    var position =positionInput.value;
    if(validateEmpty(position, 'tb-chucvu', errorObj.positionErr)){
        isValid =true;
    }
    if(!isValid){//neu gia tri laf false thi moi luu vao mang, nguoc lai khong luu
        //luu thong tin vao doi tuong
        var fullName = lastName + ' ' + firstName;
        var employee = {
            id: id,
            fullName: fullName,
            datetime: date,
            position: position
        };
        //luu vao mang
        array.push(employee);
        createTable(array);
    }
});
function createTable(array){
    var tbody =getElm('tbody'); //DOM toi th tbody
    tbody.innerHTML = ''; //xoa thanh rong de khong bi lap lai nhung thang truoc
    for(var i=0; i< array.length; i++){
        createRow(tbody, array[i]);
    }//render tung thang trong mang
    addDeleteEvent();
 }
 function createRow(tbody, employee){
    var tr =document.createElement('tr'); //tao ra the tr
     tr.classList.add('text-white');
     tbody.appendChild(tr);//them cac the tr vao the tbody

     var td =document.createElement('td');// tao the td
     td.innerHTML = employee.id; // gan noi dung cho the td
     tr.appendChild(td); //them cac the td vao the tr

     td = document.createElement('td');
     td.innerHTML = employee.fullName;
     tr.appendChild(td);

     td= document.createElement('td');
     td.innerHTML =employee.position;
     tr.appendChild(td);

     td=document.createElement('td');
     td.innerHTML =employee.datetime;
     tr.appendChild(td);

     td=document.createElement('td');
     var chuoi = "<button data-id=" + employee.id +" class='btn btn-sm btn-info mr-2 btnSua' id='btnSua'>Sua</button>";
     chuoi += "<button data-id=" +employee.id +" class='btn btn-sm btn-danger btnXoa' id='btnXoa'>Xoa</button>";
     td.innerHTML = chuoi;
     tr.appendChild(td);
 }


 //kiem tra du lieu nhap vao bi rong
function validateEmpty(field, errorId, message){
    if(field.trim().length === 0){ //string.trim():dùng để xóa tất cả những khoảng trắng ở đầu và cuối chuỗi
        getElm(errorId).innerHTML = message;
        return true;
    }else{
        getElm(errorId).innerHTML = '';
        return false;
    }
}
function validateSelected(field, errorId, message){
    if(field.trim().length === 0){
        getElm(errorId).innerHTML =message;
        return true;
    }else{
        getElm(errorId).innerHTML = '';
        return false;
    }

}
function addDeleteEvent(){
    //lay ra all nhung button xoa
    var arrayElm = document.getElementsByClassName('btnXoa');
    var i;
    for(i= 0; i <arrayElm.length ; i++){
        arrayElm[i].addEventListener("click", function(){
            var thisEle = this; //lay ra button dang click
            //kiem tra employee co id = data-id cua button
            for(var index = 0; index < array.length; i++){
                console.log(thisEle.getAttribute('data-id'))
                if(array[index].id === thisEle.getAttribute('data-id')){
                    array.splice(index, 1) //xoa
                    createTable(array); //load lai bang
                }
            }
        })
    }
}
