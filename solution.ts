function formatValue(value: unknown) {
  if (typeof value === "string") {
    return value.toUpperCase() + ";";
  } else if (typeof value === "number") {
    return value * 10 + ";";
  } else if (typeof value === "boolean") {
    return String(!value) + ";";
  }
}

/*
Sample Input:
console.log(getLength('typescript'));
console.log(getLength([10, 20, 30, 40]));

Sample Output:
10;
4;
*/
function getLength(input: unknown) {
  if (typeof input === "string") {
    return input.length + ";";
  } else if (Array.isArray(input)) {
    return input.length + ";";
  }
}

/*
Sample Input:
const person1 = new Person('John Doe', 30);
console.log(person1.getDetails());

const person2 = new Person('Alice', 25);
console.log(person2.getDetails());

Sample Output:
'Name: John Doe, Age: 30';
'Name: Alice, Age: 25';
*/

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

// const person1 = new Person('John Doe', 30);
// console.log(person1.getDetails());

// const person2 = new Person('Alice', 25);
// console.log(person2.getDetails());

/*
Sample Input:
const books = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 },
];

console.log(filterByRating(books));
Sample Output:
[
  { title: 'Book A', rating: 4.5 },
  { title: 'Book C', rating: 5.0 },
];
*/
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
  { title: "Book A", rating: 5.5 },
  { title: "Book B", rating: 4.2 },
  { title: "Book D", rating: 4.0 },
  { title: "Book E", rating: 3.9 },
  { title: "Book C", rating: 5.0 },
];

// console.log(filterByRating(books));

/*
Sample Input:
const users = [
  { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
  { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
  { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];

console.log(filterActiveUsers(users));

Sample Output:
[
  { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
  { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];
*/

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

// console.log(filterActiveUsers(users));

/*
Sample Input:
const myBook: Book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  publishedYear: 1925,
  isAvailable: true,
};

printBookDetails(myBook);
Sample Output:
Title: The Great Gatsby, Author: F. Scott Fitzgerald, Published: 1925, Available: Yes
*/

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
// printBookDetails(myBook);

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
