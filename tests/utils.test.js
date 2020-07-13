const mocha = require("mocha")
const chai = require("chai")
const utils = require("../utils")
const { should, util } = require("chai")
const expect = chai.expect

// ========================================================
// NOTE: https://mochajs.org/#arrow-functions
// Passing arrow functions (“lambdas”) to Mocha is discouraged.
// Lambdas lexically bind this and cannot access the Mocha context.
// ========================================================

it("should say hello", function() {
  const hello = utils.sayHello()
  expect(hello).to.be.a("string")
  expect(hello).to.equal("Hello")
  expect(hello).with.lengthOf(5)
})

// ========================================================
// Level 1 Challenges
// 1. Write the pending tests check that they are pending, like this:
//    it("should do something that you want done")
// 2. Next, write the test and see that it fails.
// 3. Write the code in the utils.js file to make the test pass.
// 4. Finally see if you would like to refactor your code at all.
// This is called "Red-Green-Refactor"
// ========================================================
it("Should return area", function() {
  const area = utils.area(5, 6)
  expect(area).to.be.a("number")
  expect(area).to.be.equal(30)
})

it("Should return perimeter", function() {
  const perimter = utils.perimeter(5, 6)
  expect(perimter).to.be.equal(22)
  expect(perimter).to.be.gte(0)
})

it("should return circleArea", function() {
  const area = utils.circleArea(5)
  expect(area).to.be.equal(78.55)
})



// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: The following unimplemented test cases are examples
// of "Pending Tests" in Chai. Someone should write these
// tests eventually.
// ========================================================

beforeEach((done) => {
  utils.clearCart()
  done()
})

it("Should create a new (object) Item with name and price", function() {
  const item = utils.createItem("apple", 0.99)
  expect(item).to.be.a("object")
  expect(item).to.have.property("name", "apple")
  expect(item).to.have.property("price", 0.99)
  expect(item).to.have.property("quantity", 1)
})

it("Should return an array containing all items in cart", function() {
  const cart = utils.getShoppingCart()
  expect(cart).be.a("array")
  expect(cart).length.to.be.gte(0)

})


it("Should add a new item to the shopping cart", function() {
  const item = utils.createItem("IceCream", 0.99)
  utils.addItemToCart(item)
  const cart = utils.getShoppingCart()
  expect(cart.length).to.equal(1)
  // expect(newLocal[0]).to.have.property('name', 'IceCream');


})

it("Should return the number of items in the cart", function() {
  const item = utils.createItem("IceCream", 0.99)
  utils.addItemToCart(item)
  const cart = utils.getShoppingCart()
  expect(cart.length).to.equal(1)

  
})

it("Should remove items from cart", function() {
  // Create 3 items
  const item = utils.createItem("IceCream", 0.99)
  const item2 = utils.createItem("chips", 0.89)
  const item3 = utils.createItem("water", 1.00)
  
  // Add items to shopping cart
  const cart = utils.getShoppingCart()
  utils.addItemToCart(item)
  utils.addItemToCart(item2)
  utils.addItemToCart(item3)

// Check Length of cart
  expect(cart.length).to.equal(3)
//Remove all items from list
  utils.removeItemFromCart(item)
  utils.removeItemFromCart(item2)
  utils.removeItemFromCart(item3)
  expect(cart.length).to.equal(0)
})

// ========================================================
// Stretch Challenges
// ========================================================

// it("Should update the count of items in the cart")

// it("Should validate that an empty cart has 0 items")

// it("Should return the total cost of all items in the cart")
