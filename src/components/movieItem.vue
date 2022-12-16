<template>
    <div class="movie-item mb-3">
        <div class="movie-item__poster" :style="posterBg"></div>
    </div>
</template>


<script>
export default {
    name:'MovieItem',
    props: {
        movie: {
            type: Object,
            require: true,
        }
    },
    computed: {
         posterBg(){
            return {
                'background-image' : `url(${this.movie.Poster})` 
            }
         }
    }
}
</script>

<style>
    
</style>