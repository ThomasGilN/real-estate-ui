import {ref} from "vue";

function RealEstateFormViewImpl (props: RealEstateFormProps) {
    const realEstate = ref({})

    console.log(props)
    if(props.realEstateId) {
        // load real estate info and assign to object
    }

    return { realEstate }
}

interface RealEstateFormProps {
    realEstateId: number
}

export default {
    setup: RealEstateFormViewImpl
}