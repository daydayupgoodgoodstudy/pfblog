<template>
  <div>
      <div :class="classes"  @click="handleActive">
        <h2>{{data.title}}</h2>

      </div>
      <collapse-transition>
        <div v-show="isShow" :class="boxclsasses">
          <div :ref="data.id" v-html="scriptHtml(data)"></div>
        </div>
      </collapse-transition>
  </div>
</template> 
<style lang="less">
@transition-time : 0.3s;

.collapse-transition {
    transition: @transition-time height ease-in-out, @transition-time padding-top ease-in-out, @transition-time padding-bottom ease-in-out;
}

.listcode {
  width: 100%;
  margin-top: 8px;
  height: 50px;
  line-height: 50px;
  font-weight: 400;
  border: 1px solid #aabbcc;
  text-indent: 2em;
  border-radius: 4px;
  &:hover {
    cursor: pointer;
    background: #ccddff;
  }
}

.panel {
  padding: 5px;
  border: 1px solid #aabbcc;
}

</style>
<script>
import CollapseTransition from "../base/collapse-transition";

export default {
  name: "PPanel",
  components: {
    CollapseTransition
  },
  props: {
    singleData: {
      type: Object,
      required: true
    },
    isActive: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      data:this.singleData,
      isShow:this.isActive
    };
  },
  computed: {
    classes() {
      return ["listcode"];
    },
    boxclsasses(){
      return ["panel"]
    }
  },
  methods: {
    handleActive() {
      console.log(2222)
      this.isShow = !this.isShow
    },
    scriptHtml(s) {
      this.$nextTick(function(){
        let script = document.createElement("script");
        let refs = this.$refs[s.id];
        // ispreview
        console.log(11)
        script.type = "text/javascript";
        script.async = true;
        script.src = s.src;
        refs.append(script)
      });
      return s.html;
    }
  },
  mounted() {
    this.$nextTick(function() {});
  }
};
</script>
