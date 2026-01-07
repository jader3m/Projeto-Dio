let invoice = {
    name: "Jader",
    age: 33,
    products: {
        0: ["Mouse 2xwm", 29.90],
        1: ["Tecaldo mecânico", 129.90],
        2: ["Monitor", 1029.90],
        3: ["Pc", 1529.90]
    },
    taxes: 98.90,
    processamento: "concluido"
}

function generateInvoice (invoice){
    console.log(`O comprador é ${invoice.name}`)
    console.log(`A idade é ${invoice.age}`)
    console.log(`------------`)
    for(let index in invoice.products){
        let[productName, produtcPrice] = invoice.products[index]
        console.log(`-${productName}: ${produtcPrice}`)
    }
    console.log(`Valor da taxa: ${invoice.taxes}`)
    console.log(`Status da compra: ${invoice.processamento}`)
}

generateInvoice (invoice)