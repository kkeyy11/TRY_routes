const ymk = { //OBJECT OR CLASS ATA TAWAG DINE
    index:(req, res)=>{  //METHOD 1 yung name ng method is nakalagay sa router
        res.render('index'); //the names inside the quotes are the names na nasa loob ng views folder

    },
    social:(req, res)=>{ //METHOD 2
        res.render('social');

    },
    personalinfo:(req, res)=>{ //METHOD 3
        res.render('personalinfo');

    },
    gameinfo:(req, res)=>{
        res.render('gameinfo');

    },
    special:(req, res)=>{
        res.render('special');

    }

};

module.exports = ymk;