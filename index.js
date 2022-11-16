function getValue() {
    var inputValue = document.getElementById("text-box").value
    intVal=parseInt(inputValue)
    


    if (typeof(intVal) === 'number') {
        if (inputValue%4===0) {
            if (inputValue%100===0) {
                if (inputValue%400===0) {
                    document.getElementById("confirmation-text").innerHTML="The year "+inputValue+" is a leap year." 
                }else {
                    document.getElementById("confirmation-text").innerHTML="The year "+inputValue+" is not a leap year."
                }
            } else{
                document.getElementById("confirmation-text").innerHTML="The year "+inputValue+" is a leap year."
            }
        } else {
            document.getElementById("confirmation-text").innerHTML="The year "+inputValue+" is not a leap year."
        }
    } else{
        document.getElementById("confirmation-text").innerHTML="You have entered an invalid value."
    }
        
 }
