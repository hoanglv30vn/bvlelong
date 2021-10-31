const btnMenu = document.getElementById('btn__menu')
const modal = document.querySelector('.modal-popup')
const modalMenu = document.querySelector('.modal-popup-menu')

const modalCloseMenu = document.querySelector('.js-modal-close-menu')

function menuShow() {
    modalMenu.classList.add('modal-show')
}

function menuClose() {
    modalMenu.classList.remove('modal-show')
}
// btnLogin.addEventListener('click', showModalLogin)
modalCloseMenu.addEventListener('click', menuClose)
btnMenu.onclick = function() {
    menuShow()
};

butt_hinhanh = document.getElementById("butt_hinhanh")
butt_thongbao = document.getElementById("butt_thongbao")
butt_dichvu = document.getElementById("butt_dichvu")
butt_gioithieu = document.getElementById("butt_gioithieu")
butt_tuyendung = document.getElementById("butt_tuyendung")
main_lelong = document.getElementById("main_lelong")

function main_gioithieu() {
    main_lelong.innerHTML = main_lelong_butt_gioithieu_html
    menuClose()
}

function main_thongbao() {
    main_lelong.innerHTML = main_lelong_butt_thongbao_html
    menuClose()
}

function main_tuyendung() {
    main_lelong.innerHTML = main_lelong_butt_tuyendung_html
    menuClose()
}

function main_hinhanh() {
    main_lelong.innerHTML = main_lelong_butt_hinhanh_html
    menuClose()
}

function main_dichvu() {
    main_lelong.innerHTML = main_lelong_butt_dichvu_html
    menuClose()
}