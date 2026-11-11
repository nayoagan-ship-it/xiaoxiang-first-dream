// Optional QA dependency: npm install --no-save --package-lock=false playwright
module.exports=require(process.env.JIAFU_PLAYWRIGHT_PACKAGE||'playwright');
