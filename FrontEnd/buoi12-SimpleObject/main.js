//tao doi tuong namecard
var nameCard={
    name:'Nguyen Van Teo',
    job:'lap trinh vien',
    image:'../img/img01.jpg',
    studentCount: 234,
    linkCount: 123
};
nameCard.courseCount = 1000; // co the them vao
//lay ra button
var btnTheoDoi = document.getElementById("btnTheoDoi");
//gan su kien cho button
btnTheoDoi.addEventListener("click", function () {
    document.getElementById("tenGiangVien").innerHTML = nameCard.name;
    document.getElementById("ngheNghiep").innerHTML = nameCard.job;
    document.getElementById("soHocVien").innerHTML =nameCard.studentCount;
    document.getElementById("soLuotThich").innerHTML = nameCard.linkCount;
    document.getElementById("soKhoaHoc").innerHTML = nameCard.courseCount;
    document.getElementById("avatar").setAttribute('src', nameCard.image);
    //console.log(document.getElementById("avatar").getAttribute('src'));
});