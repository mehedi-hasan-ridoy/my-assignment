$(document).ready(function(){

                    $("button").click(function(){

                                 $(".box").hide();
                    });
                    $(".dada").click(function(){

                        $(".box").show();
                    });

});
// 

function calculate(){


    var x=document.getElementById("one").value;

    var y=document.getElementById("two").value;

    var z= parseInt(x)+ parseInt(y);

    document.getElementById("result").innerHTML=z;

}      

function calcul(){


    var x=document.getElementById("three").value;
    
    var y=document.getElementById("four").value;
    
    var z= parseInt(x)- parseInt(y);
    
    document.getElementById("result").innerHTML=z;
    
    }   
    
    
    function calcula(){


        var x=document.getElementById("five").value;
        
        var y=document.getElementById("six").value;
        
        var z= parseInt(x)* parseInt(y);
        
        document.getElementById("result").innerHTML=z;
        
        }      

        function calculat(){


            var x=document.getElementById("saven").value;
            
            var y=document.getElementById("eight").value;
            
            var z= parseInt(x)/ parseInt(y);
            
            document.getElementById("result").innerHTML=z;
            
            }      



// 

            function time(){


                var x= document.getElementById("nine").value;

                if(x>=6 && x<=11){

                    document.getElementById("moment").innerHTML ="Good Morning";
                }
                  else if (x>=12 && x<=14){

                    document.getElementById("moment").innerHTML ="Happy Noon";

                  }

                  else if (x>=15 && x<=17){

                    document.getElementById("moment").innerHTML ="Good Afternoon";

                  }


                 else if (x>=18 && x<=24)  {


                                 document.getElementById("moment").innerHTML ="Good Night";


                 }  


                else{

                             document.getElementById("moment").innerHTML="তোমি কথা শোন না ";



                }


   }
