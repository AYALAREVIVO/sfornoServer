safeEval = require('safe-eval');
  
context = { bob: { alice: 'secret' } };

safeEval("return 1+1;", context);
