"""
Simple calculator module for demonstrating Python basics and testing.
This file serves as an example for students to practice Git operations.
"""

def add(a, b):
    """Add two numbers together."""
    return a + b

def subtract(a, b):
    """Subtract second number from first."""
    return a - b

def multiply(a, b):
    """Multiply two numbers."""
    return a * b

def divide(a, b):
    """Divide first number by second. Raises ValueError for division by zero."""
    if b == 0:
        raise ValueError("Cannot divide by zero")
    return a / b

def power(base, exponent):
    """Calculate base raised to the power of exponent."""
    return base ** exponent

if __name__ == "__main__":
    # Simple demonstration
    print("Calculator Demo:")
    print(f"5 + 3 = {add(5, 3)}")
    print(f"10 - 4 = {subtract(10, 4)}")
    print(f"6 * 7 = {multiply(6, 7)}")
    print(f"15 / 3 = {divide(15, 3)}")
    print(f"2 ^ 4 = {power(2, 4)}")