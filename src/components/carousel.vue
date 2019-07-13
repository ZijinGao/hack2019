<template>
    <div id="container">
        <!-- <div @click="carouselClicked" > -->
        <div id="container-inside">
            <div id="left" class="slide-button" @click="carouselClicked"></div>
            <el-carousel 
                indicator-position="inside"
                height="500px"
                :autoplay="false"
                arrow="never"
                trigger="click"
                ref="carousel"
                >
                <el-carousel-item v-for="item in images" :key="item.id">
                    <img :src='getImgUrl(item.image)' alt='imagess' />
                </el-carousel-item>
            </el-carousel>
            <div id="right" class="slide-button" @click="carouselClicked"></div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    @import "@/css/carousel.scss";
</style>

<script>
export default {
    name: "carousel",
    data() {
        return {
            images:[
                {image:'image1.jpg', id: 1},
                {image:'image2.jpg', id: 2},
                {image:'image3.jpg', id: 3}
            ]
        }
    },
    methods: {
        getImgUrl: function(pic) {
        return require(`../assets/${pic}`);
        // console.log(1);
        },
        carouselClicked: function(e) {
            const {screenX} = e;
            if (screenX > window.screen.width / 2) {
                this.$refs.carousel.next();
            } else {
                this.$refs.carousel.prev();
            }
        }
    }
}
</script>
