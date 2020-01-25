function tugas22() {
    var kalimat = "Saya ingin belajar bersama";
    console.log(kalimat);
    var array = kalimat.split(" ");
    console.log(array);
    array.forEach(function (item, index, array) {
    console.log("Item : ", item, "Index ke ", index);
    })
}
tugas22();