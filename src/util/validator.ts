const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const sriLankanMobileRegex = /^7|0|(?:\ +94)[0-9]{9,10}$/;
const nameRegex = /^[a-zA-Z0-9_-]{3,16}$/


export function validateEmail(email: string): boolean {
    console.log( emailRegex.test(email))
    return emailRegex.test(email);
   
    
    
}


export const validateUsername = (name:string):boolean => {
    console.log(name)
    console.log(nameRegex.test(name))
    return nameRegex.test(name);
}

export function validateLKMobileNumbers(mobile: string): boolean {
    return sriLankanMobileRegex.test(mobile);
}

export function validatePassword(password: string): boolean {
    console.log(password.length>=8)
    return password.length>=8;
    
}