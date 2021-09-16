import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

import { 
  Button,
  Tabs,
  Menu,
  Icon,
  Dropdown,
  Avatar,
  Modal,
  Form,
  Input,
  Alert,
  Spin,
  List,
  Row,
  Col,
  Card,
  Divider,
  Tag,
  message,
  Upload,
  PageHeader,
  Rate,
} from 'ant-design-vue'


Vue.use(Button);
Vue.use(Tabs);
Vue.use(Menu);
Vue.use(Icon);
Vue.use(Dropdown);
Vue.use(Avatar);
Vue.use(Modal);
Vue.use(Form);
Vue.use(Input);
Vue.use(Alert);
Vue.use(Spin);
Vue.use(List);
Vue.use(Row);
Vue.use(Col);
Vue.use(Card);
Vue.use(Divider);
Vue.use(Tag);
Vue.use(Upload);
Vue.use(PageHeader);
Vue.use(Rate);



Vue.config.productionTip = false
Vue.prototype.$message = message;


new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
