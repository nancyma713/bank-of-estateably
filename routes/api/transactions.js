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

router.get('/:userId', (req, res) => {
    Transaction.find({ userId: req.params.userId })
        .then(transactions => res.json(
            transactions.map(transaction => {
                return {
                    category: transaction.category,
                    description: transaction.description,
                    value: transaction.value,
                    id: transaction.id,
                }
            })
        ))
        .catch(err => res.status(404).json({ notransactionsfound: 'No transactions found from that user' }));
});

router.get('/:id', (req, res) => {
    Transaction.findById(req.params.id)
        .then(transaction => res.json(transaction))
        .catch(err => res.status(404).json({ notransactionfound: 'No transaction found with that ID' }));
});

router.post('/new',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { errors, isValid } = validateTransactionInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        const newTransaction = new Transaction({
            category: req.body.category,
            description: req.body.description,
            value: req.body.value,
            userId: req.user.id
        });

        newTransaction.save()
            .then(transaction => res.json(transaction));
    }
)

export default router;