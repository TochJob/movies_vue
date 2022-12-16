<template>
  <v-app>
    <v-main>
      <movies-list :list="moveisList"/>
    </v-main>
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import  MoviesList  from '@/components/moviesList'

export default {
  name: 'App',

  components: {
    MoviesList

  },
  mounted(){
  },
  computed: {
    ...mapGetters('movies', ['moveisList'])
  },
  methods: {
    ...mapActions('movies', ["fetchMovies"])
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
  @import url('@/assets/scss/main.scss');
</style>

