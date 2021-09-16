<template>
  <div class="about">
    <a-page-header
      style="border: 1px solid rgb(235, 237, 240)"
      @back="() => $router.go(-1)"
    >
      <template slot="extra">
      <a-button :disabled="disabled" @click="extraicon"><a-icon type="share-alt" :class="value === '3' ? 'extra_icon2':'extra_icon'"  /></a-button>
      </template>
      
      <template slot="footer">
        <a-tabs :activeKey="value" @change="callback">
      
      <a-tab-pane key="1">
        <span slot="tab">
        <a-icon type="file-word" :style="{ fontSize: '30px', }" />
        </span>
          <a-menu v-model="current" mode="horizontal" style="background-color:gray;padding:30px 0 0 0;" @click="read">
            <a-menu-item key="mail" >
            <a-icon type="file-word" :style="{ fontSize: '30px', }" />
          </a-menu-item>
           <a-menu-item key="app"> <a-icon type="camera" :style="{ fontSize: '30px', }"/></a-menu-item>
          </a-menu>
      </a-tab-pane>
     
      <a-tab-pane key="2">
        <span slot="tab">
        <a-icon type="border-horizontal" :style="{ fontSize: '30px', }" />
        </span>
        <h3>{{text}}</h3>
        <a-button style="background-color:yellow;" @click="go">mark inspection Spot</a-button>
      </a-tab-pane>
      <a-tab-pane key="3" :disabled="disabled">
        <span slot="tab">
        <a-icon type="file-markdown" :style="{ fontSize: '30px', }"/>
        </span>
        {{text}}
      </a-tab-pane>
    </a-tabs>
</template>
</a-page-header>
</div>
</template>

<script>
export default {
  data() {
    return {
      current: [],
      a:0.1,
      disabled:true,
      formLayout: 'horizontal',
      form: this.$form.createForm(this, { name: 'coordinated' }),
      value:'',
      app:'app',
      text:'Floor plan Name',
      text2:'',
    };
  },
  methods:{
    extraicon(){
      this.$message.success(
        'Submiting',
        3,
      );
    },
   
    callback(key) {
      // alert(key);
      this.value=key
    },
    read(key){
      
      // alert(key.key)
      this.current=key.key
      if(this.current===this.app){
        
        // alert('app2')
        
        console.log(this.value)
        this.value=2
      }
    },
    go(){
      this.value=3
      console.log(this.value)
      this.text2=this.text
      if(this.value==3){
        this.disabled=false
      }
      
    }
  }
}
</script>

<style scoped>
tr:last-child td {
  padding-bottom: 0;
}
.extra_icon{
  opacity: 0.8;
}
.extra_icon2{
  opacity: 1;
}
.about{
  width: 375px;
  margin: 0;
  margin: 0 auto;
}
</style>