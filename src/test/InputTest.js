export const testEmail = {
    email: "gshlga@gmail.com"
}

export const validateEmail = (testemail) => {
    const regEx = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/
    if (regEx.test(testemail)){
        console.log("valid")
    }else if(testemail == ""){
        console.log("can't be null")
        throw new Error("Invalid email")

    }else {
        console.log("not valid")
        throw new Error("Invalid email")

    }
}

export const validatePhone = (testno) => {
    if(testno.length==10){
        if(testno.startsWith("7") || testno.startsWith("8") || testno.startsWith("9") || testno.startsWith("6")){
            console.log("valid")
        }else{
            console.log("not valid")
            throw new Error("Invalid number")

        }
    }else{
        console.log("not valid")
        throw new Error("Invalid number")

    }
}