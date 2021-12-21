var sure=document.getElementById("sure");

function sure_click(){
    var obj=document.getElementById("frontselect_1");
    var area=document.getElementById("frontselect_2");
    var index_1 = obj.selectedIndex;
    var index_2 = area.selectedIndex;
    $("#rate_modal").modal("show");
    const name = document.querySelector("#area_name");
    var r = document.querySelector("#rateGra");
    
    if(index_1==0){
        name.textContent = "花蓮";
    }
    else if(index_1==1){
        if(index_2==0){
            name.textContent = "基隆";
            r.style = "background: conic-gradient(#FFCDB2 0, #FFCDB2 40%, #B5838D 5%, #B5838D)"    
        }
        else if(index_2==1){
            name.textContent = "宜蘭";
            r.style = "background: conic-gradient(#FFCDB2 0, #FFCDB2 60%, #B5838D 5%, #B5838D)"    
        }
        else if(index_2==2){
            name.textContent = "台北";
        }
        else if(index_2==3){
            name.textContent = "新北";
        }
        else if(index_2==4){
            name.textContent = "桃園";
        }
        else if(index_2==5){
            name.textContent = "新竹縣";
        }
        else if(index_2==6){
            name.textContent = "新竹市";
        }
    }
    else if(index_1==2){
        if(index_2==0){

        }
    }
    else if(index_1==3){
        if(index_2==0){

        }
    }
    else if(index_1==4){
        if(index_2==0){

        }
    }



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

