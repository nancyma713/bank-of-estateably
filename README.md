## Install dependencies

- run `npm install`

## Available scripts

- `npm run dev`: runs in development mode

_____


# Main RESTful APIs

## Users

### POST /register
Register a new user.
```
{
    "email": "test@email.com",
    "password": "password123",
    "password2": password123
}
```

### POST /login
Log in a user.
```
{
    "email": "test@email.com",
    "password": "password123"
}
```

## Transactions

### GET /:userId
Return all transactions for user.
```
{
    "userId": "32ETWFGFL3F1053",
}
```

### POST /new
Create new transaction.
```
{
    "category": "Food",
    "description": "Groceries",
    "value": 20,
    "userId": "32ETWFGFL3F1053"
}
```
### GET /:id
Return transaction with that id.
```
{
    "id": "12345678ASDFGH",
}
```

### GET /filter/:userId/:category
Return all transactions filtered for the category.
```
{
    "userId": "32ETWFGFL3F1053",
    "category": "Food"
}
```

### GET /descsearch/:userId/:searchTerm
Return all searches with search term in description.
```
{
    "userId": "32ETWFGFL3F1053",
    "searchTerm": "Bus"
}
```

### GET /valuesearch/:userId/:valueAmt
Return all searches with value amount in value.
```
{
    "userId": "32ETWFGFL3F1053",
    "valueAmt": 200
}
```

