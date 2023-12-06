import {useRouter} from "vue-router";

function RealStateViewImpl () {
    const router = useRouter()
    const realEstates = [
        {
            name: 'Piso Passeig D`Amunt 34, 2-3',
            type: 'FLAT',
            offerType: 'RENT',
            address: 'Passeig D`Amunt 34',
            zone: 'Gracia',
            area: 100,
            contract: {
                from: '01/06/2021',
                to: '31/05/2028'
            },
            price: 980,
            lastPayment: '01/03/2023'
        }
    ]

    const onNewRealEstateClick = () => {
        router.push({ name: 'real-estate-form', params: { realEstateId: 123 }})
    }

    return { realEstates, onNewRealEstateClick }
}

export default {
    setup: RealStateViewImpl
}