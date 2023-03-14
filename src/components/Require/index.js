// const express = require('express');
// const app = express();
// const port = 3000;

// app.use(express.json());

// let cartItems = [];

// app.get('/cart', (req, res) => {
//   res.json(cartItems);
// });

// app.post('/cart', (req, res) => {
//   const item = req.body;
//   cartItems.push(item);
//   res.status(201).json(item);
// });

// app.delete('/cart/:id', (req, res) => {
//   const id = req.params.id;
//   cartItems = cartItems.filter(item => item.id !== id);
//   res.sendStatus(204);
// });

// app.listen(port, () => {
//   console.log(`Server listening at http://localhost:${port}`);
// });
