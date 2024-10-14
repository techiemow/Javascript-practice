// Simulating async tasks with callbacks

function getUser(userId, callback) {
    setTimeout(() => {
      console.log('Getting user from the database...');
      callback({ userId: userId, name: 'John' });
    }, 1000);
  }
  
  function getOrders(user, callback) {
    setTimeout(() => {
      console.log(`Getting orders for ${user.name}...`);
      callback(['order1', 'order2', 'order3']);
    }, 1000);
  }
  
  function getOrderDetails(order, callback) {
    setTimeout(() => {
      console.log(`Getting details for ${order}...`);
      callback({ orderId: order, price: 100 });
    }, 1000);
  }
  
  // Using the functions, causing callback hell
  getUser(1, (user) => {
    getOrders(user, (orders) => {
      getOrderDetails(orders[0], (orderDetails) => {
        console.log(orderDetails);
      });
    });
  });
  