const { Router } = require('express');

const rootRouter = Router();
const router = Router();

router.post('/', async (req, res) => {

});

rootRouter.use('/demo', router);

module.exports = rootRouter;
