function shortIt(bigUrl){
    var pattern = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
        if (pattern.test(bigUrl)) {
            alert("Url is valid");
            return true;
        } 
            alert("Url is not valid!");
            return false;
}