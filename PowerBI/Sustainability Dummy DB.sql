-- Create the tables
CREATE DATABASE SustainabilityDB2;
use SustainabilityDB2;
CREATE TABLE Materials (
    MaterialID INTEGER PRIMARY KEY,
    MaterialName TEXT,
    MaterialType TEXT
);

CREATE TABLE Suppliers (
    SupplierID INTEGER PRIMARY KEY,
    SupplierName TEXT,
    MaterialID INTEGER,
    FOREIGN KEY (MaterialID) REFERENCES Materials(MaterialID)
);

CREATE TABLE Manufacturers (
    ManufacturerID INTEGER PRIMARY KEY,
    ManufacturerName TEXT,
    SupplierID INTEGER,
    FOREIGN KEY (SupplierID) REFERENCES Suppliers(SupplierID)
);

CREATE TABLE Products (
    ProductID INTEGER PRIMARY KEY,
    ProductName TEXT
);

CREATE TABLE Designs (
    DesignID INTEGER PRIMARY KEY,
    ProductID INTEGER,
    DesignerID INTEGER,
    DesignFilePath TEXT,
    FOREIGN KEY (ProductID) REFERENCES Products(ProductID)
);

CREATE TABLE Orders (
    OrderID INTEGER PRIMARY KEY,
    ProductID INTEGER,
    Quantity INTEGER,
    OrderDate DATE,
    FOREIGN KEY (ProductID) REFERENCES Products(ProductID)
);

CREATE TABLE EnvironmentalImpact (
    ImpactID INTEGER PRIMARY KEY,
    MaterialID INTEGER,
    SupplierID INTEGER,
    ManufacturerID INTEGER,
    ImpactScore INTEGER,
    FactorType TEXT,
    FOREIGN KEY (MaterialID) REFERENCES Materials(MaterialID),
    FOREIGN KEY (SupplierID) REFERENCES Suppliers(SupplierID),
    FOREIGN KEY (ManufacturerID) REFERENCES Manufacturers(ManufacturerID)
);
