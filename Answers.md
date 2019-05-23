- find all customers that live in London. Returns 6 records.
  SELECT \* FROM Customers
  WHERE City = "London";

- find all customers with postal code 1010. Returns 3 customers.
  SELECT \* FROM Customers
  WHERE PostalCode = "1010";

- find the phone number for the supplier with the id 11. Should be (010) 9984510.
  SELECT \* FROM [Suppliers]
  WHERE SupplierID = 11;

- list orders descending by the order date. The order with date 1997-02-12 should be at the top.
  SELECT \* FROM [Orders]
  Order By OrderDate DESC;

- find all suppliers who have names longer than 20 characters. You can use `length(SupplierName)` to get the length of the name. Returns 11 records.
  SELECT \* FROM [Suppliers]
  WHERE length(SupplierName) > 20;

- find all customers that include the word "market" in the name. Should return 4 records.
  SELECT \* FROM [Customers]
  WHERE CustomerName LIKE '%market%';
