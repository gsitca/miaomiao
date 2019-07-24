<template>
    <div>
          <Header />
        这是Cinema
         <TabBar />
    </div>
</template>
<script>

import Header from '@/components/Header';
import TabBar from '@/components/TabBar';

export default {
    name:'Cinema',
       components:{
        Header,
        TabBar
    }
}
</script>
<style lang="scss" scoped>

</style>
