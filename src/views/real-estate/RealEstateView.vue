<template>
    <div class="real-estate-grid-container">
        <div v-for="realEstate in realEstates" class="real-estate-cell">
            <div class="real-estate-cell-title">
                <h3>{{realEstate.name}}</h3>
            </div>
            <div>
                <ul>
                    <li>Address: {{realEstate.name}}</li>
                    <li>Type: {{realEstate.type}}</li>
                    <li>Area: {{realEstate.area}} mt2</li>
                    <li>Zone: {{realEstate.zone}}</li>
                    <li>Offer type: {{realEstate.offerType}}</li>
                    <li>Contract: {{realEstate.contract ? 'YES' : 'NO'}}</li>
                    <li v-if="realEstate.contract">Contract dates: {{realEstate.contract.from}} - {{realEstate.contract.to}}</li>
                    <li>Price: {{realEstate.price}}</li>
                </ul>
            </div>
        </div>
        <div v-for="(i) in 15" class="real-estate-cell">
            <div class="real-estate-cell-title">
                <h3>Titulo piso</h3>
            </div>
            <div>
                <ul>
                    <li>Address</li>
                    <li>Real Estate type</li>
                    <li>Area</li>
                    <li>Zone</li>
                    <li>Offer type</li>
                    <li>Contract Date</li>
                    <li>Price</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="real-estate-actions-bar">
        <button>Other</button>
        <button @click="onNewRealEstateClick">New</button>
    </div>
</template>

<style scoped>
    .real-estate-grid-container {
        padding: 1rem;
        overflow-y: auto;
        width: 100%;
        height: calc(100% - 3rem);
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-column-gap: 1rem;
        grid-row-gap: 1rem;
    }

    .real-estate-actions-bar {
        width: 100%;
        height: 3rem;
        border-top: solid 1px #CCCCCC;
        display: flex;
        justify-content: end;
        padding: 0.5rem 1rem;
    }

    .real-estate-actions-bar button {
        margin-left: 1rem;
    }

    .real-estate-cell {
        width: 20rem;
        height: 20rem;
        padding: 1rem;
        border: solid 1px #CCCCCC;
        border-radius: 0.5rem;
        box-shadow: 0.1rem 0.1rem 0.3rem #CCCCCC;
        background-color: var(--white);
    }

    .real-estate-cell-title {
        border-bottom: solid 1px #CCCCCC;
        margin-bottom: 1rem;
        text-transform: uppercase;
        font-weight: bold;
    }
</style>

<script src="./real-state-view-impl.ts"/>