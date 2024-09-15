import multer from "multer"


const stroage =  multer.diskStorage({
    destination: function(req,file, cb)
    {
        cb(null,"./public/temp")
    },
    filename: function(req, file, cd){
        cb(null, file.originalname)
    }
})


const upload = multer({storage: storage})