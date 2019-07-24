<template>
    <div>
        <Header />

        这是Movie
         <TabBar />
    </div>
</template>
<script>
import Header from '@/components/Header';
import TabBar from '@/components/TabBar';
export default {
    name:'Movie',
    components:{
        Header,
        TabBar
    }
}
</script>
<style lang="scss" scoped>

</style>
