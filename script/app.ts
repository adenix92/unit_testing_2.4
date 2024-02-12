import { icustomerregistration } from "./iapp.js";
import { application } from "./icapp.js";

 class customerRegistration implements icustomerregistration{
    constructor(readonly name:string, protected Phone:number,public address:string ){}

    customerRecord(){
        return `(customer name: ${this.name.toString()} / phone ${this.Phone.toString()} and address: ${this.address.toString()})`;
    }

   
}

let customer_name = document.querySelector("#customername") as HTMLInputElement;
let customerphone = document.querySelector("#phone") as HTMLInputElement;
let customeraddress = document.querySelector("#address") as HTMLInputElement;
let form = document.querySelector(".form") as HTMLFormElement;

let ul = document.querySelector('ul') as HTMLUListElement;



let newList = new application(ul);



form.addEventListener('submit',(e:Event)=>{
e.preventDefault();
let iRst:icustomerregistration;
let rs = new customerRegistration(customer_name.value,customerphone.valueAsNumber,customeraddress.value);
iRst = rs;

    newList.renderHmlt(iRst.customerRecord(),'Unit Testing','end');

});

//generic
let gen = (obj:object)=>{
    let m = Math.floor(Math.random()*100);
    return{...obj,m};
}

//to get the output 
let c  = gen({user:'this is username',score:90});
console.log(c);