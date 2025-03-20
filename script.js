function chonPhieu(so) {
    const phieu = {
        1: "Vòng cổ",
        2: "Gương",
        3: "Túi sách",
        4: "Kẹo",
        5: "Chúc bé may mắn lần sau!"
    };

    let ketQuaDiv = document.getElementById("ketQua");
    ketQuaDiv.innerText = "Bạn nhận được: " + phieu[so];
    ketQuaDiv.style.transform = "scale(1.2)";
    setTimeout(() => {
        ketQuaDiv.style.transform = "scale(1)";
    }, 500);
}