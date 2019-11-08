// number random
function nRand(n,x){
    return Math.floor(Math.random()*n+x)
}

// array random diversi fra loro
function arrRand (limit, arr,n,x){
    var i =0;
    while (i <= limit){
        var y = nRand(n,x);
        if( chkDouble(arr, y) == false){
            arr.push(y)
            i++
        }
    }
}
//controlla se esiste un indice in un array
function chkDouble(arr, num){
    if(arr.indexOf(num)>=0){
        return true
    } else { 
        return false 
    }
}

