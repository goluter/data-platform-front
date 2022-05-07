<template>
    <div>
        <Header />
        <div>
            하이로
        </div>
        <Footer />
    </div>
    
</template>

<script>
    import Header from '/layouts/layout_header.vue'
    import Footer from '/layouts/layout_footer.vue'

    export default{
        name: 'm_index',
        layout: 'DefaultLayout',
        components:{
            Header,
            Footer
        }
    }
</script>

