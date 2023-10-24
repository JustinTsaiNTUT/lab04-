    var x = document.getElementsByClassName("td1")
    var y = document.getElementsByClassName("th1")
    var z = document.getElementsByClassName("tab")
    
    function changeColor1() {
        for (var i = 0; i < 6; i++) {
            x[i].style.backgroundColor ='aqua';
        }
        
    }
    function changeColor2() {
        for (var i = 0; i < 6; i++) {
            x[i].style.backgroundColor ='crimson';
            x[i].style.color ='black';
        }  
    }
    function changeColor3() {
        for (var i = 0; i < 6; i++) {
            x[i].style.backgroundColor ='darkblue';
            x[i].style.color ='white';
        }
    }
    function changeColor4() {
        for (var i = 0; i < 6; i++) {
            x[i].style.backgroundColor ='lemonchiffon';
            x[i].style.color ='black';
        }
    }

    function changewi200() {
        for (var i = 0; i < 6; i++) {
            x[i].style.width='200px';
        }
        for (var i = 0; i < 3; i++) {
            y[i].style.width='200px';
        }   
    }
    function changewi500() {
        for (var i = 0; i < 6; i++) {
            x[i].style.width='500px';
        }
        for (var i = 0; i < 3; i++) {
            y[i].style.width='500px';
        }  
        
    }
    function changebs1() {
        document.getElementById("tab1").style.borderSpacing="1px";
    }
    function changebs10() {
        document.getElementById("tab1").style.borderSpacing="10px";
        
    }
    function changebs20() {
        document.getElementById("tab1").style.borderSpacing="20px";
        
    }