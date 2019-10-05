const utils = require('../app/bookshop_utils');

describe("utils.addVAT", () => {
  test("returns 36 when passed 30", () => {
    expect(utils.addVAT(30)).toBe(36);
  });
  
  test("returns 120 when passed 100", () => {
    expect(utils.addVAT(100)).toBe(120);
  });

  test("returns 118.8 when passed 99", () => {
    expect(utils.addVAT(99)).toBe(118.8);
  });
});

describe("utils.getFullName", () => {
  test("returns Haruki Murakami when passed Haruki and Murakami", () => {
    expect(utils.getFullName("Haruki", "Murakami")).toBe("Haruki Murakami");
    });
});

describe("utils.makeHalfPrice", () => {
  test("returns 20 when passed 10", () => {
    expect(utils.makeHalfPrice(20)).toBe(10);
  });

  
});


describe("utils.countBooks", () => {
  test("returns Total number of Books when passed Book Titles", () => {
    const bookTitles = ["x", "s", "l"]
    expect(utils.countBooks(bookTitles)).toBe(3);
  });
});

describe("utils.isInStock", () => {
test("returns true if the title is in stock", () => {
  const book = {
    title: "The Stone Diaries",
    author: "Carol Shields",
    yearOfPublication: 1993,
    quantity: 9
  };

  expect(utils.isInStock(book)).toBe(true);
});
});

describe("utils.getTotalOrderPrice", () => {
  test("returns price plus quantity when added the VAT", () => {
    expect(utils.getTotalOrderPrice(10, 2)).toBe(24);
    expect(utils.getTotalOrderPrice(5, 1)).toBe(6);
    expect(utils.getTotalOrderPrice(100, 5)).toBe(600);
  });
});

