 export const sampleMiddleWare = async (req,res,next) => {
    console.log("I am sample MiddleWare 1");
    next();

};

export const sampleMiddleWare2 = async (req,res,next) => {
    console.log("I am sample MiddleWare 2");
    next();

};
