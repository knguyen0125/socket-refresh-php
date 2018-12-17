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