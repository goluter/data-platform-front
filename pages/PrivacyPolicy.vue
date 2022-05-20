<template>
  <div>
    <div class="header">
      <NuxtLink to="/m_index" style="color: black; text-decoration-line: none"
        ><img
          style="position: absolute"
          src="../assets/Arrow back ios.png"
          ALIGN="left"
      /></NuxtLink>

      <span>개인정보처리방침</span>
    </div>
    <div>asd</div>
  </div>
</template>

<script>
export default {
  name: 'EventList',
  layout: 'default',
  data() {
    return {
      num: 0,
    }
  },
}
</script>

<style>
.container {
  padding: 0px;
}

.header {
  border-bottom: 1px solid #d3d3d3;
  padding: 9px 10px 12px 11px;
  width: 100%;
  background-color: white;
}
.header span {
  flex-grow: 0;
  margin: auto;
  display: table;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.7px;
  text-align: center;
  color: #434343;
}
.contents {
  border-bottom: 1px solid #d3d3d3;
  position: relative;
  overflow: auto;
}
.contents a {
  text-decoration: none;
}
</style>
