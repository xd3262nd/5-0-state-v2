<template>

    <div id="state-list">

        <Summary v-bind:total="totalVisited" v-bind:visitedAll="visitedAll"></Summary>


        <div class="d-flex flex-wrap justify-content-around">
            <div class="p-2" v-for="state in states" v-bind:key="state.name" >
                <!-- This is the child component for each state to have a checkbox -->
                <!-- v-on:isVisited binds the updateVisited method -->
                <State
                    v-bind:state="state"
                    v-on:isVisited="updateVisited"
                ></State>
            </div>
        </div>
    </div>

    
</template>


<script>
import State from '@/components/State'
import Summary from '@/components/Summary'

export default {
    name: 'StateList',
    components: {
        State, Summary
    },
    data() {
        return {
            states: [],
        }
    },
    mounted(){
        this.getAll()
    },
    methods: {
        getAll() {
            // to get all states with $stateService
            this.$stateService.getAll().then(data => {
                this.states = data
            })
        },
        // method to call $stateService.setVisitied and call getAll() to update the `states` array
        updateVisited( stateName, stateVisited ){
            this.$stateService.setVisited( stateName, stateVisited ).then( data => this.getAll() )
        }
    },
    computed: {
        totalVisited() {
            // Filter out not-visited states to make a new array
            let visited = this.states.filter(function(state) {
                return state.visited
            })
            return visited.length
        },
        visitedAll() {
            let visited = this.states.filter(function(state) {
                return state.visited
            })
            // if it is visited all the length will be same
            // Will return true if it is same length
            return visited.length == this.states.length
        }
    }
    
}
</script>

<style scoped>

</style>