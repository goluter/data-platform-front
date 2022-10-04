<template>
  <div class="container" style="position: relative">
    <div class="green-box rounded-t-lg" />
    <div v-if="surveyData" class="title-box rounded-b-lg">
      <div class="pa-5">
        <b> {{ surveyData.subject }}</b>
      </div>
    </div>
    <div
      v-if="!surveyData || !polls.length"
      class="ma-2 pt-3 d-flex justify-center align-center"
    >
      <v-progress-circular :size="50" color="primary" indeterminate />
    </div>

    <div v-for="poll in polls" :key="poll.id">
      <div
        v-if="poll.itemType === 'identifier'"
        :key="poll.id"
        class="answer-box mt-5 rounded-lg"
      >
        <div class="ma-2 pt-3">
          <h3>
            {{ poll.subject }}
            <span v-if="!!poll.mandatory" class="ml-3 pb-3 hide-box">*</span>
          </h3>
        </div>
        <h6 v-if="!!poll.content" style="margin: 0px 12px">
          {{ poll.content }}
        </h6>
        <v-text-field
          :ref="poll.answerValue"
          v-model="poll.answerValue"
          style="margin: 0px 12px"
          :rules="[
            () =>
              poll.answerValue ? true : '필수 항목이에요! 입력 부탁드립니다.',
          ]"
          :required="poll.mandatory"
          @input="handleInputChange"
        />
      </div>

      <div
        v-if="poll.itemType === 'poll'"
        :key="poll.id"
        class="answer-box mt-5 rounded-lg"
      >
        <div class="ma-2 pt-3">
          <h3>{{ poll.subject }}</h3>
          <span v-if="!!poll.mandatory" class="ml-3 pb-3 hide-box">*</span>
        </div>
        <div class="mt-3 ml-3">
          <v-radio-group v-model="poll.answerValue">
            <v-radio
              v-for="(option, i) in poll.options"
              :key="option.id"
              :value="option.value"
              @input="handleInputChange"
            >
              <template #label>
                <b>{{ option.value }}</b>
              </template>
            </v-radio>
          </v-radio-group>
        </div>
      </div>
    </div>

    <div
      v-if="polls.length"
      class="response-box d-flex justify-center align-center"
      style="position: fixed; bottom: 0; right: 0; left: 0"
      @click="join($event)"
    >
      <div
        v-if="isPosting"
        class="ma-2 pt-3 d-flex justify-center align-center"
      >
        <v-progress-circular :size="35" color="primary" indeterminate />
      </div>

      <div v-if="!isPosting" style="font-size: 18px; color: #eeeeee">
        {{
          `${polls.filter((v) => !!v.answerValue).length}/${
            polls.length
          } 응답 (${(
            (polls.filter((v) => !!v.answerValue).length / polls.length) *
              100 || 0.0
          ).toFixed(2)}%)`
        }}
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'govey/src/libs/http-client'
import { isLogin } from 'govey/src/libs/auth'

export default {
  name: 'SurveyJoinPage',
  layout: 'empty',
  data() {
    return {
      title: [],
      answer: [],
      check1: null,
      check2: null,
      surveyData: undefined,
      surveyIdentifiers: [],
      pollData: [],
      identifiers: [],
      polls: [],
      isPosting: false,
    }
  },
  created() {
    this.fetchData(this.$route.query.id)
    this.fetchIdentifiers(this.$route.query.id)
  },
  methods: {
    handleInputChange() {
      // console.log('hi', this.polls)
    },
    join() {
      if (this.isPosting) {
        return
      }

      if (
        this.polls.filter((poll) => poll.mandatory && !poll.answerValue).length
      ) {
        alert('입력되지 않은 필수 문항이 있습니다. 입력 부탁드려요!')
        return
      }

      const identifers = this.polls
        .filter((poll) => !!poll.answerValue && poll.itemType === 'identifier')
        .map((identifer) => identifer.answerValue)
      const mainFeature = identifers[0] || 'empty'
      const features = identifers.join(',') || 'empty'
      const answeredPolls = this.polls
        .filter((poll) => !!poll.answerValue && poll.itemType === 'poll')
        .map(async (poll) => {
          return await axios.post(
            // http://localhost:8080/users/v1/polls/42cd99bf-a58c-45f5-8e05-d941af7f52ac/poll-users
            '/users/v1/polls/' + poll.id + '/poll-users',
            {
              features,
              mainFeature,
              value: poll.answerValue,
            }
          )
        })

      this.isPosting = true
      Promise.all(answeredPolls)
        .then(async (r) => {
          if (isLogin()) {
            axios
              .post('/users/v1/surveys/' + this.surveyData.id + '/users', {})
              .catch((e) => {
                if (e?.response?.data.message) {
                  if (e?.response?.data.message === '이미 참여하셨습니다.') {
                    alert('기존에 제출하셨던 답변을 업데이트했어요!')
                  }
                } else {
                  alert(
                    '알 수 없는 에러가 발생했습니다. 관리자에게 문의해주세요.'
                  )
                }
              })
              .finally(() => {
                this.$router.replace('/surveys/join/completed')
              })
          } else {
            this.$router.replace('/surveys/join/completed')
          }
        })
        .catch((e) => {})
        .finally(() => {
          this.isPosting = false
        })
    },
    async fetchIdentifiers(id) {
      const [identifiers, polls] = await Promise.all([
        await axios
          .get('/users/v1/surveys/' + id + '/identifiers')
          .then((r) => r.data),
        await axios.get('/users/v1/surveys/' + id + '/polls/').then((r) =>
          r.data.map((v) => {
            return {
              ...v,
              options: JSON.parse(v.content),
            }
          })
        ),
      ])

      this.polls = [
        ...identifiers.map((iden) => ({
          itemType: 'identifier',
          ...iden,
          answerValue: '',
        })),
        ...polls.map((poll) => ({
          itemType: 'poll',
          ...poll,
          answerValue: '',
        })),
      ]
    },
    fetchData(id) {
      axios
        .get('/users/v1/surveys/' + id)
        .then(async (response) => {
          if (response.data.goods === null) {
            response.data.goods = 0
          }
          if (response.data.hits === null) {
            response.data.hits = 0
          }
          this.surveyData = response.data
          this.surveyContent = response.data.content
          this.surveyContentArr.push(this.surveyContent)
          const rewardsData = await axios
            .get('/users/v1/surveys/' + id + '/rewards/')
            .then((response) => {
              const reward = []
              for (let i = 0; i < response.data.length; i++) {
                const dic = {}
                dic.type = response.data[i].type
                dic.value = response.data[i].value
                reward.push(dic)
              }
              return reward
            })
            .catch((error) => {
              console.log(error)
            })

          const mix = Object.assign({}, this.surveyData, { rewardsData })
          this.surveyData = mix
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
}
</script>

<style scoped>
.container {
  height: 100%;
  background-color: #eeeeee;
  position: relative;
  padding-bottom: 120px;
}
.green-box {
  background-color: #1cddb7;
  height: 10px;
}
.title-box {
  background-color: #ffffff;
  font-size: 20px;
}
.answer-box {
  background-color: #ffffff;
  padding-bottom: 12px;
}
.hide-box {
  color: #e43e3e;
}
.response-box {
  background-color: #68c9ff;
  height: 60px;
  font-size: 20px;
  width: 100%;
}
</style>
