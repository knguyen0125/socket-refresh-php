# Demo of Restarting php pages with Express and Socket.IO

# Start

```bash
# Use nodemon to watch php files
npm dev
# Create a standalone php server
npm php
```

For any pages that you wish to reload on change, add this block to end of php file

```php
<?php include('restart/restartBlock.php') ?>

// OR 

<script src="restart/socket.io.js"></script>
<script src="restart/restart.js"></script>
```

## Standalone projects

Copy restart folder in public to target

Install nodemon, express and socket.io

```bash
yarn add nodemon express socket.io
```

Scripts to run
```bash
# Activate Nodemon to watch the server
yarn nodemon --config public/restart/server.js
# Create local php server
php -S localhost:8080 -t public
```

Link `socket.io.js` (Socket.IO client) and `restart.js` (small script for restart)