Falsy Values
In JavaScript, the following values are always considered false in a boolean context:

 - false itself
 - 0 (the number zero)
 - "" or '' (empty string)
 - null (no value)
 - undefined (variable has been declared but not assigned a value)
- NaN (not a number)


Truthy Values
- Any value that is not falsy is considered truthy. Common truthy values include:

- Any non-zero number (positive or negative)
- Any non-empty string
- Any object or array (even empty ones)
- true itself


# Regular Expressions (Regex)

Regular expressions (or regex) are sequences of characters that form search patterns, mainly used to search, match, and manipulate text based on specific patterns. Regex is a powerful tool in programming, allowing you to find and work with text in complex ways.

## 1. Basic Syntax
- **Literal characters**: Letters, numbers, or symbols match themselves. For example, `cat` matches "cat" exactly in a text.
- **Metacharacters**: Special characters that have specific meanings in regex. They include `.` (dot), `*`, `+`, `?`, `^`, `$`, `{}`, `[]`, `()`, `|`, and `\`.
- **Escape character**: The backslash (`\`) is used to "escape" metacharacters, allowing them to be treated as literal characters. For example, `\.` matches a period (`.`) instead of any character.

## 2. Common Metacharacters and Their Meanings
- **`.`** (dot): Matches any single character except newline.
  - Example: `a.b` matches "aab" or "acb" but not "ab".
- **`*`**: Matches zero or more of the preceding character.
  - Example: `ab*` matches "a", "ab", "abb", etc.
- **`+`**: Matches one or more of the preceding character.
  - Example: `ab+` matches "ab", "abb", etc., but not "a".
- **`?`**: Matches zero or one of the preceding character (makes it optional).
  - Example: `colou?r` matches "color" and "colour".
- **`^`**: Asserts the start of a line or string.
  - Example: `^Hello` matches "Hello" at the start of a string.
- **`$`**: Asserts the end of a line or string.
  - Example: `world$` matches "world" at the end of a string.
- **`[]`**: Character set, matches any one of the characters inside.
  - Example: `[aeiou]` matches any vowel.
- **`|`**: Alternation, acts like a logical OR.
  - Example: `cat|dog` matches "cat" or "dog".

## 3. Quantifiers
- **`{n}`**: Matches exactly `n` occurrences.
  - Example: `a{3}` matches "aaa".
- **`{n,}`**: Matches `n` or more occurrences.
  - Example: `a{2,}` matches "aa", "aaa", etc.
- **`{n,m}`**: Matches between `n` and `m` occurrences.
  - Example: `a{2,4}` matches "aa", "aaa", or "aaaa".

## 4. Groups and Ranges
- **Parentheses (`()`)**: Used to group parts of the regex.
  - Example: `(ab)+` matches "ab", "abab", "ababab", etc.
- **Character Ranges**: Inside `[]`, you can specify a range.
  - Example: `[a-z]` matches any lowercase letter.

## 5. Special Sequences
- **`\d`**: Matches any digit (0-9).
- **`\D`**: Matches any non-digit.
- **`\w`**: Matches any word character (alphanumeric + underscore).
- **`\W`**: Matches any non-word character.
- **`\s`**: Matches any whitespace (space, tab, newline).
- **`\S`**: Matches any non-whitespace character.

## 6. Lookaheads and Lookbehinds (Advanced)
- **Lookaheads**: Assert that certain text follows (or does not follow) the match.
  - Positive lookahead: `q(?=u)` matches "q" only if it’s followed by "u".
  - Negative lookahead: `q(?!u)` matches "q" only if it’s not followed by "u".
- **Lookbehinds**: Assert that certain text precedes the match.
  - Positive lookbehind: `(?<=a)b` matches "b" if it’s preceded by "a".
  - Negative lookbehind: `(?<!a)b` matches "b" if it’s not preceded by "a".

## 7. Examples of Practical Usage
- **Email Validation**: `^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$`
- **Phone Numbers**: `^\+?\d{1,3}[-.\s]?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$`
- **URL Validation**: `https?://(www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,6}(/.*)?$`

## 8. Regex in Different Languages
Most programming languages, such as JavaScript, Python, and Java, have built-in support for regex with slight variations in syntax or available functions, making regex versatile across platforms.

Learning regex can greatly improve your ability to handle and process text in your code. Practicing it with real-world examples will help make this powerful tool a go-to solution for complex text matching tasks.



## Summary Table

| Method              | Description                                             | Example Use Case                                    |
|---------------------|---------------------------------------------------------|-----------------------------------------------------|
| `array.indexOf()`    | Returns the index of the first occurrence of an element in an array | `array.indexOf('apple')` → `0`                       |
| `string.indexOf()`   | Returns the index of the first occurrence of a substring in a string | `string.indexOf('fox')` → `16`                       |
| `fromIndex` (optional)| Specifies the index to start the search from            | `array.indexOf('apple', 2)` → `3`                   |



## Math Methods Summary Table

| Method             | Description                                       | Example Use Case                                      |
|--------------------|---------------------------------------------------|-------------------------------------------------------|
| `Math.abs(x)`       | Returns the absolute value of `x`                 | `Math.abs(-5)` → `5`                                  |
| `Math.round(x)`     | Rounds `x` to the nearest integer                | `Math.round(4.6)` → `5`                               |
| `Math.ceil(x)`      | Rounds `x` up to the nearest integer             | `Math.ceil(4.1)` → `5`                                |
| `Math.floor(x)`     | Rounds `x` down to the nearest integer           | `Math.floor(4.9)` → `4`                               |
| `Math.pow(base, exp)`| Returns `base` raised to the power of `exp`       | `Math.pow(2, 3)` → `8`                                |
| `Math.sqrt(x)`      | Returns the square root of `x`                    | `Math.sqrt(16)` → `4`                                 |
| `Math.random()`     | Returns a random number between 0 and 1           | `Math.random()` → `0.1234`                            |
| `Math.max(...args)` | Returns the largest number from the arguments     | `Math.max(1, 2, 3)` → `3`                             |
| `Math.min(...args)` | Returns the smallest number from the arguments    | `Math.min(1, 2, 3)` → `1`                             |
| `Math.sin(x)`       | Returns the sine of `x` (in radians)              | `Math.sin(Math.PI / 2)` → `1`                         |
| `Math.cos(x)`       | Returns the cosine of `x` (in radians)            | `Math.cos(Math.PI)` → `-1`                            |



## HTML Wrapper String Methods Summary Table

| Method               | Description                                                   | Example Use Case                                                |
|----------------------|---------------------------------------------------------------|------------------------------------------------------------------|
| `anchor(name)`        | Wraps the string in an HTML `<a name="name">` anchor tag.     | `'my text'.anchor('myAnchor')` → `<a name="myAnchor">my text</a>` |
| `bold()`              | Wraps the string in an HTML `<b>` tag to make it bold.       | `'my text'.bold()` → `<b>my text</b>`                            |
| `big()`               | Wraps the string in an HTML `<big>` tag to increase font size.| `'my text'.big()` → `<big>my text</big>`                         |
| `blink()`             | Wraps the string in an HTML `<blink>` tag (deprecated).      | `'my text'.blink()` → `<blink>my text</blink>`                   |
| `fontcolor(color)`    | Wraps the string in an HTML `<font color="color">` tag.      | `'my text'.fontcolor('red')` → `<font color="red">my text</font>` |
| `fontsize(size)`      | Wraps the string in an HTML `<font size="size">` tag.        | `'my text'.fontsize(5)` → `<font size="5">my text</font>`         |
| `italics()`           | Wraps the string in an HTML `<i>` tag to make it italicized. | `'my text'.italics()` → `<i>my text</i>`                         |
| `link(url)`           | Wraps the string in an HTML `<a href="url">` link tag.       | `'Click here'.link('https://example.com')` → `<a href="https://example.com">Click here</a>` |
| `small()`             | Wraps the string in an HTML `<small>` tag to decrease font size. | `'my text'.small()` → `<small>my text</small>`                   |
| `strike()`            | Wraps the string in an HTML `<strike>` tag (deprecated).     | `'my text'.strike()` → `<strike>my text</strike>`                |
| `sub()`               | Wraps the string in an HTML `<sub>` tag for subscript.       | `'H2O'.sub()` → `<sub>H2O</sub>`                                 |
| `sup()`               | Wraps the string in an HTML `<sup>` tag for superscript.     | `'X2'.sup()` → `<sup>X2</sup>`                                  |

### Key Notes:
- These methods are **deprecated** and may not work in all environments (especially `blink()` and `strike()`).
- These methods are mainly used for **styling** the text content in HTML and can wrap strings in HTML tags that apply specific formatting like bold, italic, or link.

#### Example:
```javascript
let myText = 'Click here';
let wrappedLink = myText.link('https://example.com');
console.log(wrappedLink); // Outputs: <a href="https://example.com">Click here</a>
