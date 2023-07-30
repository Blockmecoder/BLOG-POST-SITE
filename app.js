const Express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');
const app = Express();
const posts = [];
const abtn = "abt us is veijbjhvhghkghgcgcngcgnvc ngv cmhgv.kjhv.jnb .jhbv /k.,";
const cntn = 'contact us is jhbbjhjhvhgmhcngcgncngcngvcvjkgjfxdngfmch,jkgjfdghkg kfhj ,gvhj hhg kvfjt yg hbv mgftyt uhb vgk gyuj bvgfk yuijy b.b.jhh';
const homen = "lorem ipssujmbtiching the president of the united stsar3dwsdkdflsdkfklndfkjndkjn vdknds ldjljk nsldm"
const ejs = require("ejs");
let x;

const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', "ejs")
app.use(Express.static("public"));

// going for link clicked to HOME page 

app.get('/', function (req, res) {
    res.render("home", { fuck: homen, fucku: posts });
})

// going for link clicked to about us  

app.get('/about_us', function (req, res) {
    res.render("about", { fuck: abtn });
})

// going for link clicked to contact us  

app.get('/contact_us', function (req, res) {
    res.render("contact", { fuck: cntn });
})

// going to file compose.ejs 

app.get('/compose', function (req, res) {
    res.render("compose");
})

// again coming back to home route 

app.post('/', function (req, res) {
    const post = {
        title: req.body.Compose0,
        postage: req.body.Compose1,
           }
    posts.push(post); 
    res.render("home", { fuck: homen, fucku: posts });
})

// going for different pages via different routes for ejs using express 

app.get('/TECHno_BLOG/:x', function (req, res) {
    let mesg = _.lowerCase(req.params.x);
    posts.forEach(function (post) {
        let t = _.lowerCase(post.title);
        if (mesg == t) {
            res.render("post",{title : post.title, postage: post.postage })
        }  
    });
});

app.listen(port, function () { console.log("chalu h bhidu") })
