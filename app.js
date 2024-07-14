let empty = {};
let noempty = {
    ชื่อ: 'ไม่ว่างนะจ๊ะ',
};

function isEmpty(xxx) {
  return Object.keys(xxx).length === 0;
}
console.log(`ตัวแปร empty = {} ใช้ function isEmpty(empty) จะได้ค่า ${isEmpty(empty)}`)
console.log(`ตัวแปร noempty = { ชื่อ: 'ไม่ว่างนะจ๊ะ', } ใช้ function isEmpty(noempty) จะได้ค่า ${isEmpty(noempty)}`)
