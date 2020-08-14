const distance = {
    headphones: {
        cd: {
            from: "left",
            to: "center"
        }, 
        sunglasses: {
            from: "left",
            to: "right"
        } 
    },
    cd: {
        headphones: {
            from: "center",
            to: "left"
        } , 
        sunglasses: {
            from: "center",
            to: "right"
        } 
    },
    sunglasses: {
        cd: {
            from: "right",
            to: "center"
        } ,
        headphones: {
            from: "right",
            to: "left"
        } 
    },
    plane: {
        rocket: {
            from: "left",
            to: "center"
        }, 
        car: {
            from: "left",
            to: "right"
        } 
    },
    rocket: {
        plane: {
            from: "center",
            to: "left"
        } , 
        car: {
            from: "center",
            to: "right"
        } 
    },
    car: {
        rocket: {
            from: "right",
            to: "center"
        } ,
        plane: {
            from: "right",
            to: "left"
        } 
    },
    coffee: {
        beer: {
            from: "left",
            to: "center"
        }, 
        lemon: {
            from: "left",
            to: "right"
        } 
    },
    beer: {
        coffee: {
            from: "center",
            to: "left"
        } , 
        lemon: {
            from: "center",
            to: "right"
        } 
    },
    lemon: {
        beer: {
            from: "right",
            to: "center"
        } ,
        coffee: {
            from: "right",
            to: "left"
        } 
    }
}