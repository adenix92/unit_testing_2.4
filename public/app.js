import { application } from "./icapp.js";
class customerRegistration {
    constructor(name, Phone, address) {
        this.name = name;
        this.Phone = Phone;
        this.address = address;
    }
    customerRecord() {
        return `(customer name: ${this.name.toString()} / phone ${this.Phone.toString()} and address: ${this.address.toString()})`;
    }
}
let customer_name = document.querySelector("#customername");
let customerphone = document.querySelector("#phone");
let customeraddress = document.querySelector("#address");
let form = document.querySelector(".form");
let ul = document.querySelector('ul');
let newList = new application(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let iRst;
    let rs = new customerRegistration(customer_name.value, customerphone.valueAsNumber, customeraddress.value);
    iRst = rs;
    newList.renderHmlt(iRst.customerRecord(), 'Unit Testing', 'end');
});
