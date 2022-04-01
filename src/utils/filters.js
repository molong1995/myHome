import Vue from "vue";
import moment from "moment";

Vue.filter('toDate',(value) => {
   if(value) {
      return moment(value).format('YYYY-MM-DD');
   }else {
      return "";
   }
});

Vue.filter('toDateTime',(value) => {
   if(value) {
      return moment(value).format('YYYY-MM-DD HH:mm');
   }else {
      return "";
   }
});