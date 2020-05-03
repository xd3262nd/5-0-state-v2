<template>

    <div class="footer">

        <div class="m-2">
            <span class="p-3">
                <!-- router link elements -->
                 <!-- turned the element to link to navigate within the app -->
                <router-link to="/">H-O-M-E</router-link>
            </span>

            <span class="p-3">
                <!-- to attribute matches the path attribute in router config -->
                <router-link to="/about">A-B-O-U-T</router-link>
            </span>

        </div>


        <p class="text-right p-2">Header Image By
            <a href="https://unsplash.com/photos/WZh1QZFB4kc">Simone Busatto via Unsplash.</a>
            <br>
            <a href="https://icons8.com/icon/QaHIbDj74XXB/map">Map icon by Icons8</a>
        </p>

    </div>
    
</template>


<script>
export default {
    name: 'Footer'
}
</script>


<style scoped>



</style>