import { atom } from "recoil";

export const homeAtom = atom({
    key: 'homeAtom',
    default:'home'
})

export const productsAtom = atom({
    key: 'productsAtom',
    default:'products'
})

export const servicesAtom =atom({
    key: 'servicesAtom',
    default: [
                {path: '/', service:'Home'}, 
                {path:'/orders', service:'Orders'},
                {path:'/products', service:'Products'},
                {path:'/delivery', service:'Delivery'},
                {path:'/marketting', service:'Marketting'},
                {path:'/analytics', service:'Analytics'},
                {path:'/payouts', service:'Payouts'},
                {path:'/discounts', service:'Discounts'},
                {path:'/audience', service:'Audience'},
                {path:'/appearance', service:'Appearance'},
                {path:'/plugins', service:'Plugins'},
        
            ]
}) 