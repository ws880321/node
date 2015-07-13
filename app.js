var express=require('express')
var path=require('path')
var port= process.env.PORT || 3000
var app=express()

app.set('views','./views/pages')
app.set('view engine','jade')
// app.use(express.bodyParser())
app.use(express.static(path.join(__dirname,'bower_componets')))
app.use(express.static('bower_components'));
app.listen(port)


// index page

app.get('/',function(req,res){
	res.render('index',{
		title:'ws 首页',
		movies:[{
			title:'机械战警',
			_id: 1,
			poster:'http//r3.ykimg.com/05160000530EEB63675839160D0B79D5'
		},{
			title:'机械战警',
			_id:2,
			poster:'http//r3.ykimg.com/05160000530EEB63675839160D0B79D5'
		},{
			title:'机械战警',
			_id:3,
			poster:'http//r3.ykimg.com/05160000530EEB63675839160D0B79D5'
		},{
			title:'机械战警',
			_id:4,
			poster:'http//r3.ykimg.com/05160000530EEB63675839160D0B79D5'
		},{
			title:'机械战警',
			_id:5,
			poster:'http//r3.ykimg.com/05160000530EEB63675839160D0B79D5'
		},{
			title:'机械战警',
			_id:6,
			poster:'http//r3.ykimg.com/05160000530EEB63675839160D0B79D5'
		},{
			title:'机械战警',
			_id:7,
			poster:'http//r3.ykimg.com/05160000530EEB63675839160D0B79D5'
		}]
	})
})
app.get('/admin/list',function(req,res){
	res.render('list',{
		title:'ws 列表',

		movies:[{
		    _id :1,
		    title: '机械战警',
		    doctor:'何塞.帕迪利亚',
		    year:2014,
		    country:'美国',
		    language:'英语',
		    poster: 'http://tu1.xiamp4.com/20140210202546153.jpg',
		    flash: 'http://player.youku.com/player.php/sid/XNJA1Njc0NTUy/v.swf',
		    summary:'我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述'
		},{
		    _id :2,
		    title: '机械战警',
		    doctor:'何塞.帕迪利亚',
		    year:2014,
		    country:'美国',
		    language:'英语',
		    poster: 'http://tu1.xiamp4.com/20140210202546153.jpg',
		    flash: 'http://player.youku.com/player.php/sid/XNJA1Njc0NTUy/v.swf',
		    summary:'我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述'
		}]
	})
})
app.get('/admin',function(req,res){
	res.render('admin',{
		title:'ws 后台',		
		movie:[{
		    title: '',
		    doctor:'',
		    year:'',
		    country:'',
		    language:'',
		    poster:'',
		    flash: '',
		    summary:''
		}]
	})
})
app.get('/movie/:id',function(req,res){
	res.render('detail',{
		title:'ws 详情',
		movie:{
		    _id :1,
		    title: '机械战警',
		    doctor:'何塞.帕迪利亚',
		    year:2014,
		    country:'美国',
		    language:'英语',
		    poster: 'http://tu1.xiamp4.com/20140210202546153.jpg',
		    flash: 'http://player.youku.com/player.php/sid/XNJA1Njc0NTUy/v.swf',
		    summary:'我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述'
		}
	})
})
console.log('nodeM started on port ' + port)