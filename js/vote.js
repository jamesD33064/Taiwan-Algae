var sure=document.getElementById("sure");

function sure_click(){
    var obj=document.getElementById("frontselect_1");
    var area=document.getElementById("frontselect_2");
    var index_1 = obj.selectedIndex;
    var index_2 = area.selectedIndex;
    if(index_1==0){

    }
    else if(index_1==1){
        if(index_2==0){

        }
    }
    else if(index_1==2){
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
        area.options.add(new Option("台北","1"));
        area.options.add(new Option("新北","2"));
        area.options.add(new Option("桃園","3"));
        area.options.add(new Option("新竹","4"));
    }
    else if(index==2){
        area.options.length = 0;
        area.options.add(new Option("台中","0"));
    }
    else if(index==3){
        area.options.length = 0;
        area.options.add(new Option("台南","0"));
    }
    else if(index==4){
        area.options.length = 0;
        area.options.add(new Option("花蓮","0"));
        area.options.add(new Option("台東","1"));
    }
}

