import { getDb } from '../migrations-utils/db';

export const up = async () => {
  const db = await getDb();

  // Insert data into 'gl' collection
  const glData = [
    { code: 100, name: 'CASH IN BANK-EURO SA# 302820119030' },
    { code: 102, name: 'PETTY CASH FUND' },
    { code: 103, name: 'CASH IN BANK-SA' },
    { code: 104, name: 'REVOLVING FUND' },
    { code: 106, name: 'CASH IN BANK-FCDU' },
    { code: 109, name: 'REFUNDABLE DEPOSIT--AR' },
    { code: 110, name: 'A/R-SSS SICKNESS' },
    { code: 116, name: 'ACCOUNT RECEIVABLE-TRADE' },
    { code: 117, name: 'A/R NON TRADE' },
    { code: 118, name: 'ADVANCES TO SUBCON' },
    { code: 119, name: 'ADVANCES TO OFFICERS & EMPL' },
    { code: 121, name: 'ADVANCES TO OTHERS' },
    { code: 122, name: 'ACCOUNTS RECEIVABLE-LOCAL' },
    { code: 123, name: 'ADVANCES TO SUPPLIERS' },
    { code: 130, name: 'ADVANCES TO/FROM FLORI/ROBUST' },
    { code: 134, name: 'ADVANCES TO/FROM-CANCAB' },
    { code: 136, name: 'ADVANCES TO/FROM KERAMIKAB' },
    { code: 137, name: 'ADVANCES TO/FROM KERAMIKASA' },
    { code: 139, name: 'SHORT TERM INVESTMENT' },
    { code: 140, name: 'INVENTORY-RAW MATERIALS' },
    { code: 141, name: 'INVENTORY-WORKING PROCESS' },
    { code: 142, name: 'INVENTORY-FINISHED GOODS' },
    { code: 143, name: 'OFFICE SUPPLIES INVENTORY' },
    { code: 147, name: 'AR-EMPLOYEES' },
    { code: 161, name: 'LAND IMPROVEMENTS' },
    { code: 162, name: 'ACCUMULATED DEPR.-LAND IMPROVEMENTS' },
    { code: 163, name: 'BUILDING' },
    { code: 164, name: 'BUILDING IMPROVEMENTS' },
    { code: 166, name: 'LEASEHOLD IMPROVEMENTS' },
    { code: 167, name: 'MACHINERY & EQUIPMENT' },
    { code: 168, name: 'DELIVERY & TRANSPORTATION EQPT.' },
    { code: 170, name: 'COMMUNICATION EQUIPMENT' },
    { code: 171, name: 'LABORATORY EQUIPMENT' },
    { code: 172, name: 'FURNITURE,FIXTURE & APPLIANCE' },
    { code: 173, name: 'TOOLS' },
    { code: 174, name: 'SHOWROOM' },
    { code: 175, name: 'COMPUTER SOFTWARE/PROGRAM' },
    { code: 177, name: 'SMALLTOOLS, SUPPLIES AND EQUIPMENT' },
    { code: 178, name: 'FACILITY IMPROVEMENT' },
    { code: 181, name: 'ACCUMULATED DEPR.-PPE' },
    { code: 182, name: 'CONSTRUCTION IN PROGRESS' },
    { code: 184, name: 'COMPUTER & OFFICE EQUIPMENT' },
    { code: 190, name: 'PREPAID EXPENSE' },
    { code: 193, name: 'CREDITABLE TAX WITHELD' },
    { code: 194, name: 'ACCRUED INTEREST RECEIVABLE' },
    { code: 501, name: 'ACCOUNT PAYABLE' },
    { code: 503, name: 'ACCOUNT PAYABLE-BIR' },
    { code: 504, name: 'ACCOUNT PAYABLE-SSS' },
    { code: 505, name: 'ACCOUNT PAYABLE-PHEALTH' },
    { code: 506, name: 'ACCOUNT PAYABLE-PBIG' },
    { code: 508, name: 'ACCOUNTS PAYABLE-ACCRUED EXPENSES' },
    { code: 509, name: 'ADVANCES TO/FROM - PCK POOL' },
    { code: 510, name: 'ADVANCES TO/FROM OTHERS' },
    { code: 511, name: 'ACCRUED RETIREMENT PAY' },
    { code: 534, name: 'VOUCHERS PAYABLE' },
    { code: 535, name: 'CONTINGENT LIABILITY' },
    { code: 541, name: 'PDC PAYABLE' },
    { code: 542, name: 'A/P - STALE CHECK' },
    { code: 543, name: 'INCOME TAX PAYABLE' },
    { code: 544, name: 'LOANS PAYABLE-DOST' },
    { code: 545, name: 'LOANS PAYABLE' },
    { code: 602, name: 'SHARE CAPITAL (PAID UP)' },
    { code: 603, name: 'RETAINED EARNINGS' },
    { code: 701, name: 'SALES-EXPORT' },
    { code: 703, name: 'SALES-BY PRODUCT/SCRAP' },
    { code: 704, name: 'INTEREST INCOME' },
    { code: 705, name: 'GAIN/(LOSS) ON FOREX' },
    { code: 706, name: 'OTHER INCOME' },
    { code: 710, name: 'INTEREST INCOME FROM SHORT TERM INV' },
    { code: 712, name: 'PROVISION FOR INCOME TAX' },
    { code: 803, name: 'COST OF PRODUCTION' },
    { code: 806, name: 'DIRECT MATERIALS' },
    { code: 904, name: 'REPAIRS AND MAINTENANCE' },
    { code: 801, name: 'DIRECT LABOR' },
    { code: 810, name: 'MANUFACTURING OVERHEAD' },
    { code: 900, name: 'GENERAL & ADMINISTRATIVE EXPENSE' },
    { code: 901, name: 'EXECUTIVE DEPARTMENT' },
    { code: 902, name: 'PRODUCT RESEARCH AND DEVELOPMENT' },
    { code: 903, name: 'SELLING & MARKETING EXPENSE' },
    { code: 910, name: 'OPERATING EXPENSES-LOCAL SALE' },
  ];

  // Get the collection
  const slCollection = db.collection('glcode');

  // Loop through each entry in slData and insert if the code doesn't already exist
  for (const data of glData) {
    const existingDoc = await slCollection.findOne({ code: data.code });

    if (existingDoc) {
      console.log(`Document with code ${data.code} already exists, skipping.`);
    } else {
      // Insert the new document if code doesn't exist
      await slCollection.insertOne(data);
      console.log(`Document with code ${data.code} inserted successfully.`);
    }
  }

  console.log("Data inserted into 'glcode' collection successfully.");
};

export const down = async () => {
  const db = await getDb();

  // Remove all records from 'gl' collection
  await db.collection('gl').deleteMany({});
};
