<template>
    <div>
    <div class="footer">
        <hr>    
        <div class="d-flex ">
            <div class="pl-2 pt-2">
                <img src="../assets/mdi_thumb-up-outline.png"/>
            </div>
            <div class="pl-3 pt-2">
                <img src="../assets/Chat Bubble2.png"/>
            </div>
            <div class="survey_box rounded mt-1">
                <div class="pt-1 pl-2">
                설문 참여하기
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>

export default{
    name: 'layout_footer',
    layout: 'DefaultLayout'
    
}
</script>
<style>
.footer{
    position: fixed;
    bottom: 0;
    width: 95%;
    height: 40px;
    background-color: white;
    max-width: 500px;
    z-index: 3;
}
.survey_box{
    margin-left:auto;
    background-color: #30cdae;
    color : white;
    font-size: 13px;
    width: 100px;
    height: 30px;

}
</style>