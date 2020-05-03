<template>

    <div class="state-detail p-2">


        <h2>The State of {{state.name}}</h2>

        <p v-if="state.visited">You have visited this state</p>
        <p v-else>You have not visited this state</p>

        <div id="map-container">
            <!-- l-map componet  -->
            <!-- v-bind the Vue data to set Leaflet props -->
            <l-map 
                ref="stateMap"
                style="height:100%; width:100%"
                v-bind:zoom="zoom"
                v-bind:center="center">
                <!-- l-tile-layer with pros bound to component props -->
                <l-tile-layer :url="url"></l-tile-layer>
            </l-map>
        </div>

    
    </div>

    
</template>


<script>

// Import Lmap and LtileLayer
import { LMap, LTileLayer } from 'vue2-leaflet'


export default {
    name: 'StateDetail',
    components: {
        LMap, LTileLayer
    },
    data() {
        return {
            state: {
                name: ''
            },
            url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
            zoom:2,
            center: [44,-103], //Inititalize at the geographic center of the US
            bounds: null

        }
    },
    mounted() {
        // $route.params.state will be whatever is after `/detail/` in the route's path that set in stateServices.js
        this.state.name = this.$route.params.state
        // Not required, prevents user dragging map away from state.
        //User still can zoom in and out
        this.$refs.stateMap.mapObject.dragging.disable()
        // overwrite state object with data response from server
        // call from mounted()
        this.fetchStateData()
        
    },
    methods: {
        fetchStateData() {
            this.$stateService.getOne( this.state.name ).then( data => {
                this.state = data
                this.zoom = data.zoom
                this.center = [data.lat, data.lon]
                // Fly to new center coordinates to center on state
                this.$refs.stateMap.mapObject.flyTo(this.center, this.zoom)
            }).catch ( err => console.error(err))
        }
    }
    
}
</script>

<style scoped>
#map-container{
    height: 30em;
}

</style>