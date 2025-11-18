function formatValue(value: unknown) {
  if (typeof value === "string") {
    return value.toUpperCase() + ";";
  } else if (typeof value === "number") {
    return value * 10 + ";";
  } else if (typeof value === "boolean") {
    return String(!value) + ";";
  }
}

function getLength(input: unknown) {
  if (typeof input === "string") {
    return input.length + ";";
  } else if (Array.isArray(input)) {
    return input.length + ";";
  }
}

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

type Item = {
  title: string;
  rating: number;
};

function filterByRating(items: Item[]): Item[] {
  return items.filter(
    (item) => item.rating >= 4 && item.rating >= 0 && item.rating <= 5
  );
}

const books = [
  { title: "Book A", rating: 4.8 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];

type UserInfo = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

function filterActiveUsers(items: UserInfo[]): UserInfo[] {
  return items.filter((item) => item.isActive === true);
}

const users = [
  { id: 1, name: "Rakib", email: "rakib@example.com", isActive: true },
  { id: 2, name: "Asha", email: "asha@example.com", isActive: false },
  { id: 3, name: "Rumi", email: "rumi@example.com", isActive: true },
];

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(book: Book) {
  const active = book.isAvailable ? "Yes" : "No";

  console.log(
    `Title: ${book.title}, Author: ${book.author}, Publish: ${book.publishedYear}, Available: ${active}`
  );
}

const myBook: Book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  publishedYear: 1925,
  isAvailable: false,
};

function getUniqueValues(
  array1: (number | string)[],
  array2: (number | string)[]
): (number | string)[] {
  const result: (number | string)[] = [];
  const together = [...array1, ...array2];

  for (let i = 0; i < together.length; i++) {
    const current = together[i];

    let duplicate = false;

    for (let j = 0; j < result.length; j++) {
      if (result[j] === current) {
        duplicate = true;
        break;
      }
    }
    if (!duplicate) {
      result[result.length] = current;
    }
  }
  return result;
}

type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

function calculateTotalPrice(products: Product[]): number {
  return products
    .map((product) => {
      const total = product.price * product.quantity;
      const discountAmount = product.discount
        ? total * (product.discount / 100)
        : 0;
      return total - discountAmount;
    })
    .reduce((sum, item) => sum + item, 0);
}
