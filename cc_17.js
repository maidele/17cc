// Task 1: Create a Customer Class
class Customer {

    constructor(name, email) {
      this.name = name;
      this.email = email;
      this.purchaseHistory = [];
    }// properties of a custoner 
  
    addPurchase(amount) {
      this.purchaseHistory.push(amount);
    }
  // adds customers
    getTotalSpent() {
      return this.purchaseHistory.reduce((total, amount) => total + amount, 0);
    }
  }// return amount that spent in total
  
  // 
  // log for new customer and total spent
  const customer1 = new Customer('Jess Doe', 'jess@gmail.com');
  customer1.addPurchase(50);
  customer1.addPurchase(100);
  console.log(`${customer1.name} total spent: $${customer1.getTotalSpent()}`);
  
  // Task 2:
class SalesRep {
    constructor(name) {
      this.name = name;
      this.clients = [];
    }//properties for salesrep

     addClient(customer) {
      this.clients.push(customer);
    }//adds customer

     getClientTotal(name) {
      const client = this.clients.find(client => client.name === name);
      return client ? client.getTotalSpent() : 50;
    }
  }//finds name of client

   // Logging Test #2
  const salesRep = new SalesRep('Jessica Will');
  salesRep.addClient(customer1);
  
  console.log(`spent by Alice in total: $${salesRep.getClientTotal('Alice')}`);

 

 
 

