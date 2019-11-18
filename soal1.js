function lelang(a) {

    let bajuZM = 10000

    
    for (let i = 0; i < a; i++) {
        if (i > 3 && i % 4 === 0) {
            bajuZM += (0.1 * bajuZM)
        }
        else if (i % 1 === 0) {
            bajuZM += ((0.2 * bajuZM))
        }
    }
    if (bajuZM > 30000000) {
        return "barang sudah dibeli"
    }
    else {
        return `pada menit ${a} harga baju ${bajuZM}`
    }
}
console.log(lelang(50))
console.log(lelang(2))
console.log(lelang(49))