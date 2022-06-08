<template>
  <v-container class="pa-0">
    <v-col class="pa-0" cols="12">
      <v-app-bar dense class="elevation-0" color="transparent">
        <v-app-bar-nav-icon icon @click="back">
          <v-icon>mdi-chevron-left</v-icon>
        </v-app-bar-nav-icon>
        <v-toolbar-title class="title-text pa-0" style="font-size: 14px; font-weight: 600">
          {{ reportData.title }}
        </v-toolbar-title>
        <v-spacer />
        <div class="d-flex justify-content-between">
          <v-btn
            v-for="(item, i) in btn"
            :key="i"
            icon
            small
          >
            <v-icon>{{ item }}</v-icon>
          </v-btn>
          <v-menu offset-y>
            <template
              #activator="
                {
                  on,
                  attrs
                }"
            >
              <v-btn
                icon
                small
                v-bind="attrs"
                v-on="on"
              >
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item>
                <v-list-item-title>삭제</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </v-app-bar>
    </v-col>
    <v-divider />
  </v-container>
</template>

<script>
export default {
  props: {
    reportData: {
      type: Object
    }
  },
  data () {
    return {
      btn: ['mdi-export-variant', 'mdi-bookmark-outline']
    }
  },
  methods: {
    back () {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    }
  }
}
</script>

<style scoped>
</style>
