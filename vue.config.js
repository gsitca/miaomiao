module.exports={
    devServer:{
        proxy:{
            '/api' : a{
                target : 'http://39.97.33.178',
                changeOrigin : true
            }
        }
    }
}