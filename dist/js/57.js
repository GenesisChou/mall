webpackJsonp([57],{234:function(e,t,i){"use strict";e.exports={name:"fortune",template:"\n    <component :is='theme_type' :free-times='freeTimes' :fresh-free-times='freshFreeTimes' :activity-detail='activityDetail'\n        :id='id' :notice='notice' :to-order-detail='toOrderDetail' :toggleDialog='toggleDialog'>\n    </component>\n",components:{one:function(e){i.e(25).then(function(){var t=[i(235)];e.apply(null,t)}.bind(this)).catch(i.oe)},two:function(e){i.e(24).then(function(){var t=[i(236)];e.apply(null,t)}.bind(this)).catch(i.oe)}},props:{freshFreeTimes:Function,freeTimes:Number,activityDetail:Object,id:Number,notice:String,toOrderDetail:Function,toggleDialog:Function,isOff:Boolean},computed:{theme_type:function(){return 1===this.activityDetail.theme_type?"one":2===this.activityDetail.theme_type?"two":void 0}}}}});