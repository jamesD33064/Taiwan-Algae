var sure=document.getElementById("sure");

function sure_click(){
    var obj=document.getElementById("frontselect_1");
    var area=document.getElementById("frontselect_2");
    var index_1 = obj.selectedIndex;
    var index_2 = area.selectedIndex;
    
    if(index_1==0){
        // name.textContent = "未選擇";
    }
    else{
        $("#rate_modal").modal("show");
        const name = document.querySelector("#area_name");
        var r = document.querySelector("#rateGra");
        if(index_1==1){
            ar = new Array();
            ar = ["基隆","宜蘭","台北","新北","桃園","新竹縣","新竹市"];
            if(index_2==0){
                name.textContent = ar[0];
                const a_0=10;
                const b_0=10;
                makegra(a_0,b_0);
            }
            else if(index_2==1){
                name.textContent = ar[1];
                const a_1=10;
                const b_1=20;
                makegra(a_1,b_1);
            }
            else if(index_2==2){
                name.textContent = ar[2];
                const a_2=10;
                const b_2=30;
                makegra(a_2,b_2);
            }
            else if(index_2==3){
                name.textContent = ar[3];
                const a_3=10;
                const b_3=40;
                makegra(a_3,b_3);
            }
            else if(index_2==4){
                name.textContent = ar[4];
                const a_4=10;
                const b_4=50;
                makegra(a_4,b_4);
            }
            else if(index_2==5){
                name.textContent = ar[5];
                const a_5=10;
                const b_5=60;
                makegra(a_5,b_5);
            }
            else if(index_2==6){
                name.textContent = ar[6];
                const a_6=10;
                const b_6=70;
                makegra(a_6,b_6);
            }
        }
    }
}
function makegra(a,b){
    $("#rate_modal").modal("show");
    const name = document.querySelector("#area_name");
    var r = document.querySelector("#rateGra");
    b+=a;
    r.style = rategra(a,b);
}

function rategra(a,b){
    console.log(a);
    return `background: conic-gradient(#bbb 0%, #bbb ${a}%, #FFCDB2 ${a}%, #FFCDB2 ${b}%, #B5838D ${b}%)`;
}

function change(){
    var obj=document.getElementById("frontselect_1");
    var area=document.getElementById("frontselect_2");
    var index = obj.selectedIndex;
    if(index==0){
        area.options.length = 0;
        area.options.add(new Option("所有縣市","0"));
    }
    else if(index==1){
        area.options.length = 0;
        area.options.add(new Option("基隆","0"));
        area.options.add(new Option("宜蘭","1"));
        area.options.add(new Option("台北","2"));
        area.options.add(new Option("新北","3"));
        area.options.add(new Option("桃園","4"));
        area.options.add(new Option("新竹縣","5"));
        area.options.add(new Option("新竹市","6"));
    }
    else if(index==2){
        area.options.length = 0;
        area.options.add(new Option("苗栗","0"));
        area.options.add(new Option("台中","1"));
        area.options.add(new Option("彰化","2"));
        area.options.add(new Option("南投","3"));
        area.options.add(new Option("雲林","4"));
    }
    else if(index==3){
        area.options.length = 0;
        area.options.add(new Option("嘉義縣","0"));
        area.options.add(new Option("嘉義市","1"));
        area.options.add(new Option("台南","2"));
        area.options.add(new Option("高雄","3"));
        area.options.add(new Option("屏東縣","4"));
    }
    else if(index==4){
        area.options.length = 0;
        area.options.add(new Option("花蓮","0"));
        area.options.add(new Option("台東","1"));
    }
    else if(index==5){
        area.options.length = 0;
        area.options.add(new Option("澎湖","0"));
        area.options.add(new Option("蘭嶼","1"));
        area.options.add(new Option("綠島","2"));
        area.options.add(new Option("小琉球","3"));
        area.options.add(new Option("金門","4"));
        area.options.add(new Option("連江","5"));
    }
}

