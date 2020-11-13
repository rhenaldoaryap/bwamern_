export default (number) => {
  const formatNumbering = new Intl.NumberFormat("id-ID");
  return formatNumbering.format(number);
};

// bisa menggunakan react number format untuk project besar, tetapi karena ini project kecil maka cukup menggunakan
// API bawaan dari browser yaitu Intl.NumberFormat("id-ID"). id-ID ini bisa diganti dengan negara yang diinginkan
