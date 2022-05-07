<template>
    <div>
        <Header />
    </div>
</template>

<script>
    import Header from '/layouts/layout_header.vue'

    export default{
        name: 'm_index',
        layout: 'DefaultLayout',
        components:{
            Header,
        }
    }
</script>

