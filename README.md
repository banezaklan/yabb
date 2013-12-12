YABB
====

Yet Another Backbone Boilerplate

After couple of hours trying to get the boilerplate at http://backboneboilerplate.com/ to work with the latest version of backbone, I went the "natural" way and used it as foundation to build my own. 
I started by understanding how RequireJS works, and went on moving parts of the original code to the new project, while keeping everything working. 
Along the way I made some changes here and there to make it look and work like I'm most comfortable. Be warned, it is very, very basic and consists of a main layout with top menu, a welcome page and a footer. It doesn't contain the compiler/minifier part, so it's something to think about.

It is fairly simple code, and you can change it to your liking. It relies on several JS libs and Bootstrap 3, you can look in js/lib. As a dev web server, I used a very simple NodeJS server with Express library.

Getting started
===============

Just copy and unpack everything to a folder. In order to run NodeJS web server, you need NodeJs setup. 

Go to the /server folder and run:
<pre>
node server.js
</pre>

You should get something like: 
<pre>
Server listening on http://localhost:3000
</pre>

If you navigate to the URL, you should get a very simple bootstrap template with top menu, some content and a footer. 
If you got it, that is all it's going to do :-) 

Any problems should appear in the JS console of your favorite browser. 

Enjoy!
