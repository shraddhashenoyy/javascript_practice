//Switch statements
const expr ="Papayas";
switch(expr){
    case 'Oranges':
        console.log("Oranges are $5  a pound. ");
        break;
    case 'Mangoes':
    case  'Papayas':
        console.log("Mangoes and papayas are $10 a pound. ");
        break;
        default:
            console.log("Sorry,Not available");
}