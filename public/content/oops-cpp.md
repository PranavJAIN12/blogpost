---
id: 3
title: OOPs in C++
description: This is OOPs tutorial and this is for learning Object oriented programming
slug: oops-cpp
date: 02/03/2025
author: Pranav
image: /oops.png

---

# Object-Oriented Programming in C++: Principles and Practices

## Introduction to OOP

Object-Oriented Programming (OOP) is a programming paradigm that uses objects and classes to organize and structure code. C++ provides robust support for OOP principles, allowing developers to create more modular, reusable, and maintainable code.

## Key OOP Concepts in C++

### 1. Classes and Objects

A class is a user-defined data type that encapsulates data and functions that operate on that data. An object is an instance of a class.

```cpp
class Car {
private:
    string brand;
    int year;

public:
    // Constructor
    Car(string b, int y) {
        brand = b;
        year = y;
    }

    // Member function
    void displayInfo() {
        cout << "Brand: " << brand << ", Year: " << year << endl;
    }
};

int main() {
    Car myCar("Toyota", 2022);
    myCar.displayInfo();
    return 0;
}
```

### 2. Encapsulation

Encapsulation is the bundling of data and methods that operate on that data within a single unit (class), and restricting direct access to some of the object's components.

```cpp
class BankAccount {
private:
    double balance;  // Private member, cannot be accessed directly

public:
    // Public methods to interact with private data
    void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
        }
    }

    double getBalance() {
        return balance;
    }
};
```

### 3. Inheritance

Inheritance allows a class to inherit properties and methods from another class.

```cpp
class Animal {
protected:
    string name;

public:
    Animal(string n) : name(n) {}
    
    void eat() {
        cout << name << " is eating." << endl;
    }
};

class Dog : public Animal {
public:
    Dog(string n) : Animal(n) {}
    
    void bark() {
        cout << name << " is barking." << endl;
    }
};

int main() {
    Dog myDog("Buddy");
    myDog.eat();   // Inherited method
    myDog.bark(); // Dog's specific method
    return 0;
}
```

### 4. Polymorphism

Polymorphism allows objects of different classes to be treated as objects of a common base class.

#### Function Overloading
```cpp
class Calculator {
public:
    int add(int a, int b) {
        return a + b;
    }

    double add(double a, double b) {
        return a + b;
    }
};
```

#### Virtual Functions and Runtime Polymorphism
```cpp
class Shape {
public:
    virtual double getArea() = 0;  // Pure virtual function
};

class Rectangle : public Shape {
private:
    double width, height;

public:
    Rectangle(double w, double h) : width(w), height(h) {}

    double getArea() override {
        return width * height;
    }
};

class Circle : public Shape {
private:
    double radius;

public:
    Circle(double r) : radius(r) {}

    double getArea() override {
        return 3.14 * radius * radius;
    }
};

int main() {
    Shape* shapes[2];
    shapes[0] = new Rectangle(5, 3);
    shapes[1] = new Circle(4);

    for (Shape* shape : shapes) {
        cout << "Area: " << shape->getArea() << endl;
    }

    return 0;
}
```

### 5. Abstraction

Abstraction means hiding complex implementation details and showing only the necessary features of an object.

```cpp
class Database {
private:
    void connectToServer() {
        // Complex connection logic
    }

    void authenticate() {
        // Authentication process
    }

public:
    void query(string sqlQuery) {
        connectToServer();
        authenticate();
        // Execute query
        cout << "Executing query: " << sqlQuery << endl;
    }
};
```

## Advanced OOP Concepts

### Templates
```cpp
template <typename T>
class Stack {
private:
    vector<T> elements;

public:
    void push(T item) {
        elements.push_back(item);
    }

    T pop() {
        if (!elements.empty()) {
            T item = elements.back();
            elements.pop_back();
            return item;
        }
        throw runtime_error("Stack is empty");
    }
};
```

### Friend Functions and Classes
```cpp
class MyClass {
private:
    int privateData;

    // Friend function can access private members
    friend void printPrivateData(const MyClass& obj);
};

void printPrivateData(const MyClass& obj) {
    cout << "Private data: " << obj.privateData << endl;
}
```

## Best Practices

1. Follow the Single Responsibility Principle
2. Use inheritance judiciously
3. Prefer composition over inheritance
4. Make interfaces simple and intuitive
5. Use const-correctness
6. Implement proper error handling

## Conclusion

Object-Oriented Programming in C++ provides powerful tools for creating organized, efficient, and maintainable software. By understanding and applying these principles, you can write more robust and scalable code.

*Happy Coding!*