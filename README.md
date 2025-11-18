## 1. টাইপ ও ইন্টারফেস এর মধ্যে পাথক্য:

ইন্টারফেস এবং টাইপ উভয়ই অবজেক্টের আকার সংজ্ঞায়িত করতে ব্যবহার করা তবে এদের মধ্যে কিছু পাথক্য রয়েছে।

**টাইপ( type)** :
টাইপ কীওয়াড হলো বিভিন্ন ধরনের কাস্টম টাইপ নাম সংজ্ঞায়িত করতে ব্যবহার হয়। এর মধ্যে রয়েছে প্রিমিটিভ, অবজেক্ট, ফাংশন সহ বিভিন্ন ধরনের জন্য টাইপ নাম সংজ্ঞায়িত করে ব্যবহার করতে হয়।

টাইপ তুলনামূলকভাবে বেশি flexible হয়ে union, tuple, primitive সবকিছু define করতে পারে।

**ইন্টাফেস (interface)** :
ইন্টারফেস কীওয়াডটি ফাংশন এবং অবজেক্ট কাঠামো সংজ্ঞায়িত করতে ব্যবহার হয়।

interface সাধারণত object-এর গঠন পরিষ্কারভাবে বর্ণনা ও সহজে বাড়ানোর জন্য ব্যবহার হয় এবং এতে extends দিয়ে খুব স্বাভাবিকভাবে নতুন property যোগ করা যায়।

## 3. Explain the difference between any, unknown, and never types in TypeScript

**Any** :

1. any হলো TypeScript-এর টাইপ যেটা সবকিছু গ্রহণ করে।
2. যে কোনো টাইপের ভ্যালু রাখতে পারো, আর TypeScript কোনো ভুল দেখাবে না।
3. এতে type safety থাকে না।

```ts
let data: any;
data = 5;
data = "hello";
data = true;
```

**unknown**

1. unknown হলো TypeScript-এর টাইপ যা যেকোনো মান রাখতে পারে, কিন্তু তুমি সেটা ব্যবহার করার আগে টাইপ চেক করতে হবে।

```ts
const value = (input: unknown) => {
  if (typeof input === "string") {
    console.log(input.toUpperCase());
  } else if (typeof input === "number") {
    console.log(input * 10);
  } else if (typeof input === "boolean") {
    console.log(String(!input));
  }
};

value("hello world");
value(5);
value(true);
```

**never**

1. never হলো এমন একটি টইপ যা কখনও কোনো value ধারন করে না।
2. এটি হল একটি ফাংশন যা কখনো মান রিটান করে না,এটি সবসময় errorদেয়।

```ts
function throwError(message: string): never {
  throw new Error(message);
}
```
