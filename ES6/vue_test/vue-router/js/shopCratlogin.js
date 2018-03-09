new Vue({
    el:"#app",
    data:{
        //购物车中数据
        shopListArr:[],
        //是否全选
        isSelectedAll:false,
        //所有商品的总价格
        totalPrice:0,
        //是否隐藏删除面板
        isHideDelPanel:true,
        //删除当前的商品
        currentDelShop: [],

    },
    created() {
        document.body.removeChild(document.getElementById('Loadingdiv'));
    },
    //组件已经加载完毕，请求网络数据，业务处理
    mounted(){
        //请求本地数据
        this.getLocalData();
    },
    //过滤
    filters:{
        //格式化金钱
        meneyFormt(str){
            return "￥" + str.toFixed(2);
        }

    },
    methods: {
        //1.请求本地的数据
        getLocalData(){
            // GET /someUrl
            this.$http.get('./data/data.json').then(response => {
                // get body data
                const res = response.body;
                if (res){
                    this.shopListArr = res.allShops.shopList;
                }
            }, response => {
                // error callback
                alert("请求数据失败");
            });

        },
        //2.单个商品的加减
        singerShopPrice(shop,flag){
            if (flag){
              shop.shopNumber += 1;
            }else{
                if(shop.shopNumber <= 1){
                    shop.shopNumber = 1;
                    return;
                }
                shop.shopNumber -= 1;
            }
            //2.2计算总价格
            this.getAllShopPrice();

        },
        //3.选中所有的商品
        selectedAll(flag){
            //3.1总控制
        this.isSelectedAll = !flag;
        //3.2 遍历所有的商品数据
           this.shopListArr.forEach((value,index)=>{
               if (typeof value.isSelected=='undefined'){
                    this.$set(value,'isSelected',!flag)
               }else {
                   value.isSelected = !flag;
               }
           });
           //3.3计算总价格
            this.getAllShopPrice();

        },
        //4.计算商品的总价格
        getAllShopPrice(){
            let totalPrice = 0;
            //4.1遍历所有的商品
            this.shopListArr.forEach((value,index) => {
                //判断商品是否被选中
                if(value.isSelected){
                    totalPrice += value.shopPrice * value.shopNumber;
                }

            });
            this.totalPrice = totalPrice;

        },
        //5.选中单个商品
        isSelectedfun(shop){
            //5.1 判断有没有isSelected
            if(typeof shop.isSelected === 'undefined'){
                this.$set(shop,'isSelected',true);
            }else {
                shop.isSelected = !shop.isSelected;
            }
            //5.2计算总价格
            this.getAllShopPrice();
            //5.3判断是否全选
            this.hasSelectedAll();
        },
        //6.判断是否全选
        hasSelectedAll(){
            let flag = true;
            this.shopListArr.forEach((value,index) => {
                if (!value.isSelected){
                    flag = false;
                }
                if (typeof value.isSelected == 'undefined'){
                    flag = false;
                }
            });
            this.isSelectedAll = flag;

        },
        //7点击删除按钮显示弹框
        delfun(shop){
            this.isHideDelPanel = false;
            this.currentDelShop = shop;
        },
        //8确定删除当前商品
        delShop(){
            //8.1隐藏面板
            this.isHideDelPanel = true;
            const index =  this.shopListArr.indexOf(this.currentDelShop);
            this.shopListArr.splice(index,1);
            //8.2计算总价格
            this.getAllShopPrice();
            console.log(this.shopListArr);
            if (this.shopListArr.length==0){
                this.isSelectedAll = false;
            }
        },
    }

});