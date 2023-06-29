window.onload= function(){
    
    // console.log("onload is working")
    function checkInp(num) {
        if(!isNaN(num)){
            // console.log("yas numba")
            const unfold = (accumulator, length) => length <= 0 ? accumulator : unfold([length, ...accumulator], length -1)
            const result= unfold([],num)
            return result;
        // return value+ numbers before value
    }
        else {
            // console.log("nope numba")
            return false;
        }
    }
}



// for (let i=num; i=0;index-=1)



// for (let i=num; i=0;index-=1)


// <= number