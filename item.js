Vue.component('artists-name', {
  props: ['art'],
  template: '<li>{{ art.name }}</li>'
})


var app = new Vue({
  el: '#app',
  data: {
    artists: [
      { id: 0, name: 'Daft Punk' },
      { id: 1, name: 'Justice' },
      { id: 2, name: 'Parcels' },
      { id: 3, name: 'Jungle' },
      { id: 4, name: 'Sir Sly' },
      { id: 5, name: 'Gorillaz' },
      { id: 6, name: 'Soulwax' },
      { id: 7, name: 'Metallica' },
      { id: 8, name: 'Little Jesus' },
      { id: 9, name: 'Run the Jewels' }
    ]
  },
  components: {
    
  }
})