/**
 * Bài tập 1: Quản lý tuyển sinh
 * Viết chương trình nhập điểm chuẩn của hội đồng, điểm 3 môn thi của thí sinh, khu vực(nhập X nếu k thuộc khu vực ưu tiên) và đối tượng dự thi (nhập 0 nếu k thuộc khu vực ưu tiên). Cho biết thí sinh đó đậu hay rớt và tổng số điểm đạt được
 */
const KHUVUCA = "khuVucA";
const KHUVUCB = "khuVucB";
const KHUVUCC = "khuVucC";
function luaChonKhuVuc(khuVuc) {
  switch (khuVuc) {
    case KHUVUCA: {
      return 2;
    }
    case KHUVUCB: {
      return 1;
    }
    case KHUVUCC: {
      return 0.5;
    }
  }
}

document.getElementById("btnKetQua").onclick = function () {
  let nhapDiemMon1 = document.getElementById("nhapDiemMon1").value * 1;
  let nhapDiemMon2 = document.getElementById("nhapDiemMon2").value * 1;
  let nhapDiemMon3 = document.getElementById("nhapDiemMon3").value * 1;
  let nhapDiemChuan = document.getElementById("nhapDiemChuan").value * 1;
  let chonDoiTuong = document.getElementById("chonDoiTuong");
  let chonKhuVuc = document.querySelector("input[name='selector']:checked");
  if (chonKhuVuc == null) {
    alert("Bạn đã rớt");
    return;
  }
  let khuVuc = chonKhuVuc.value;
  let clickKhuVuc = luaChonKhuVuc(khuVuc);
  let tongDiem = 0;
  tongDiem = nhapDiemMon1 + nhapDiemMon2 + nhapDiemMon3;
  if (chonDoiTuong.value == 1) {
    tongDiem += 2.5 + clickKhuVuc;
  } else if (chonDoiTuong.value == 2) {
    tongDiem += 1.5 + clickKhuVuc;
  } else if (chonDoiTuong.value == 3) {
    tongDiem += 1 + clickKhuVuc;
  } else {
    tongDiem += 0;
    console.log("Bạn đã rớt");
  }
  // console.log(tongDiem);
  let xetDiem = "";
  if (tongDiem >= nhapDiemChuan) {
    xetDiem = "Bạn đã đậu";
  } else {
    xetDiem = "Bạn đã rớt";
  }

  let result = `
    <div class="alert alert-primary p-1">
      <span>Thông báo: ${xetDiem}</span>
      <span>Tổng điểm: ${tongDiem}</span>
    </div>
  `;
  document.getElementById("ketQua1").innerHTML = result;
};

/**
 * Bài tập 2: Tính tiền điện
 * Viết chương trình nhập vào thông tin tiêu thụ điện(Tên, số kw)
 * Tính và trả tiền theo quy tắc
 *   50kw đầu : 500d/kw
 *   50kw kế : 650d/kw
 *   100kw kế :850d/kw
 *   150kw kế : 1100d/kw
 *  Còn lại : 1300d/kw
 */

document.querySelector(".btn-danger").onclick = function () {
  let hoTen = document.getElementById("hoTen").value;
  let soKw = document.getElementById("soKw").value * 1;
  let tienDien = 0;
  if (0 < soKw && soKw <= 50) {
    tienDien = soKw * 500;
  } else if (soKw <= 100) {
    tienDien = 50 * 500 + (soKw - 50) * 650;
  } else if (soKw <= 200) {
    tienDien = 50 * 500 + 50 * 650 + (soKw - 100) * 850;
  } else if (soKw <= 350) {
    tienDien = 50 * 500 + 50 * 650 + 100 * 850 + (soKw - 200) * 1100;
  } else {
    tienDien =
      50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKw - 350) * 1300;
  }
  let tienTe = tienDien.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  let result = `
    <div class="alert alert-danger p-1">  
      <p>Họ tên: ${hoTen}</p>
      <p>Tiền điện: ${tienTe}</p>
    </div>
  `;
  document.getElementById("ketQua2").innerHTML = result;
};

/**
 * Bài tập tính tiền thuế thu nhập cá nhân
 */
document.querySelector(".btn-success").onclick = function () {
  //input
  let nhapHoTen = document.getElementById("nhapHoTen").value;
  let tongThuNhap = document.getElementById("tongThuNhap").value * 1;
  let soNguoi = document.getElementById("soNguoi").value * 1;

  // xử lý
  // thuNhapChiuThue = tongThuNhap - 4e+6 - soNguoi* 1600000;
  // thu nhap dua tren theo chiu thue so voi phan tram suat
  // tienThue = thuNhapChiuThue * thueSuat;
  let thueSuat = 0;
  if (tongThuNhap <= 60e6) {
    thueSuat = 0.05;
  } else if (60e6 < tongThuNhap && tongThuNhap <= 120e6) {
    thueSuat = 0.1;
  } else if (120e6 < tongThuNhap && tongThuNhap <= 210e6) {
    thueSuat = 0.15;
  } else if (210e6 < tongThuNhap && tongThuNhap <= 384e6) {
    thueSuat = 0.2;
  } else if (384e6 < tongThuNhap && tongThuNhap <= 624e6) {
    thueSuat = 0.25;
  } else if (624e6 < tongThuNhap && tongThuNhap <= 960e6) {
    thueSuat = 0.3;
  } else {
    thueSuat = 0.35;
  }

  let thuNhapChiuThue = 0;
  thuNhapChiuThue = tongThuNhap - 4e6 - soNguoi * 1600000;
  let thueThuNhapCaNhan = 0;
  thueThuNhapCaNhan = thuNhapChiuThue * thueSuat;
  let doiTienTe = thueThuNhapCaNhan.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  let result = `
    <div class = "alert alert-success p-1">
      <span>Họ tên: ${nhapHoTen};</span>
      <span>Tiền thuế thu nhập cá nhân: ${doiTienTe}</span>
    </div>
  `;
  document.getElementById("ketQua3").innerHTML = result;
};

/**
 * Bài tập tính tiền cáp
 */
function myFunction() {
  document.getElementById("demo").innerHTML = `
  <div>
    <label for="" class="form-label">Sự kết nối</label>
    <input
          type="number"
          class="form-control"
          name=""
          id="soKetNoi"
          aria-describedby="helpId"
          placeholder="Số kết nối"
        />
  </div>
  `;
}

document.querySelector(".btn-dark").onclick = function () {
  //input
  let chonKhachHang = document.getElementById("chonKhachHang");
  let nhapMaKH = document.getElementById("nhapMaKH").value;
  let soKenh = document.getElementById("soKenh").value * 1;
  let soKetNoi = document.getElementById("soKetNoi").value * 1;
  // xử lý
  let element = myFunction();
  // ng dan
  // phi xu lý hoa don 4.5
  // phi dich vu co ban 20.5
  // thue kenh 7.5/kenh
  let phiXuLyHoaDon1 = 4.5;
  let phiDichVu1 = 20.5;
  let phiThue1Kenh1 = 7.5;
  let phiXuLyHoaDon2 = 15;
  let phiThue1Kenh2 = 50;
  let phiDichVu2 = 7.5;
  let tienCap = 0;
  let phiDichVuThem = 5;
  if (chonKhachHang.value == 1) {
    tienCap = soKenh * phiThue1Kenh1 + phiXuLyHoaDon1 + phiDichVu1;
  } else if (chonKhachHang.value == 2) {
    if (soKetNoi <= 10) {
      tienCap = soKenh * phiThue1Kenh2 + phiXuLyHoaDon2 + phiDichVu2 * soKetNoi;
    } else {
      tienCap =
        soKenh * phiThue1Kenh2 +
        phiXuLyHoaDon2 +
        (phiDichVu2 * 10 + (soKetNoi - 10) * phiDichVuThem);
    }
  }
  // doanh nghiep
  // phi xu lý hoa don 15
  // phi dich vu co ban  75 chi tong 10 ket noi, ket noi thu 11 12 => 5/kenh
  // thue kenh 50/kenh

  // console.log(tienCap2);
  let tienCapPhaiTra = tienCap.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
  let result = `
  <div class="alert alert-dark text-white p-2">
    <span>Mã khách hàng: ${nhapMaKH}</span>
    <span>Tiền cáp: ${tienCapPhaiTra}</span>
  </div>
  `;
  document.getElementById("ketQua4").innerHTML = result;
};
