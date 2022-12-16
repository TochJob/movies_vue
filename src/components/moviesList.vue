<template>
    <div>
        <v-container>
            <h1 class="list-title">IMDB Top 250</h1>
            <v-row>
                <template v-if="isExist">
                    <v-col cols="3" v-for="(movie, index) in list" :key="index">
                        <movie-item :movie="movie"/>
                    </v-col>
                </template>
                <template v-else>
                    <div>
                        Empty List
                    </div>
                </template>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import movieItem from './movieItem'

export default {
  components: { 
    movieItem 
    },
    

    name: 'MoviesList',
    props: {
        list: {
            type: Object,
            default: ()=>({})
        }
    },
    computed: {
        isExist(){
            return Boolean(Object.keys(this.list).length)
        }
    }
}
</script>

