// var / let = memungkinkan kita untuk mengubah isi
// const = setelah diisi, tidak boleh diisi/diganti 

function validateForm() {
    const nama = document.forms['message-form']['nama-input'].value
    const angka = 11

    if (nama == "") {
        document.getElementById('error-name').innerHTML = "Nama Tidak Boleh Kosong!"
        return false
    }

    setName(nama)
    return false
}

function setName(name) {
    document.getElementById("name").innerHTML = name;
    document.getElementById("error-name").innerHTML = "";
}    