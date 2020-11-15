# examJS1
1. Tạo 1 mảng gồm 10 phần tử là các số tự nhiên ngẫu nhiên (vd: 1,4,3,7,5,8,3,2,5)
2. Thêm 2 số bất kì vào 1 vị trí bất kì
3. In ra mảng các số là số chẵn và ở vị trí lẻ (vd: 8,2)
4. In ra mảng các số là số nguyên tố (vd: 3,7,5,2 )
5. Sắp xếp mảng trên theo thứ tự tăng dần
6. In ra object có key là các số có trong mảng trên và value là số lần xuất hiện của chúng
7. Với các số có số lần xuất hiện lớn hơn 1, sửa giá trị của chúng thành 'duplicated'

Cho đoạn code sau:
const chars = 'abcdefghijklmnopqrstuvwxyz';
const length = chars.length;
function generateScore() {
    const score = randomScore();
    let name = '';
    for (let i = 0; i < 5 + Math.round(Math.random() * 10); i++) {
        name += chars.charAt(Math.floor(Math.random() * length));
    }
    return {
        name,
        score
    };
}
function randomScore() {
    return 5 + Math.round(Math.random() * 5)
}

8. Tạo 1 object gồm các trường
    - school: String,
    - class: String,
    - teacher: String,
    - term: String|Number,
    - subject: String,
    - results: Array,
    dùng đoạn code đã cho để sinh ra 1 mảng danh sách cho results
9. Từ object trên, tạo 1 object mới và thay đổi teacher, subject và score
