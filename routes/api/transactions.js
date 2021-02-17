import express from 'express';
const router = express.Router();
import passport from 'passport';

import Transaction from '../../models/Transaction';
import validateTransactionInput from '../../validation/transactions';

router.get('/', (req, res) => {
    Transaction.find()
        .then(transactions => res.json(transactions))
        .catch(err => res.status(404).json({ notransactionfound: 'No transaction found' }));
});

export default router;