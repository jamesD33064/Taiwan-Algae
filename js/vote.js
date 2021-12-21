var sure=document.getElementById("sure");

function sure_click(){
    var obj=document.getElementById("frontselect_1");
    var area=document.getElementById("frontselect_2");
    var index_1 = obj.selectedIndex;
    var index_2 = area.selectedIndex;
    if(index_1==0){
        $("#vote_modal").modal("show");
    }
    else if(index_1==1){
        if(index_2==0){

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

