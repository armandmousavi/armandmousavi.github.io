# Example Post

This is an example of another markdown file.

## Code Example

```rust
fn main() {
    println!("Hello from Rust!");
    let fibonacci = |n: u32| -> u32 {
        match n {
            0 => 0,
            1 => 1,
            _ => fibonacci(n - 1) + fibonacci(n - 2),
        }
    };
}
```

## Math Example

The quadratic formula: $x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$

Matrix multiplication:

$$
\begin{bmatrix}
a & b \\
c & d
\end{bmatrix}
\begin{bmatrix}
e & f \\
g & h
\end{bmatrix}
=
\begin{bmatrix}
ae + bg & af + bh \\
ce + dg & cf + dh
\end{bmatrix}
$$

## Navigation

[← Back to Home](#main)

---

*Created: October 2025*

