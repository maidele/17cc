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
  // logging for new customer and total spent
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

 

//Task 3:


class VIPCustomer extends Customer {
    constructor(name, email, vipLevel) {
      super(name, email);
      this.vipLevel = vipLevel;
    }
     getTotalSpent() {
      const total = super.getTotalSpent();
      
      return total + (total * .1);
    }
  }//vip details 
   // Test Task 3
  const vipCustomer = new VIPCustomer('Bill', 'bill@gmail.com', 'Gold');
  vipCustomer.addPurchase(200);
  vipCustomer.addPurchase(300);
  console.log(`${vipCustomer.name}total is this amount including the bonus: $${vipCustomer.getTotalSpent()}`);
 
 

