import workFlow from "./workFlow";
const AddressState = workFlow({
    AddressForm: (goto) => {
        setTimeout(() => goto('CheckingAddress'),1000);
        setTimeout(() => goto('CheckingAddress'),1500);
    },
    CheckingAddress: (goto) => {
        setTimeout(() => goto('CheckingProducts'),1000);
    },
    CheckingProducts: (goto) => {
        setTimeout(() => goto('CheckingProductsSucceded'),1000);
    },
    CheckingProductsSucceded: (goto) => {
        console.log('done');
    },
    CheckingProductsFailed: (goto) => {
        setTimeout(() => goto('CheckingAddress'),1000);
    }
}, 'AddressForm')
