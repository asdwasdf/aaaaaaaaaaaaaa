export const checkPassword = (matKhau) => {
  // Kiểm tra xem mật khẩu có ít nhất một chữ cái viết hoa
  if (!/[A-Z]/.test(matKhau)) {
    return false;
  }

  // Kiểm tra xem mật khẩu có ít nhất một chữ cái viết thường
  if (!/[a-z]/.test(matKhau)) {
    return false;
  }

  // Kiểm tra xem mật khẩu có ít nhất một chữ số
  if (!/[0-9]/.test(matKhau)) {
    return false;
  }

  // Kiểm tra xem mật khẩu có ký tự đặc biệt (vd: @, #, $, etc.)
  if (!/[!@#$%^&*.]/.test(matKhau)) {
    return false;
  }

  // Nếu mật khẩu thỏa mãn tất cả các điều kiện, trả về true
  return true;
};
export function kiemTraEmail(email) {
  // Sử dụng biểu thức chính quy để kiểm tra địa chỉ email
  const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return pattern.test(email);
}
export function kiemTraDiaChi(chuoi) {
  // Sử dụng biểu thức chính quy để kiểm tra chuỗi
  const pattern = /^[a-zA-Z0-9\-]+$/;
  return pattern.test(chuoi);
}
export function kiemTraKhongChuaSo(chuoi) {
  // Sử dụng biểu thức chính quy để kiểm tra chuỗi
  const pattern = /^[^0-9]+$/;
  return pattern.test(chuoi);
}

export function kiemTraKyTuDacBiet(chuoi) {
  // Sử dụng biểu thức chính quy để kiểm tra chuỗi
  const pattern = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\|]/;
  return pattern.test(chuoi);
}
export function kiemTraChuoiChiChuaChuCai(chuoi) {
  // Sử dụng biểu thức chính quy để kiểm tra chuỗi
  const pattern = /^[a-zA-Z]+$/;
  return pattern.test(chuoi);
}
export function kiemTraSoDienThoai(chuoi) {
  // Sử dụng biểu thức chính quy để kiểm tra chuỗi
  const pattern = /^[0-9]+$/;
  return pattern.test(chuoi);
}
