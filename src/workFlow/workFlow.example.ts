import workFlow from "./workFlow";
var a = {
    AddressForm: goto => {
        setTimeout(x=> goto('CheckingAddress'),1000);
        setTimeout(x=> goto('CheckingAddress'),1500);
    },
    CheckingAddress: goto => {
        setTimeout(x=> goto('CheckingProducts'),1000);
    },
    CheckingProducts: goto => {
        setTimeout(x=> goto('CheckingProductsSucceded'),1000);
    },
    CheckingProductsSucceded: goto => {
        console.log('done');
    },
    CheckingProductsFailed: goto => {
        setTimeout(x=> goto('CheckingAddress'),1000);
    }
};
const AddressState = workFlow(a, 'AddressForm')
