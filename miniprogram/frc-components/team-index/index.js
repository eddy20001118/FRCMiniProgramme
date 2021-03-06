// frc-components/team-index/index.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        teamIndex: null,
        teamYearArray: Array,
        lastYear: String
    },

    /**
     * 组件的初始数据
     */
    data: {
        yearValue: String
    },

    /**
     * 组件的方法列表
     */
    methods: {
        bindPickerChange: function (e) {
            this.setData({
                yearValue: this.properties.teamYearArray[e.detail.value]
            });
            this.triggerEvent('event', e.detail.value);
        }
    }
})