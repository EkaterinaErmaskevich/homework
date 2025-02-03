var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",


    };

    price: function(){ for (let key in services)
        console.log(key + services[key])
        return('Price: ')
    }
    minPrice: function(){
        return('Min price: ')
    }
    maxPrice: function(){
        return('Max price: ')
    }
    if ("сушка" in services)
    console.log("Така послуга вже є");
    else 
    console.log("Така послуга вже є");
    
    
    
    //slice