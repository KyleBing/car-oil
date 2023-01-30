const LOCALSTORAGE_ID = 'CarOil'

let app = new Vue({
    el: "#app",
    data: {
        oilCost100km: 5.5, // 百公里油耗
        oilPrise: 7.7, // 油价单价
        distance: 230, // 距离
        highroadCost: 0, // 高速过路费

        result: 0,  // 总花费
    },
    mounted() {
        // 载入之前的配置
        this.loadConfig()
        // onresize
        onresize = () => {
            this.insets = {
                height: innerHeight,
                width: innerWidth
            }
        }
    },
    methods: {
        compute() {
            this.oilCost100km = this.oilCost100km || 0
            this.oilPrise = this.oilPrise || 0
            this.distance = this.distance || 0
            this.highroadCost = this.highroadCost || 0
            this.result =
                this.distance / 100 * this.oilCost100km * this.oilPrise + this.highroadCost
            this.saveConfig()
        },
        // 保存数据
        saveConfig(){
            localStorage.setItem(LOCALSTORAGE_ID, JSON.stringify(this.$data))
        },
        // 载入数据
        loadConfig(){
            let savedConfigString = localStorage.getItem(LOCALSTORAGE_ID)
            if (savedConfigString){
                let savedConfig = JSON.parse(savedConfigString)
                this.oilCost100km = savedConfig.oilCost100km
                this.oilPrise = savedConfig.oilPrise
                this.distance = savedConfig.distance
                this.highroadCost = savedConfig.highroadCost
                this.result = savedConfig.result
            }
        }
    },
    computed: {}
})

document.addEventListener('touchstart', () => {
}, false)


