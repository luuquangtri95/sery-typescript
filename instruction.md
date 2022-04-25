## lưu ý về cách đặt tên của interface, enum và type

- đặt tên theo PascalCase
- không sử dụng prefix "I"

```js
interface Person {
  name: string;
  age: number;
  speak(lang: string): void;
  spend(amount: number): number;
}

type StringOrNumber = string | number;
```
