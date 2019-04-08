<template>
  <div>
    <ListCode v-for="item in listdata" :key="item.id">
      <Panel :singleData="item"/>
    </ListCode>
  </div>
</template>
<script>
import ListCode from "@/components/ListCode";

export default {
  name: "codeFragment",
  components: {
    ListCode,
    Panel: ListCode.Panel
  },
  data() {
    return {
      listdata: []
    };
  },
  methods: {
    handleActive() {
      console.log(111);
    }
  },
  mounted() {
    this.listdata = [
      {
        id: 1,
        title: "测试1",
        label: [1, 2],
        ispreview:true,
        html: `<p class="codepen" data-height="265" data-theme-id="0" data-default-tab="js,result" data-user="czgredjourney" data-slug-hash="oPZRqQ" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="hello world">
        <span>See the Pen <a href="https://codepen.io/czgredjourney/pen/oPZRqQ/">
        hello world</a> by daydayupgoodgoodstudy (<a href="https://codepen.io/czgredjourney">@czgredjourney</a>)
        on <a href="https://codepen.io">CodePen</a>.</span>
        </p>`,
        src: "https://static.codepen.io/assets/embed/ei.js"
      },
      {
        id: 2,
        title: "测试2",
        label: [1, 2],
        ispreview:true,
        html: `<p class="codepen" data-height="265" data-theme-id="0" data-default-tab="js,result" data-user="czgredjourney" data-slug-hash="oPZRqQ" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="hello world">
        <span>See the Pen <a href="https://codepen.io/czgredjourney/pen/oPZRqQ/">
        hello world</a> by daydayupgoodgoodstudy (<a href="https://codepen.io/czgredjourney">@czgredjourney</a>)
        on <a href="https://codepen.io">CodePen</a>.</span>
        </p>`,
        src: "https://static.codepen.io/assets/embed/ei.js"
      }
    ];
  }
};
</script>
