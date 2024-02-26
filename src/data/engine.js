import { reactive } from 'vue'
import axios from 'axios'
import course from './data'
const engine = reactive({
  initialize () {
    axios
      .get(
        'https://62dd8310ccdf9f7ec2c91b1b.mockapi.io/api/masterin-alpine-js-demo'
      )
      .then(response => {
        course.chapters = response.data.chapters
        course.intro = response.data.intro
        course.title = response.data.title
        course.id = response.data.id
        this.player.init()
      })
    this.player.currentEpisode = course.intro
  },
  player: {
    currentEpisode: {},
    episodes: [],
    init () {
      course.chapters.forEach(c => {
        c.episodes.forEach(e => {
          this.episodes.push(e)
        })
      })
    },
    play (episode) {
      this.currentEpisode = episode
    },
    playNext () {
      console.log('ok')
      let nextIndex = 0
      const currentEpisodeUuid = this.currentEpisode.uuid
      if (currentEpisodeUuid) {
        nextIndex =
          this.episodes.findIndex(e => e.uuid == currentEpisodeUuid) + 1
      }
      if (this.episodes[nextIndex]) {
        const nextEpisode = this.episodes[nextIndex]
        this.play(nextEpisode)
      }
    },
    playPrevious () {
      let prevIndex = 0
      const currentEpisodeUuid = this.currentEpisode.uuid
      if (currentEpisodeUuid) {
        prevIndex =
          this.episodes.findIndex(e => e.uuid == currentEpisodeUuid) - 1
      }
      if (this.episodes[prevIndex]) {
        const prevEpisode = this.episodes[prevIndex]
        this.play(prevEpisode)
      }
    }
  }
})

export default engine
