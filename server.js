var express = require('express');
myapp = express();
var expressStaticGzip = require("express-static-gzip");
var google_crawler = require("google-crawler");
var path	= require("path");
var fs = require("fs");
var https = require("https");
var http=require('http');
var nodemailer = require("nodemailer");
var mongoose = require("mongoose");

myapp.use(expressStaticGzip
    (__dirname + '/public',
        {
            enableBrotli: true,
        }
    )
);
myapp.use(express.static(__dirname + '/public'));

myapp.listen(8080,function()
{
	console.log('server is running');
});



