var inputLabel = document.getElementById('inputLabel');
     
    function pushBtn(obj) {
         
        var pushed = obj.innerHTML;
         
        if (pushed == '=') {
            // Calculate
            inputLabel.innerHTML = eval(inputLabel.innerHTML);
             
        } else if (pushed == 'AC') {
            // All Clear
            inputLabel.innerHTML = '0';
             
        } else if(pushed == 'C'){
            // To delete one value
            let hello = inputLabel.innerHTML;
            inputLabel.innerHTML = hello.slice(0, -1); 
        } else {
            if (inputLabel.innerHTML == '0') {
                inputLabel.innerHTML = pushed;
                 
            } else {
                inputLabel.innerHTML += pushed;   
            }
        }
    }

    
