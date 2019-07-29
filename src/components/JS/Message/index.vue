<template>
    <div class="message">
        <h3>{{title}}</h3>
         <h3>{{content}}</h3>
        <div>
            <div @touchstart="handleOk">{{ok}}</div>
            <div @touchstart="handleCancel">{{cancel}}</div>
        </div>
    </div>
</template>
<script>
export default {
    name:'message'
}
</script>
<style scope>
.message{
    position: absolute;
    width: 180px;
    height: 120px;
    top: 50%;
    left: 50%;
    text-align: center;  
    border: 1px solid rgb(68, 67, 67);
    box-shadow: 2px 2px 2px #ccc;
    border-radius:3px; 
    z-index: 999;
    background-color: white;
    transform: translate(-50%,-50%);
}
.message h3{
    padding-top: 10px;
    font-weight:500;
}
.message>div{
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 40px;
    display: flex;
    border-top: 1px #ccc solid;
}
.message>div div{
    flex: 1;
    line-height: 40px;
    border-right: 1px #ccc solid;
}
.message>div div:first-child{
    color:red;
}
</style>