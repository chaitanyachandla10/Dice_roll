const express = require('express');
myapp = express();
const expressStaticGzip = require("express-static-gzip");
const google_crawler = require("google-crawler");
const path	= require("path");
const fs = require("fs");
const https = require("https");
const http=require('http');
const nodemailer = require("nodemailer");
const mongoose = require("mongoose");
const port = 5100
myapp.use(expressStaticGzip
    (__dirname + '/public',
        {
            enableBrotli: true,
        }
    )
);
myapp.use(express.static(__dirname + '/public'));

http.createServer(myapp).listen(80,function()
	{
		console.log("https is running");
	});


