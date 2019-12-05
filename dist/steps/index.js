import { VantComponent } from '../common/component';
import { GREEN } from '../common/color';
VantComponent({
    props: {
        icon: String,
        steps: Array,
        active: Number,
        space: {
          type:String,
          value: 'nbsp'
        },
        decode:{
          type: Boolean,
          value: false
        },
        direction: {
            type: String,
            value: 'horizontal'
        },
        activeColor: {
            type: String,
            value: GREEN
        },
        activeIcon: {
            type: String,
            value: 'checked'
        },
        inactiveIcon: String
    }
});
