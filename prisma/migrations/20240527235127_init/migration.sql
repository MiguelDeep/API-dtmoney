-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_dtmoney" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "price" INTEGER NOT NULL
);
INSERT INTO "new_dtmoney" ("category", "date", "id", "price", "title") SELECT "category", "date", "id", "price", "title" FROM "dtmoney";
DROP TABLE "dtmoney";
ALTER TABLE "new_dtmoney" RENAME TO "dtmoney";
PRAGMA foreign_key_check("dtmoney");
PRAGMA foreign_keys=ON;
