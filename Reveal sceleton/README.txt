You need grunt to run grunt tasks, so, install it globally using
npm i -g grunt
npm i -g grunt-cli

1. To create your presentation, navigate to 'master' folder and start editing 'index.html' file.
Read 'REVEAL SYNTAX.txt' for more information about editing this file.
IMPORTANT NOTE!!!
To configure correct socket.io server, you need to set 'url' parameter at Reveal.intialize() in 'multiplex' field
to your local machine full name and port 1948 (e.g. epbyminw3993.minsk.epam.com:1948)
If your local machine name comes without dots, you need to write 2 colons after name (e.g. localhost::1948)

2. When finished, navigate to 'scripts' folder and run 'build.cmd'. 
THIS FILE WANTS TO BE RUN ONLY ONES. 
This will install all dependencies, run grunt tasks and create 'client' folder.
If you want to re-create client folder with cmd, feel free to start 'build.cmd'. 
In other cases it is prefered to copy files manually and then run 'start-servers.cmd'

3. To set settings for client, navigate to 'client' folder and start editing 'index.html'.
At the bottom of <body> find Reveal.initialize() and edit 'multiplex' setting:
	- change 'secret' to null;
	- if you care about security (doubt it), you will need to generate secret/token unique pair.
	  To do so visit localhost:1948/token after starting socket.io server and copypaste secret to master
	  presentation and token both to master and client.
Then edit 'dependencies' setting:
	- change 'plugin/multiplex/master.js' to 'plugin/multiplex/client.js'

4. You should host your client presentaiton on a publicly accessible static file server. 
Examples include: GitHub Pages, Amazon S3, Dreamhost, Akamai, etc.
To host and configure your client presentation on GitHub pages, follow next steps 
(http://pages.github.com provides the same instruction):
	- create github account
	- create new repository called as [username].github.io
	- push 'client' folder to repository (git init -> 
git remote add origin https://github.com/[username]/[username].github.io.git -> git pull origin master -> git add . -> git commit -m "First commit" -> git push -u origin master)

5. Start 'start-servers.cmd'. 
It will start static and socket servers and will open Google Chrome on localhost:8080.

6. Clients will see your presentation on [username].github.io and you will be able to remote control it,
if you are both located in the same network

