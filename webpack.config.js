const path =require('path');
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

//export
module.exports={
    entry: './js/main.js',//파일읽어드리는 시작점
    //parcel main.js 와 비슷하다 
    
    //결과물(번들)을 반환하는 설정
    output:{
        //path: path.resolve(__dirname,'dist') ,
        //filename:'main.js' , //entry에서 만든게 들어감
        clean:true
    },
    module: {
        rules: [
            {
                test:/\.s?css$/,
                use:[
                    'style-loader',//html에 스타일 삽입 가능하게
                    
                    'css-loader',//애가 먼저 해석됨!!!
                    'postcss-loader',
                    'sass-loader'
                    //import로 js에 가져온 css를 해석함! 
                ]
            },
            {
                test:/\.js$/,
                use:[
                    'babel-loader'
                ]
            }
        ]
    },

    //번들링후 결과물의 처리방식등 다양한 플러그인들을 실행
    plugins: [
        new HtmlPlugin({
            template: './index.html'
        }), //생성자 함수 실행해서 값반환
        new CopyPlugin({
            patterns:[//배열인 이유->여러개의 경로 입력가능하게 하기 위해서
                {from:'static'}
            ]
        })
    ],
    //devServer: {
      //  host: 'localhost'
    //}

}