// mongoose para conectar db //

const mongoose = require("mongoose")

async function main() {

    try {
mongoose.set("strictQuery", true)
        await mongoose.connect(
            "mongodb+srv://biandito:pcxByU2JeIyjmVA8@cluster0.660p8xj.mongodb.net/"
        )

    } catch (error) {
        console.log(`Erro:"${error}`);
    }
    
}

module.exports = main 